var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/message",function(err){
    console.log('数据库已连接');
});

//搭建骨架
var mesSchema = mongoose.Schema({
    content:String
});
 //发布模型
var mesModel =mongoose.model("content",mesSchema,"content");

router.get('/', function (req, res, next) {
    res.render('message.ejs', {});
});
//保存数据,并跳转页面
router.post('/message_save.html',function(req,res){
    var content = req.body.content;
    var useModel =new mesModel();
    useModel.content=content;
    useModel.save(function(err){
        if(err){
            throw err;
        }else{
            res.send("<script>alert('留言成功');location.href='/message/list.html';</script>")
        }
    });
}); 
//将保存的数据存到留言板中
router.get("/list.html",function(req,res){
    mesModel.find({},function(err,data){
        if(err){
            throw err;
        }else{
            res.render("list.ejs",{"mesdata":data});
        }
    });
});



module.exports = router;
