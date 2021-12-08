import PhysicsPractice11 from "./PhysicsPractice11";
import PhysicsPractice12 from "./PhysicsPractice12";
import {useState,useContext, useEffect} from "react";
import "../CssSection/MyCss.css";
import {Link} from 'react-router-dom'
import PQASection from "./PQASection";
import UserContext from "../UserContext";
import io from 'socket.io-client'
const socket=io.connect('http://localhost:4500')


function Physics(){
    let [watch11,setWatch11]=useState(false);
    let [watch12,setWatch12]=useState(false);
    let [questSection,setQuestSection]=useState(false);
    const {physicsData,setPhysicsData}=useContext(UserContext);

    function wth12(){
        setWatch12(true);
    }
    function wth11(){
        setWatch11(true);
    }
    function clswth11(){
        setWatch11(false);
    }
    function clswth12(){
        setWatch12(false);
    }
    function wthqs(){
        console.log('Request for physics questions emited from the frontend.')
        socket.emit('getPhysicsQuestions');
        setQuestSection(true);
    }
    function clsqs(){
        setQuestSection(false);
    }
    useEffect(()=>{
        socket.on('takePhysicsQuestions',(data)=>{
            console.log(data);
            setPhysicsData(data);
            console.log(physicsData);
        })
    },[socket])

    return (
        <div id="PMain">
            <h2>Physics</h2>
            <hr/>
            { !questSection?(
            <div>
                <div>
                    <h3>Tips for Physics</h3>
                    <div>
                        <p>
                            Firstly,In order to solve the physics in MHT-CET,one has must be well thorough with all the concepts of the state textbook.To solve numericals fast, your concepts needs to be crystal clear. So, whenever you start a topic, first read theory thoroughly, then have a look at some of the solved examples to understand the application of concepts, then attempt some formula-based questions and finally go for trickier numericals. One month before the exam, solve as many mock tests as possible to improve your speed and accuracy in solving numericals.
                        </p>
                        <div>
                            <h4>Important topics of standard 11-</h4>
                            <ul><p>Force, Friction in Solids and Liquids, Scalars and Vectors, Ray Optics, Refraction of Light, Magnetic Effect of Electric Current, Magnetism.</p></ul>
                            <h4>Important topics of standard 12-</h4>
                            <ul><p>Optics, Waves and sound, Properties of Matter and Fluid Mechanics, Rotational motion, Electrostatics, Current Electricity.</p></ul>
                        </div>
                        <h4>
                            The pdf of the textbooks are attached in the google drive below.
                        </h4>
                    </div>
                </div>
                <div>
                    <div id="PhysicsLinks">
                        <p><b>State board 11<sup>th</sup>Textbook : <a href="https://drive.google.com/drive/u/0/folders/1zKVn4DaF8SzBQM1i1D3Z5A5qB71hlVW4">Open</a></b></p>
                        <p><b>State board 12<sup>th</sup>Textbook : <a href="https://drive.google.com/drive/u/0/folders/1oMsakdGFHtmpnHQ8fpwavYZ99kRScsuw">Open</a></b></p>
                    </div>
                    <h2>Chapterwise Practice</h2>
                    <div>
                        <div style={{backgroundColor:"rgba(0,0,0,0.3",padding:"10px",margin:"5px"}}>
                            <h4>11<sup>th</sup> Chapterwise Practice questions.</h4>
                            {!watch11 && <button className="dropdown" onClick={wth11} style={{height:"40px",padding:"10px"}}> Chapter List </button>}
                            <div>
                                {watch11 && <PhysicsPractice11 value={clswth11}/>}
                            </div>
                        </div>
                        <div style={{backgroundColor:"rgba(0,0,0,0.3",padding:"10px",margin:"5px"}}>
                            <h4>12<sup>th</sup> Chapterwise Practice questions.</h4>
                            {!watch12 && <button onClick={wth12} style={{height:"40px",padding:"10px"}}> Chapter List </button>}
                            <div>
                                {watch12 && <PhysicsPractice12 value ={clswth12}/>}
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft:"45%"}}>
                        <button id="QAP" onClick={wthqs}><Link to='/PhysicsQA'>Question-Answer Section</Link></button>
                    </div>
                </div>
            </div>):(
            <div>
                {questSection && <PQASection close={clsqs}/>}
            </div>)
            }
        </div>
    );
}

export default Physics;