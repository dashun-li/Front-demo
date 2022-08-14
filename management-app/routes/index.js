var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/admins",function(err){
    if(err){
      throw err
    }else{
      console.log("数据库已经连接");
    }
});
// 创建骨架
var adminSchema = mongoose.Schema({
    username:String,
    password:String,
    unitname: String,
    num : Number,//排序
    role : String,
    section: String,  
    ck :Number //选中状态
});
// 创建日志骨架
var logSchema = mongoose.Schema({
    username: String,
    operation: String,
    optime: String,
    result: String,
    ip: String
})

//发布模板
var userModel =mongoose.model("list",adminSchema,"list");
 //发布日志模板
var logModel = mongoose.model("log", logSchema, "log");



//验证用户与密码是否存在
//(从正经登录界面进)
router.post('/check.html', function(req, res) {
    //判断接受到的用户名和密码是否正确
    var username = req.body.username;
    var password = req.body.password;
    //查询数据库中的数据是不是与输入的值相匹配,匹配的话就登录成功
    userModel.find({"username":username,"password":password}).exec(function(err,data){
      //  console.log(data) 通过打印正确与错误情况下的数据状态,响应数据给前端
        if(data.length){
          //从登录界面进,设置一个cookie跟踪用户状态
          res.cookie("user",username);
          res.send("1")
        }else{
          res.send("0")
        }
    });
});
//获取页面的cookie值,如果不是从login进,就阻止,如果是,就跳转
router.get("/checklog.html",function(req,res){
  //获取cookies
  var user =  req.cookies.user;
  //如果user不存在,就重新登录
  if(user){
      res.send("1")
  }else{
    res.send("alert('请重新登录'); location.href='login.html';")
  }
});
//登录退出
//退出登录后,清除cookie,并跳回
router.get("/logout.html",function(req,res){
  res.clearCookie("user");
  res.send("<script>alert('退出成功');location.href='/admin/pages/login.html';</script>");
});

//新增用户(将数据保存到数据库)
router.post("/admin/pages/checkadds.html", function (req, res) {
  //将获取到的数据传入后端
      var unitname = req.body.unitname;
      var username = req.body.username;
      var password = req.body.password;
      var num = req.body.num;
      var role = req.body.role;
      var section = req.body.section;
      var ck = req.body.ck;
      
 //创建实体,接受数据然后保存至数据库
      var listdata = new userModel();
      listdata.unitname = unitname;
      listdata.username = username;
      listdata.password = password;
      listdata.num = parseInt(num);//传入的数据是字符串,要转化为数字类型
      listdata.role = role;
      listdata.section = section;
      listdata.ck = parseInt(ck); //传入的数据是字符串,要转化为数字类型
     
      listdata.save(function(err){
         if(err){
           res.send("0")
           var result = '失败'
         }else{
           res.send("1");//成功保存1
           var result = '成功';
         }
         //保存日志
         var log = new logModel();
         
         log.username = req.cookies.user;
         
         log.operation = "新增了一个用户" + username;
         log.optime = new Date();
         log.result = result;
         log.ip = req.ip;
         
         log.save();

      });
     
});
//将用户数据渲染到页面
router.get("/admin/pages/users.html",function(req,res){
    userModel.find().exec(function(err,data){
        res.send(data);
    });
    
});

