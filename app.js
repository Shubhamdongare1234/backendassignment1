var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const fs=require('fs');
const pdfParse=require('pdf-parse');
const getPdf=async(file)=>{
  
   try{
        let pdfExtract=await pdfParse(file)
        console.log("file content:",pdfExtract.text)
         }catch(err){
        throw new Error(err)
        //console.log("error in code");
    }
}
const pdfread=fs.readFileSync('./public/invoice_eg.pdf');
getPdf(pdfread);
fs.readFileSync('./public/invoice_eg.pdf');

module.exports = app;
