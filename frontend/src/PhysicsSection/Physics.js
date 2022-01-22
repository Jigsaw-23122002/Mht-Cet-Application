import PhysicsPractice11 from "./PhysicsPractice11";
import PhysicsPractice12 from "./PhysicsPractice12";
import { useState, useContext, useEffect } from "react";
import "../CssSection/MyCss.css";
import { Link } from 'react-router-dom'
import PQASection from "./PQASection";
import UserContext from "../UserContext";
import io from 'socket.io-client'
import logo from './giphy.gif';
import tb1 from '../CssSection/tb1.png';
import tb2 from '../CssSection/tb2.png';
const socket = io.connect('http://localhost:4500')


function Physics() {
    let [watch11, setWatch11] = useState(false);
    let [watch12, setWatch12] = useState(false);
    let [questSection, setQuestSection] = useState(false);
    const { physicsData, setPhysicsData } = useContext(UserContext);

    function wth12() {
        setWatch12(true);
    }
    function wth11() {
        setWatch11(true);
    }
    function clswth11() {
        setWatch11(false);
    }
    function clswth12() {
        setWatch12(false);
    }
    function wthqs() {
        console.log('Request for physics questions emited from the frontend.')
        socket.emit('getPhysicsQuestions');
        setQuestSection(true);
    }
    function clsqs() {
        setQuestSection(false);
    }
    useEffect(() => {
        socket.on('takePhysicsQuestions', (data) => {
            console.log(data);
            setPhysicsData(data);
            console.log(physicsData);
        })
    }, [socket])

    return (
        <div id="PMain">
            <h2>Physics
                <button id="QAP" onClick={wthqs} style={{backgroundColor:"black",marginLeft:"80%",fontSize:"13px"}}><Link to='/PhysicsQA'>Question-Answer Section</Link></button>
            </h2>
            <hr />
            {!questSection ? (
                <div>
                    <div>
                        <li><b>Tips for Physics</b></li>
                        <div>
                            <p>
                                Firstly,In order to solve the physics in MHT-CET,one has must be well thorough with all the concepts of the state textbook.To solve numericals fast, your concepts needs to be crystal clear. So, whenever you start a topic, first read theory thoroughly, then have a look at some of the solved examples to understand the application of concepts, then attempt some formula-based questions and finally go for trickier numericals. One month before the exam, solve as many mock tests as possible to improve your speed and accuracy in solving numericals.
                            </p>
                            <hr />
                            <li><b>Important topics</b></li>
                            <div style={{ marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img src={"https://www.flippingphysics.com/uploads/2/1/1/0/21103672/0366-ap1-2019-frq1-gif_orig.gif"} style={{ width: "200%", height: "400px", borderRadius: "7px" }} />
                                </div>
                                <div style={{ marginLeft: "40%" }}>
                                    <table cellSpacing="0" cellPadding="10px" style={{ marginTop: "10px" }}>
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
                            <hr />
                        </div>
                    </div>
                    <div>
                        <div id="PhysicsLinks">
                            <li style={{ marginTop: "10px" }}><b>Government State Textbooks PDF Links</b></li>
                            <section style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                                <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                                    <p><b>State board 11<sup>th</sup>Textbook</b></p>
                                    <img src={tb1} width={"200px"} />
                                    <br></br><br />
                                    <b><a href="https://drive.google.com/drive/u/0/folders/1zKVn4DaF8SzBQM1i1D3Z5A5qB71hlVW4">Open</a></b>
                                </section>
                                <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                                    <p><b>State board 12<sup>th</sup>Textbook</b></p>
                                    <img src={tb2} width={"200px"} />
                                    <br></br><br />
                                    <b><a href="https://drive.google.com/drive/u/0/folders/1oMsakdGFHtmpnHQ8fpwavYZ99kRScsuw">Open</a></b>
                                </section>
                            </section>
                        </div>
                        <hr />
                        <h3><li>Chapterwise Practice Questions</li></h3>
                        <div>
                            <div>
                                <h4 style={{backgroundColor:"white",borderRadius:"5px",padding:"7px"}}>Chapterwise Practice questions of Standard 11
                                    {!watch11 && <button className="dropdown" onClick={wth11} style={{ color: "black", height: "55px", width: "55px", borderRadius: "50%", margin: "10px", color: "white", backgroundColor: "black" }}> &#x21e9;</button>}
                                </h4>
                                <div style={{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"7px",borderRadius:"5px"}}>
                                    {watch11 && <PhysicsPractice11 value={clswth11} />}
                                </div>
                            </div>
                            <div>
                                <h4 style={{backgroundColor:"white",borderRadius:"5px",padding:"7px"}}>Chapterwise Practice questions of Standard 12
                                    {!watch12 && <button onClick={wth12} style={{ color: "black", height: "55px", width: "55px", borderRadius: "50%", margin: "10px", color: "white", backgroundColor: "black" }} >&#x21e9;</button>}</h4>
                                <div style={{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"7px",borderRadius:"5px"}}>
                                    {watch12 && <PhysicsPractice12 value={clswth12} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (
                <div>
                    {questSection && <PQASection close={clsqs} />}
                </div>)
            }
        </div>
    );
}

export default Physics;