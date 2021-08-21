//!/* ------------------------------ adding pakage ----------------------------- */
//jshint esversion:6 
require('dotenv').config();
const express=require('express');
const request=require('request');
const mongoose=require('mongoose');
const encrypt = require('mongoose-encryption');
const md5 = require('md5');
const ejs=require('ejs');
const app =express();
const port =3000;

//!/* --------------------------------- setting -------------------------------- */
// form input 
app.use(express.urlencoded())

//using public file
app.use('/public',express.static('public'))

//seting view engine
app.set('view engine','ejs')
app.set('views',__dirname)


//!/* -------------------------------- mongoose -------------------------------- */
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("we are connected to the mongoDB at port 27017");
});

//collection ka schema
const articleSchema= new mongoose.Schema({
	title: String,
	content: String
});
const article=mongoose.model("articles",articleSchema);

//!/* ---------------------------------- route --------------------------------- */

app.get('/',(req,res)=>{
	res.render("./views/index.ejs",{ })
})


//!/* --------------------------------- listen --------------------------------- */
app.listen(port,function(){
	console.log("server running in port "+port);
});
