import ChemistryPractice11 from "./ChemistryPractice11";
import ChemistryPractice12 from "./ChemistryPractice12";
import { useState } from "react";
import { Link } from "react-router-dom";
import cgif from "./cgif.gif";
import one from "./one.png";
import two from "./two.png";

function Chemistry() {
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

  return (
    <div id="PMain">
      <div id="header">
        <div>
          <h2>Chemistry</h2>
        </div>
        <div>
          <button id="QAP">
            <Link to="/ChemistryQA">Question-Answer Section</Link>
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <div>
            <p id="redCol">
              <b>Important topics</b>
            </p>
            <div id="betweener">
              <div>
                <img src={cgif} />
              </div>
              <div id="betright">
                <div>
                  <p>
                    In Chemistry, you must understand that the different parts
                    of chemistry have a slightly different approach which is to
                    be followed. Don’t ever try to remember any reaction; that
                    is not a good practice. Try to understand complete mechanism
                    behind each and every reaction. It is very important to
                    completely understand mechanism of reactions. Make a regular
                    habit of practising the chemical reactions and its
                    mechanism. Learning, practising and writing is the best way
                    of studying Chemistry.
                  </p>
                </div>
                <div>
                  <div>
                    <table id="Tab" cellSpacing="0" cellPadding="10px">
                      <tr>
                        <td>
                          <b>Standard 11</b>
                        </td>
                        <td>
                          <b>Standard 12</b>
                        </td>
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
                        <td colSpan={2}>
                          some basic concepts of Chemistry Mole concept
                        </td>
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
          </div>
        </div>
        <hr />
        <div>
        <div id="PhysicsLinks">
          <p id="redCol">
            <b>Government State Textbooks PDF Links</b>
            </p>
          <section id="Tbs">
            <section id="intbs">
              <p id="intbsinp">
                <b>
                  State board 11<sup>th</sup>Textbook
                </b>
              </p>
              <img id="tb" src={one}/>
              <br />
              <button>
                <a href="https://drive.google.com/drive/u/0/folders/1ezEagHTXt_m6KCrq_51_UkBYQ29aUMJV">
                  Open
                </a>
              </button>
            </section>
            <section id="intbs">
              <p id="intbsinp">
                <b>
                  State board 12<sup>th</sup>Textbook
                </b>
              </p>
              <img src={two} id="tb" />
              <br />
              <button>
                <a
                  href="https://drive.google.com/drive/u/0/folders/19oJrAPVcKiaWIo4iFQksItahteO0ziLM"
                  style={{ decoration: "none" }}
                >
                  Open
                </a>
              </button>
            </section>
          </section>
        </div>
        </div>
        <hr />
        <div>
        <p id="redCol">
            <b>Chapterwise Practice Questions</b>
          </p>
          <div>
            <div>
              <h4>
                Chapterwise Practice questions of standard 11
                {!watch11 && <button id="openList" onClick={wth11}>Open List</button>}
              </h4>
              <div>{watch11 && <ChemistryPractice11 value={clswth11} />}</div>
            </div>
            <div>
              <h4>
                Chapterwise Practice questions of standard 12
                {!watch12 && <button id="openList"onClick={wth12}>Open List</button>}
              </h4>
              <div>{watch12 && <ChemistryPractice12 value={clswth12} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chemistry;
