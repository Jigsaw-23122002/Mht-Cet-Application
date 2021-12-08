const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const MathsMod=new Schema({
    Chapter:{
        type:String,
        required:true
    },
    Question:{
        type:String,
        required:true
    },
    Answers:[]
});

const MathModal=mongoose.model('mathsdata',MathsMod);
module.exports=MathModal;