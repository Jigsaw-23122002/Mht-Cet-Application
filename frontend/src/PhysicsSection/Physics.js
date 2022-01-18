import PhysicsPractice11 from "./PhysicsPractice11";
import PhysicsPractice12 from "./PhysicsPractice12";
import {useState,useContext, useEffect} from "react";
import "../CssSection/MyCss.css";
import {Link} from 'react-router-dom'
import PQASection from "./PQASection";
import UserContext from "../UserContext";
import io from 'socket.io-client'
import logo from './giphy.gif';
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
                    <li><b>Tips for Physics</b></li>
                    <div>
                        <p>
                            Firstly,In order to solve the physics in MHT-CET,one has must be well thorough with all the concepts of the state textbook.To solve numericals fast, your concepts needs to be crystal clear. So, whenever you start a topic, first read theory thoroughly, then have a look at some of the solved examples to understand the application of concepts, then attempt some formula-based questions and finally go for trickier numericals. One month before the exam, solve as many mock tests as possible to improve your speed and accuracy in solving numericals.
                        </p>
                        <hr/>
                        <li><b>Important topics</b></li>
                        <div style={{marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"row"}}>
                            <div>
                                <img src={logo} style={{width:"240%",height:"400px",borderRadius:"7px"}}/>
                            </div>
                            <div style={{marginLeft:"40%"}}>
                                <table cellSpacing="0" cellPadding="10px" style={{marginTop:"10px"}}>
                                    <tr>
                                        <td><b>Standard 11</b></td>
                                        <td><b>Standard 12</b></td>
                                    </tr>
                                    <tr>
                                        <td>Force</td>
                                        <td>Optics</td>
                                    </tr>
                                    <tr>
                                        <td>Friction in Solids and Liquids</td>
                                        <td>Waves and Sound</td>
                                    </tr>
                                    <tr>
                                        <td>Scalars and Vectors</td>
                                        <td>Properties of Matter and Fluid Mechanics</td>
                                    </tr>
                                    <tr>
                                        <td>Ray Optics</td>
                                        <td>Rotational Motion</td>
                                    </tr>
                                    <tr>
                                        <td>Refraction of Light</td>
                                        <td>Electrostatics</td>
                                    </tr>
                                    <tr>
                                        <td>Magnetic Effect Of Electric Current</td>
                                        <td colSpan={2}>Current Electricity</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Magnetism</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                <div>
                    <div id="PhysicsLinks">
                        <li style={{marginTop:"10px"}}><b>Government State Textbooks PDF Links</b></li>
                        <table cellSpacing="0" cellPadding="4px" style={{marginTop:"10px"}}>
                            <tr>
                                <td style={{padding:"10px"}}>
                                    State board 11<sup>th</sup>Textbook :
                                </td> 
                                <td style={{padding:"10px"}}>
                                    <b><a href="https://drive.google.com/drive/u/0/folders/1zKVn4DaF8SzBQM1i1D3Z5A5qB71hlVW4">Open</a></b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{padding:"10px"}}>
                                    State board 12<sup>th</sup>Textbook : 
                                </td>
                                <td style={{padding:"10px"}}>
                                    <b><a href="https://drive.google.com/drive/u/0/folders/1oMsakdGFHtmpnHQ8fpwavYZ99kRScsuw">Open</a></b>
                                </td>
                            </tr>                       
                        </table>
                    </div>
                    <h2>Chapterwise Practice</h2>
                    <div>
                        <div>
                            <h4>11<sup>th</sup> Chapterwise Practice questions.</h4>
                            {!watch11 && <button className="dropdown" onClick={wth11} style={{height:"40px",padding:"10px"}}> Chapter List </button>}
                            <div>
                                {watch11 && <PhysicsPractice11 value={clswth11}/>}
                            </div>
                        </div>
                        <div>
                            <h4>12<sup>th</sup> Chapterwise Practice questions.</h4>
                            {!watch12 && <button onClick={wth12} style={{height:"40px",padding:"10px"}}> Chapter List </button>}
                            <div>
                                {watch12 && <PhysicsPractice12 value ={clswth12}/>}
                            </div>
                        </div>
                    </div>
                    <div >
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