const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Answer=new Schema({
    QuestID:{
        type:String,
        required:true
    },
    QuestAnswer:{
        type:String,
        required:true
    }
})

const Ans=mongoose.model('Answer',Answer);
module.exports=Ans;