//获取删除的数据
router.post("/admin/pages/del.html",function(req,res){//用get的方式获取的话,会将几个id连成一个字符串
    //获取到的req.body是一个拥有键值对的对象:key:arr[],值为获取到的id数组
    //对象.属性如果不行就用,对象[属性]
    var arr = req.body['arr[]'];
    //console.log(arr)
    //获取到前端的数据,查找数据
    userModel.find({"_id":{$in:arr}}).exec(function(err,data){
          if(data.length){
          //  data.length=0;将数组清空的方法,不能讲数据从数据库里清除
            for(var i in data){
                var username = data[i].username;
                data[i].remove();
            }
            res.send("1")
            var result = "成功"
          }else{
            res.send("0")
            var result = "失败"
          }
          //保存日志
          var log = new logModel();

          log.username = req.cookies.user;
          log.operation = "删除了用户" + username;
          log.optime = new Date();
          log.result = result;
          log.ip = req.ip;
     
          log.save();


    });
});
//编辑页面
router.post("/admin/pages/get.html", function (req, res) {//用get的方式获取的话,会将几个id连成一个字符串
  //获取到的req.body是一个拥有键值对的对象:key:arr[],值为获取到的id数组
  //对象.属性如果不行就用,对象[属性]
  var arr = req.body['arr[]'];
  //console.log(arr)
  //获取到前端的数据,查找数据
  userModel.find({ "_id": { $in: arr } }).exec(function (err, data) {
    if (data.length) {
      var username = data[0].username
      res.send(data[0]);
      var result= "成功"
    } else {
      res.send("0")
      var result = "失败"
    }
    //保存日志
    var log = new logModel();
    log.username = req.cookies.user;
    log.operation = "修改了用户" + username;
    log.optime = new Date();
    log.result = result;
    log.ip = req.ip;
    log.save();


  });
}); 
//保存编辑后的数据
router.post("/admin/pages/edit.html", function (req, res) {
  //将获取到的数据传入后端
  var unitname = req.body.unitname;
  var username = req.body.username;
  var password = req.body.password;
  var num = req.body.num;
  var role = req.body.role;
  var section = req.body.section;
  var ck = req.body.ck;
  var id = req.body.id;
  //修改后的数据
  var datas = {
    "unitname": unitname,
    "username": username,
    "password": password,
    "num": num,
    "role": role,
    "section": section,
    "ck": ck,
  };
  var newdata = {$set:datas}
  userModel.update({"_id":id},newdata,function(err){
      if(err){
        res.send("0")
      }else(
        res.send("1")
      )
  });

});
//查询数据,分页
router.post("/admin/pages/search.html", function (req, res) {
  var parm = {}; //定义对象保存查询条件.如果条件改变就将改变的条件保存到对象中,不符合条件就不保存
  var section = req.body.section;
  var role = req.body.role;
  var unitname = req.body.unitname;
  if (section != "全部") {
    parm.section = section;
  }
  if (role != "全部") {
    parm.role = role;
  }
  if (unitname != "") {
    parm.unitname = new RegExp(unitname); //输入框需要模糊查询.用正则斜杠直接加在unitname上,相当于匹配unitname
  }
  userModel.find(parm).exec(function (err, data) {
    //设置每页显示的数据条数
    var count = 3;
    //由前端传入页码数
    //如果传入页码,就显示当前页码,如果没有传入页码就默认显示第一页
    var page = req.body.page ? req.body.page : 1;
    //(需要跳过的数据数)
    var n = (page - 1) * count;
    //获取数据的所有数据(除了findById找到的是对象,find找到的数据都是用数组的形式呈现)
    //获取数据总条数
    var datacount = data.length;
    //设置总页数
    var pagecount = Math.ceil(datacount / count);
    userModel.find(parm).limit(count).skip(n).exec(function (err, data) {
      //将pagecount追加到数组data中
      data.push({
        "count": count
      });
      data.push({
        "datacount": datacount
      });
      data.push({
        "pagecount": pagecount
      })
      res.send(data);
    })
  });
});

//修改密码页面
router.post("/admin/pages/check_pwd.html",function(req,res){
      var oldpassword = req.body.oldpassword;
      var newpassword = req.body.newpassword;
      var username = req.cookies.user;

      userModel.find({ "username": username, "password": oldpassword},function(err,data){
       //find找到的是数组.
        if(data.length){
          
          data[0].password = newpassword;
          console.log(data[0]);
          data[0].save(function (err) {
            if (err) {
              res.send({ "status": "101", "msg": "密码保存错误" })
            } else {
              res.send({ "status": "100", "msg": data[0] })
            }
          })
        }else{
          res.send({"status":"1111","msg":"密码输入错误"})
        }
      })
});

//获取日志数据
router.get("/admin/pages/get_log.html",function(req,res){
  //去数据库查询出所有日志的数据
  logModel.find({}).exec(function (err, data) {
    res.send(data);
  })
});


module.exports = router;
