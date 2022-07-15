import "./PhysicsPageCss.css";
import PhysicsPractice11 from "./PhysicsPractice11";
import PhysicsPractice12 from "./PhysicsPractice12";
import { useState } from "react";
import { Link } from "react-router-dom";
import pgif from "./pgif.gif";
import one from "./one.png";
import two from "./two.png";

function Physics() {
  let [watch11, setWatch11] = useState(false);
  let [watch12, setWatch12] = useState(false);

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
  return (
    <div id="PMain">
      <div id="header">
        <div>
          <h2>Physics</h2>
        </div>
        <div>
          <button id="QAP">
            <Link to="/PhysicsQA">Question-Answer Section</Link>
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
                <img src={pgif} />
              </div>
              <div id="betright">
                <div>
                  <p>
                    Firstly,In order to solve the physics in MHT-CET,one has
                    must be well thorough with all the concepts of the state
                    textbook.To solve numericals fast, your concepts needs to be
                    crystal clear. So, whenever you start a topic, first read
                    theory thoroughly, then have a look at some of the solved
                    examples to understand the application of concepts, then
                    attempt some formula-based questions and finally go for
                    trickier numericals. One month before the exam, solve as
                    many mock tests as possible to improve your speed and
                    accuracy in solving numericals.
                  </p>
                </div>
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
            </div>
            <hr />
          </div>
        </div>
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
                <img id="tb" src={one} />
                <br />
                <button>
                  <a href="https://drive.google.com/drive/u/0/folders/1zKVn4DaF8SzBQM1i1D3Z5A5qB71hlVW4">
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
                <img id="tb" src={two} />
                <br />
                <button>
                  <a href="https://drive.google.com/drive/u/0/folders/1oMsakdGFHtmpnHQ8fpwavYZ99kRScsuw">
                    Open
                  </a>
                </button>
              </section>
            </section>
          </div>
          <hr />
          <p id="redCol">
            <b>Chapterwise Practice Questions</b>
          </p>
          <div>
            <div className="containerss">
              <div className="card__containerss">
                <div className="cardss">
                  <div className="card__contentss">
                    <h3 className="card__headerss">Standard 11Th</h3>
                    <p className="card__infoss">
                      Chapterwise Practice questions of Standard 11
                    </p>
                    {!watch11 && (
                      <button className="card__buttonss" onClick={wth11}>
                        Open List
                      </button>
                    )}
                  </div>
                </div>
                <div className="cardss">
                  <div className="card__contentss">
                    <h3 className="card__headerss">Standard 12Th</h3>
                    <p className="card__infoss">
                      Chapterwise Practice questions of Standard 12
                    </p>
                    {!watch12 && (
                      <button className="card__buttonss" onClick={wth12}>
                        Open List
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
              <div>{watch11 && <PhysicsPractice11 value={clswth11} />}</div>
              <div>{watch12 && <PhysicsPractice12 value={clswth12} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Physics;
