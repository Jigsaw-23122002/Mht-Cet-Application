import { useState } from "react";
import MathsPractice11 from "./MathsPractice11";
import MathsPractice12 from "./MathsPractice12";
import "../CssSection/MyCss.css";

function Maths(props){
    let [watch11,setWatch11]=useState(false);
    let [watch12,setWatch12]=useState(false);
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

    return (
        <div id="MMain">
            <h2>Maths</h2>
            <hr/>
            <div>
                <h3>Tips for Maths</h3>
                <div>
                    <p>To strengthen Maths section, you should ensure that you have memorised all important formulae and properties and have left no topic as an option.</p>
                    <ul>
                        <li>MHT-CET Maths syllabus comprises of 80% Std. XII syllabus and 20% of Std XI syllabus. So your main focus should be on Std. XII topics like Differential Calculus, Integral Calculus etc.</li>
                        <li>In MHT-CET, you get 90 minutes to attempt 50 Maths questions, so speed and accuracy has to be very high. For that, giving more and more mock tests and analysing your mistakes from those tests is very important.</li>
                        <li>During the exam, don’t get stuck on a single question for too long. First attempt those questions which are direct, formula based and easy.</li>
                        <li>Since there is no negative marking in MHT-CET, make an educated guess for even those questions which you couldn’t solve.</li>
                    </ul>
                </div>
                <div>
                    <h4>Important topics of standard 11-</h4>
                    <p>Trignometric Identities, Straight Lines, Circle and conics, Sets, Relations and Functions, Sequences and Series, Probability</p>
                    <h4>Important topics of standard 12-</h4>
                    <p>Three-Dimensional Geometrical system, Probability, Point and straight line, Vector, Mathematical reasoning, Indefinite Integration, Differential Equation, Application of Derivatives</p>
                </div>
            </div>
            <div>
                <div id="MathsLinks">
                    <p><b>State board 11<sup>th</sup>Textbook Part 1 : <a href="https://drive.google.com/drive/u/0/folders/10GFS93eUh_CCoWnk2ng3oN5WJckP7kxF">Open</a></b></p>
                    <p><b>State board 11<sup>th</sup>Textbook Part 2 : <a href="https://drive.google.com/drive/u/0/folders/1fNdnOkY33-wvwoWqO9oH4Bc747WkfIqm">Open</a></b></p>
                    <p><b>State board 12<sup>th</sup>Textbook Part 1: <a href="https://drive.google.com/drive/u/0/folders/1kCGptgRcqfoXdz9KuJ7oxlfu9mSO3Reh">Open</a></b></p>
                    <p><b>State board 12<sup>th</sup>Textbook Part 2: <a href="https://drive.google.com/drive/u/0/folders/11TR3cWGGH4RhVbLWk-v6hWXu6gAE1phZ">Open</a></b></p>
                </div>
                <h3>Chapterwise Practice</h3>
                <div>
                    <h4>11<sup>th</sup> Chapterwise Practice questions.</h4>
                    {!watch11 && <button onClick={wth11} style={{height:"40px",padding:"10px"}}>Chapter List</button>}
                    <div>
                        {watch11 && <MathsPractice11 value={clswth11}/>}
                    </div>
                    <h4>12<sup>th</sup> Chapterwise Practice questions.</h4>
                    {!watch12 && <button onClick={wth12} style={{height:"40px",padding:"10px"}}>Chapter List</button>}
                    <div>
                        {watch12 && <MathsPractice12 value={clswth12}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maths;