const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const Question=new Schema({
    Chapter:{
        type:String,
        required:true
    },
    Question:{
        type:String,
        required:true
    },
    Answers:[]
})

let Quest=mongoose.model('Data',Question);

module.exports=Quest;