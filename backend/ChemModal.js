const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ChemModal=new Schema({
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

let ChemQuest=mongoose.model('ChemistyData',ChemModal);

module.exports=ChemQuest;