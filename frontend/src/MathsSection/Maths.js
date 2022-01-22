import { useState } from "react";
import MathsPractice11 from "./MathsPractice11";
import MathsPractice12 from "./MathsPractice12";
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import "../CssSection/MyCss.css";
import mtb11 from '../CssSection/mtb11.png';
import mtb12 from '../CssSection/mtb12.png';
import mtb21 from '../CssSection/mtb21.png';
import mtb22 from '../CssSection/mtb22.png';
const socket = io.connect('http://localhost:4500');

function Maths(props) {
    let [watch11, setWatch11] = useState(false);
    let [watch12, setWatch12] = useState(false);
    function wth11() {
        setWatch11(true);
    }
    function wth12() {
        setWatch12(true);
    }
    function clswth11() {
        setWatch11(false);
    }
    function clswth12() {
        setWatch12(false);
    }
    function wthqs() {
        console.log('Request for Maths questions emited from the frontend.')
        socket.emit('getMathsQuestions');
    }
    return (
        <div id="MMain">
            <h2>Maths
                <button id="QAP" onClick={wthqs} style={{backgroundColor:"black",marginLeft:"81%",fontSize:"13px"}}><Link to='/MathsQA'>Question-Answer Section</Link></button>
            </h2>
            <hr />
            <div>
                <h3><li>Tips for Maths</li></h3>
                <div>
                    <p>To strengthen Maths section, you should ensure that you have memorised all important formulae and properties and have left no topic as an option.</p>
                    <ul>
                        <li>MHT-CET Maths syllabus comprises of 80% Std. XII syllabus and 20% of Std XI syllabus. So your main focus should be on Std. XII topics like Differential Calculus, Integral Calculus etc.</li>
                        <li>In MHT-CET, you get 90 minutes to attempt 50 Maths questions, so speed and accuracy has to be very high. For that, giving more and more mock tests and analysing your mistakes from those tests is very important.</li>
                        <li>During the exam, don’t get stuck on a single question for too long. First attempt those questions which are direct, formula based and easy.</li>
                        <li>Since there is no negative marking in MHT-CET, make an educated guess for even those questions which you couldn’t solve.</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h4><li>Important topics</li></h4>
                    <div style={{ marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "row" }}>
                        <div>
                            <img src={"https://media2.giphy.com/media/fX1WbBccfGlffLwCjZ/giphy.gif?cid=ecf05e47llbglxlpdpkjma3oln77wi6km0oj2uezxqo5qoen&rid=giphy.gif&ct=g"} style={{ width: "200%", height: "400px", borderRadius: "7px" }} />
                        </div>
                        <div style={{ marginLeft: "40%" }}>
                            <table cellSpacing="0" cellPadding="10px" style={{ marginTop: "10px" }}>
                                <tr>
                                    <td><b>Standard 11</b></td>
                                    <td><b>Standard 12</b></td>
                                </tr>
                                <tr>
                                    <td>Trignometric Identities</td>
                                    <td>Three-Dimensional Geometrical system</td>
                                </tr>
                                <tr>
                                    <td>Straight Lines</td>
                                    <td>Probability</td>
                                </tr>
                                <tr>
                                    <td>Circle and conics</td>
                                    <td>Point and straight line</td>
                                </tr>
                                <tr>
                                    <td>Sets</td>
                                    <td>Vector</td>
                                </tr>
                                <tr>
                                    <td>Relations and Functions</td>
                                    <td>Mathematical reasoning</td>
                                </tr>
                                <tr>
                                    <td>Sequences and Series</td>
                                    <td>Indefinite Integration</td>
                                </tr>
                                <tr>
                                    <td>Probability</td>
                                    <td>Differential Equation</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <div id="MathsLinks">
                    <li style={{ marginTop: "10px" }}><b>Government State Textbooks PDF Links</b></li>
                    <section style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                            <p><b>State board 11<sup>th</sup>Textbook</b></p>
                            <img src={mtb11} width={"200px"} />
                            <br></br><br />
                            <b><a href="https://drive.google.com/drive/u/0/folders/10GFS93eUh_CCoWnk2ng3oN5WJckP7kxF">Open</a></b>
                        </section>
                        <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                            <p><b>State board 12<sup>th</sup>Textbook</b></p>
                            <img src={mtb12} width={"200px"} />
                            <br></br><br />
                            <b><a href="https://drive.google.com/drive/u/0/folders/1fNdnOkY33-wvwoWqO9oH4Bc747WkfIqm">Open</a></b>
                        </section>
                        <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                            <p><b>State board 12<sup>th</sup>Textbook</b></p>
                            <img src={mtb21} width={"200px"} />
                            <br></br><br />
                            <b><a href="https://drive.google.com/drive/u/0/folders/1kCGptgRcqfoXdz9KuJ7oxlfu9mSO3Reh">Open</a></b>
                        </section>
                        <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                            <p><b>State board 12<sup>th</sup>Textbook</b></p>
                            <img src={mtb22} width={"200px"} />
                            <br></br><br />
                            <b><a href="https://drive.google.com/drive/u/0/folders/11TR3cWGGH4RhVbLWk-v6hWXu6gAE1phZ">Open</a></b>
                        </section>
                    </section>
                </div>
                <hr />
                <h3><li>Chapterwise Practice Questions</li></h3>
                <div>
                    <h4 style={{backgroundColor:"white",borderRadius:"5px",padding:"7px"}}>Chapterwise Practice questions of standard 11
                        {!watch11 && <button onClick={wth11} style={{ color: "black", height: "55px", width: "55px", borderRadius: "50%", margin: "10px", color: "white", backgroundColor: "black" }}>&#x21e9;</button>}</h4>
                    <div style={{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"7px",borderRadius:"5px"}}>
                        {watch11 && <MathsPractice11 value={clswth11} />}
                    </div>
                    <h4 style={{backgroundColor:"white",borderRadius:"5px",padding:"7px"}}> Chapterwise Practice questions of standard 12
                        {!watch12 && <button onClick={wth12} style={{ color: "black", height: "55px", width: "55px", borderRadius: "50%", margin: "10px", color: "white", backgroundColor: "black" }}>&#x21e9;</button>}</h4>
                    <div style={{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"7px",borderRadius:"5px"}}>
                        {watch12 && <MathsPractice12 value={clswth12} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maths;