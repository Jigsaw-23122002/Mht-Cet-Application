import ChemistryPractice11 from "./ChemistryPractice11"
import ChemistryPractice12 from "./ChemistryPractice12";
import "../CssSection/MyCss.css";
import {useState,useEffect,useContext} from "react";
import {Link} from 'react-router-dom';
import io from 'socket.io-client';
import UserContext from './UserContext';

const socket=io.connect('http://localhost:4500');

function Chemistry(props){

    const {chemistryData,setChemistryData}=useContext(UserContext);

    let[watch11,setWatch11]=useState(false);
    let[watch12,setWatch12]=useState(false);

    function wth11(){
        setWatch11(true);
    }
    function wth12(){
        setWatch12(true);
    }
    function clswth11(){
        setWatch11(false);
    }
    function clswth12(){
        setWatch12(false);
    }
    function wthqs(){
        console.log('Request for chemistry questions emited from the frontend.')
        socket.emit('getChemistryQuestions');
    }

    useEffect(()=>{
        socket.on('takeChemistryQuestions',(data)=>{
            setChemistryData(data);
        })
    },[socket])

    return (
        <div id="CMain">
            <h2>Chemistry</h2>
            <hr/>
            <div>
                <h3>Tips for Chemistry</h3>
                <div>
                    <p>In Chemistry, you must understand that the different parts of chemistry have a slightly different approach which is to be followed. Don’t ever try to remember any reaction; that is not a good practice. Try to understand complete mechanism behind each and every reaction. It is very important to completely understand mechanism of reactions. Make a regular habit of practising the chemical reactions and its mechanism. Learning, practising and writing is the best way of studying Chemistry.   
                    </p>
                </div>
                <div>
                    <h4>Important topics of standard 11-</h4>
                    <ul><p>
                    States of Matter: Gases and Liquids, Surface Chemistry, Redox Reactions, Nature of Chemical Bond, Hydrogen, Alkali and Alkaline Earth Metals, Alkanes
                    </p></ul>
                    <h4>Important topics of standard 12-</h4>
                    <ul><p>
                    P-Block elements, Biomolecules and Polymers, D and F block elements, Chemical Thermodynamics, Chemical Kinetics, some basic concepts of Chemistry Mole concept, Electrochemistry
                    </p></ul>
                </div>
            </div>
            <div>
                <div>
                    <p><b>State board 11<sup>th</sup>Textbook : <a href="https://drive.google.com/drive/u/0/folders/1ezEagHTXt_m6KCrq_51_UkBYQ29aUMJV">Open</a></b></p>
                    <p><b>State board 12<sup>th</sup>Textbook : <a href="https://drive.google.com/drive/u/0/folders/19oJrAPVcKiaWIo4iFQksItahteO0ziLM">Open</a></b></p>
                </div>
                <h3>Chapterwise Practice</h3>
                <div>
                    <div style={{backgroundColor:"rgba(0,0,0,0.3",padding:"10px",margin:"10px"}}>
                        <h4>11<sup>th</sup> Chapterwise Practice questions.</h4>
                        {!watch11 && <button onClick={wth11} style={{height:"40px",padding:"10px"}}>Chapter List</button>}
                        <div>
                            {watch11 && <ChemistryPractice11 value={clswth11}/>}
                        </div>
                    </div>
                    <div style={{backgroundColor:"rgba(0,0,0,0.3",padding:"10px",margin:"10px"}}>
                        <h4>12<sup>th</sup> Chapterwise Practice questions.</h4>
                        {!watch12 && <button onClick={wth12} style={{height:"40px",padding:"10px"}}>Chapter List</button>}
                        <div>
                            {watch12 && <ChemistryPractice12 value={clswth12}/>}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:"45%"}}>
                <button id="QAP" onClick={wthqs}><Link to='/ChemistryQA'>Question-Answer Section</Link></button>
            </div>
        </div>
    );
}

export default Chemistry;