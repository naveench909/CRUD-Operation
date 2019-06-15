const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0-daffy.mongodb.net/application?retryWrites=true&w=majority', ()=>{
    console.log('Connected to mongodb..');
});