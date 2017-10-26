var express = require('express');
var router = express.Router();
var fs=require("fs");

router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');  // 解决跨域
	fs.readFile("public/feng.txt","utf-8",function(err,data){
		console.log(data)
		var arr=JSON.parse(data);
		arr.push({name:req.body.name,title:req.body.title})
		console.log(arr)
		fs.writeFile("public/feng.txt",JSON.stringify(arr),function(err){
			fs.readFile("public/feng.txt","utf-8",function(err,fen){
				var data=JSON.parse(fen);
				res.send({name:data});
			})
		})
	})
});

module.exports = router;
