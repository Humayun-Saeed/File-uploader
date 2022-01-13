
var express=require('express')
var path=require('path')
//const { _logFunc } = require('nodemailer/lib/shared')
var uploader=require('express-fileupload')
var app=express()

app.use(uploader())
app.post('/',async(req,res)=>{


if(req.files){
    res.send("uploaded a file");
}
var file=req.files.file
var filename=file.name
console.log(filename);
var extension=path.extname(filename).toLocaleLowerCase();
console.log(extension);
if(extension!='.jpeg'&&extension!='.png'){
    res.send("plaz upload only jepeg file:")
}
file.mv('./uploads/'+filename,(err)=>{
if(err){
    console.log(err);
}
else{
    console.log("data is uploaded suuccessfully on the requried folder: ");
}
})
})



app.listen(8000,()=>{
    console.log("server is running at the port:");
})
