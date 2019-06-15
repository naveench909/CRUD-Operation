const express=require('express');
const ejs=require('ejs');
const bodyParser=require('body-parser');
const userRoutes=require('./routes/userRoutes');
require('./db/connection');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/adminLogin',(req,res)=>{
    if(req.query.username==='admin'&&req.query.password==='admin')
    {
        res.render('adminScreen');
    }
    else{
        res.redirect('/');
    }
})

//users routes
app.use('/user',userRoutes);


app.listen(process.env.port||3000,()=>{
    console.log('server started..');
});