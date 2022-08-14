var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/news", function () {
    console.log("数据库已启动...");
});
//创建骨架
var newsSchema = mongoose.Schema({
    title: String,
    author: String,
    source: String,
    content: String,
    ctime: String
});
//发布模型
var newsModel = mongoose.model("content", newsSchema, "content");
//创建实例, 哪里有需要就哪里创建实例

//创建骨架
var msgSchema = mongoose.Schema({
   msg:String
});
//发布模型
var msgModel = mongoose.model("msg", msgSchema, "msg");
//发送新闻请求,显示新闻信息输入界面
router.get("/", function (req, res) {
    res.render("newsadd.ejs", {});
});
//填写信息,获取填写的信息传给后端,后端保存到数据库中,按提交跳转到list列表
router.post("/news_save.html", function (req, res) {
    var title = req.body.title;
    var author = req.body.author;
    var source = req.body.source;
    var content = req.body.content;
    var ctime = new Date().toLocaleString;
    //实例化模型,装数据
    var userModel = new newsModel();
    userModel.title = title;
    userModel.author = author;
    userModel.source = source;
    userModel.content = content;
    //跳转到新闻列表
    userModel.save(function (err) {
        if (err) {
            res.send("<script>alert('未发布成功');</script>");
        } else { //数据传输成功跳转到新闻列表页面
            res.send("<script>alert('发布成功');location.href='/news/newslist.html';</script>");
        }
    });
});
//点击提交,跳转到list页面,并将增加的数据添加到list页面
router.get("/newslist.html", function (req, res) {
    newsModel.find({}, function (err, data) {
        if (err) {
            throw err;
        } else {
            //将传入的数据传入页面和模板合并形成页面(循环体是tr内的内容)
            res.render("newslist.ejs", {"newsdata": data});
        }
    });
});
//点击删除,跳回列表
router.get("/newsdel.html", function (req, res) {
    var id = req.query.id;
    newsModel.findById(id, function (err, data) {
        if (err) {
            res.send("<script>alert('删除不成功');</script>");
        } else {
            data.remove();
            res.send("<script>alert('删除成功');location.href='/news/newslist.html';</script>");
        }
    });
});
//点击修改,跳转到edit
router.get("/news_edit.html", function (req, res) {
    var id = req.query.id;
    newsModel.findById(id, function (err, data) {
        if (err) {
            throw err;
        } else {
            //将数据回填
            res.render("newsedit.ejs", {"newsdata": data});
        }
    });
});
//将修改的数据保存,传回list页面
router.post("/newsedit_save.html", function (req, res) {
    //获取保存的数据
    //post获取到的不是地址栏的值,是name属性里的值,需要一个中介将id装载再分配出来,于是就增加一个隐藏文本域
    var id = req.body.id;
    var title = req.body.title;
    var author = req.body.author;
    var source = req.body.source;
    var content = req.body.content;
    
    //将保存的数据,赋值给找到的id的数据
    newsModel.findById(id, function (err, data) {
        //重新赋值
        data.title = title;
        data.author = author;
        data.source = source;
        data.content = content;
        //将修改后的值保存
        data.save(function (err) {
            if (err) {
                res.send("<script>alert('修改不成功'); </script>");
            } else {
                res.send("<script>alert('修改成功');location.href='/news/newslist.html';</script>");
            }
        })
    });




});
//请求新闻详情页面时,跳转并将相应数据赋值到详情页面
router.get("/news_view.html",function(req,res){
    var id = req.query.id;
    newsModel.findById(id,function(err,data){
        if(err){
            throw err;
        }else{
            res.render("newsview.ejs",{"newsdata":data});
        }
    });
});
//详情页面的留言功能
//保存数据,并跳转页面
router.post('/message_save.html', function (req, res) {
    var msg = req.body.msg;
    var useModel = new msgModel();
    useModel.msg = msg;
    useModel.save(function (err) {
        if (err) {
            throw err;
        } else {
            res.send("<script>alert('留言成功');location.href='/news/newsview.html';</script>")
        }
    });
});
//将保存的数据存到留言板中
router.get("/newsview", function (req, res) {
    msgModel.find({}, function (err, data) {
        if (err) {
            throw err;
        } else {
            res.render("newslist.ejs", { "mgs": data});
        }
    });
});
module.exports = router;