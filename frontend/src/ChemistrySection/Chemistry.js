import ChemistryPractice11 from "./ChemistryPractice11";
import ChemistryPractice12 from "./ChemistryPractice12";
import { useState, useEffect, useContext } from "react";
import "../CssSection/MyCss.css";
import { Link } from 'react-router-dom';
import CQASection from "./CQASection";
import UserContext from '../UserContext';
import io from 'socket.io-client';
import ctb1 from '../CssSection/ctb1.png';
import ctb2 from '../CssSection/ctb2.png';
const socket = io.connect('http://localhost:4500');


function Chemistry() {
    let [watch11, setWatch11] = useState(false);
    let [watch12, setWatch12] = useState(false);
    let [questSection, setQuestSection] = useState(false);
    let { chemistryData, setChemistryData } = useContext(UserContext);

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
        console.log('Request for chemistry questions emited from the frontend.')
        socket.emit('getChemistryQuestions');
        setQuestSection(true);
    }
    function clsqs() {
        setQuestSection(false);
    }

    useEffect(() => {
        socket.on('takeChemistryQuestions', (data) => {
            console.log(data);
            setChemistryData(data);
            console.log(chemistryData);
        })
    }, [socket])

    return (
        <div id="CMain">
            <h2>Chemistry
                <button id="QAP" onClick={wthqs} style={{marginLeft:"78%"}}><Link to='/ChemistryQA'>Question-Answer Section</Link></button>
            </h2>
            <hr />
            {!questSection ? (
                <div>
                    <div>
                        <h4><li>Tips for Chemistry</li></h4>
                        <div>
                            <p>In Chemistry, you must understand that the different parts of chemistry have a slightly different approach which is to be followed. Don’t ever try to remember any reaction; that is not a good practice. Try to understand complete mechanism behind each and every reaction. It is very important to completely understand mechanism of reactions. Make a regular habit of practising the chemical reactions and its mechanism. Learning, practising and writing is the best way of studying Chemistry.
                            </p>
                        </div>
                        <hr />
                        <div>
                            <h4><li>Important topics</li> </h4>
                            <div style={{ marginTop: "20px", marginBottom: "20px", display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img src={"https://thumbs.gfycat.com/ConventionalObeseHuman.webp"} style={{ width: "200%", height: "400px", borderRadius: "7px" }} />
                                </div>
                                <div style={{ marginLeft: "40%" }}>
                                    <table cellSpacing="0" cellPadding="10px" style={{ marginTop: "10px" }}>
                                        <tr>
                                            <td><b>Standard 11</b></td>
                                            <td><b>Standard 12</b></td>
                                        </tr>
                                        <tr>
                                            <td>States of Matter: Gases and Liquids</td>
                                            <td>P-Block elements</td>
                                        </tr>
                                        <tr>
                                            <td>Surface Chemistry</td>
                                            <td>Biomolecules and Polymers</td>
                                        </tr>
                                        <tr>
                                            <td>Redox Reactions</td>
                                            <td>D and F block elements</td>
                                        </tr>
                                        <tr>
                                            <td>Nature of Chemical Bond</td>
                                            <td>Chemical Thermodynamics</td>
                                        </tr>
                                        <tr>
                                            <td>Hydrogen</td>
                                            <td>Chemical Kinetics</td>
                                        </tr>
                                        <tr>
                                            <td>Alkali and Alkaline Earth Metals</td>
                                            <td colSpan={2}>some basic concepts of Chemistry Mole concept</td>
                                        </tr>
                                        <tr>
                                            <td>Alkanes</td>
                                            <td colSpan={2}>Electrochemistry</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <li style={{ marginTop: "10px" }}><b>Government State Textbooks PDF Links</b></li>
                        <section style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                            <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                                <p><b>State board 11<sup>th</sup>Textbook</b></p>
                                <img src={ctb1} width={"200px"} />
                                <br></br><br />
                                <b><a href="https://drive.google.com/drive/u/0/folders/1ezEagHTXt_m6KCrq_51_UkBYQ29aUMJV">Open</a></b>
                            </section>
                            <section style={{ padding: "25px", backgroundColor: "white", borderRadius: "6px", paddingTop: "0px", margin: "20px" }}>
                                <p><b>State board 12<sup>th</sup>Textbook</b></p>
                                <img src={ctb2} width={"200px"} />
                                <br></br><br />
                                <b><a href="https://drive.google.com/drive/u/0/folders/19oJrAPVcKiaWIo4iFQksItahteO0ziLM" style={{decoration:"none"}}>Open</a></b>
                            </section>
                        </section>
                    </div>
                    <hr/>
                    <div>
                        <h3><li>Chapterwise Practice Questions</li></h3>
                        <div>
                            <div>
                                <h4 style={{backgroundColor:"white",borderRadius:"5px",padding:"7px"}}>Chapterwise Practice questions of standard 11
                                {!watch11 && <button onClick={wth11} style={{color:"black",height:"55px",width:"55px",borderRadius:"50%",margin:"10px",color:"white",backgroundColor:"black"}}>&#x21e9;</button>}</h4>
                                <div style={{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"7px",borderRadius:"5px"}}>
                                    {watch11 && <ChemistryPractice11 value={clswth11} />}
                                </div>
                            </div>
                            <div>
                                <h4 style={{backgroundColor:"white",borderRadius:"5px",padding:"7px"}}>Chapterwise Practice questions of standard 12
                                {!watch12 && <button onClick={wth12} style={{color:"black",height:"55px",width:"55px",borderRadius:"50%",margin:"10px",color:"white",backgroundColor:"black"}}>&#x21e9;</button>}</h4>
                                <div style={{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"7px",borderRadius:"5px"}}>
                                    {watch12 && <ChemistryPractice12 value={clswth12} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (
                <div>
                    {questSection && <CQASection close={clsqs} />}
                </div>)
            }
        </div>
    );
}

export default Chemistry;