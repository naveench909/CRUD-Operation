const router=require('express').Router();
const User=require('../db/Models/userSchema');

router.get('/showUsers',(req,res)=>{
    User.find({}).then((data)=>{
        res.send(data);
    }).catch((e)=>{
        console.log(e);
    })
});

router.get('/addUser',(req,res)=>{
    res.render('addUser');
});

router.post('/addUser',(req,res)=>{
    console.log(req.body);
    new User(req.body).save().then((data)=>{
        res.send(data);
    }).catch((e=>{
        console.log("error in inserting record ",e);
    }))
    
})
router.get('/updateUser',(req,res)=>{
    res.render('update');
});

router.post('/updateUser',(req,res)=>{
    User.findOneAndUpdate({_id:req.body._id},{userName:req.body.userName,password:req.body.password}).then((data)=>{
        res.send('updated');
    }).catch((e)=>{
        console.log(e);
    })
})

router.get('/deleteUser',(req,res)=>{
    res.render('delete');
});

router.post('/deleteUser',(req,res)=>{
    User.findOneAndDelete({_id:req.body._id}).then((data)=>{
        res.status(200).send(data);
    }).catch((e)=>{
        console.log(e);
    });
});

module.exports=router;