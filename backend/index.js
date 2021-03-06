const express=require('express');
const http=require('http');
const app=express();
const cors=require('cors');
const { Server }=require('socket.io');
const Question=require('./Model.js');
const mongoose= require('mongoose');
const Ans = require('./Modal.js');
const ChemQuest = require('./ChemModal.js');
const MathQuest=require('./MathsModal');
app.use(cors());
require('dotenv').config();

const server=http.createServer(app);

const mongoUrl=process.env.MongoDB_URL;
mongoose.connect(mongoUrl);

const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:['GET','POST']
    }
})

io.on('connection',(socket)=>{

    console.log("Connected to the backend server.")

    socket.on("Upload",(data)=>{
        const model=new Question({
            Chapter:data.Chapter,
            Question:data.Question
        });
        model.save();
    })

    socket.on("getPhysicsQuestions",()=>{
        console.log("Request for questions.");
        Question.find()
        .then((data)=>{
            console.log(data);
            socket.emit("takePhysicsQuestions",data);
        })
    })

    socket.on("addAnswer",(data)=>{
        let modal=new Ans({
            QuestID:data.QuestionID,
            QuestAnswer:data.Answer
        })
        modal.save();
    })
    socket.on('getPreviousAnswers',(questId)=>{
        console.log('Request Intercepted at the backend.');
        Ans.find({"QuestID":questId})
        .then((data)=>{
            console.log(data);
            socket.emit('checkAnswers',data);
        })
    })
    socket.on('addTheAnswer',(object)=>{
        if(object.Answer!==""  && object.Answerer!==""){
            console.log('Got answer in the backend')
            console.log(object);
            Question.findOneAndUpdate({_id:object.QuestionID},{
                $push:{
                    Answers:object
                }
            })
            .then(()=>{
                socket.emit('AddingAnswerConfirmation',"Answer Appended Successfully.");
            })
        }
    })
    socket.on('addTheAnswerChem',(object)=>{
        if(object.Answer!==""  && object.Answerer!==""){
            console.log('Got answer in the backend')
            console.log(object);
            ChemQuest.findOneAndUpdate({_id:object.QuestionID},{
                $push:{
                    Answers:object
                }
            })
            .then(()=>{
                socket.emit('AddingAnswerConfirmation',"Answer Appended Successfully.");
            })
        }
    })
    socket.on('addTheAnswerMath',(object)=>{
        if(object.Answer!==""  && object.Answerer!==""){
            console.log('Got answer in the backend')
            console.log(object);
            MathQuest.findOneAndUpdate({_id:object.QuestionID},{
                $push:{
                    Answers:object
                }
            })
            .then(()=>{
                socket.emit('AddingAnswerConfirmation',"Answer Appended Successfully.");
            })
        }
    })
    socket.on('UploadChemistry',(object)=>{
        let OBJECT=new ChemQuest({
            Chapter:object.Chapter,
            Question:object.Question
        })
        OBJECT.save();
    })
    socket.on('getChemistryQuestions',()=>{
        ChemQuest.find()
        .then((data)=>{
            console.log(data);
            socket.emit('takeChemistryQuestions',data);
        })
    })
    socket.on('UploadMaths',(object)=>{
        let OBJECT=new MathQuest({
            Chapter:object.Chapter,
            Question:object.Question
        })
        OBJECT.save();
    })
    socket.on('getMathsQuestions',()=>{
        MathQuest.find()
        .then((data)=>{
            console.log(data);
            socket.emit('takeMathsQuestions',data);
        })
    })
})

;
server.listen(3001,()=>{
    console.log("Server currently running");
})