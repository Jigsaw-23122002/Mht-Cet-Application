import { useState } from "react";
import MathsPractice11 from "./MathsPractice11";
import MathsPractice12 from "./MathsPractice12";
import { Link } from "react-router-dom";
import t1 from "../ChemistrySection/one.png";
import t2 from "../ChemistrySection/two.png";
import t3 from "../PhysicsSection/one.png";
import t4 from "../PhysicsSection/two.png";
import mgif from "./mgif.gif";

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
  return (
    <div id="PMain">
      <div id="header">
        <div>
          <h2>Maths</h2>
        </div>
        <div>
          <button id="QAP">
            <Link to="/MathsQA">Question-Answer Section</Link>
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
                <img src={mgif} />
              </div>
              <div id="betright">
                <div>
                  <p>
                    To strengthen Maths section, you should ensure that you have
                    memorised all important formulae and properties and have
                    left no topic as an option.MHT-CET Maths syllabus comprises
                    of 80% Std. XII syllabus and 20% of Std XI syllabus. So your
                    main focus should be on Std. XII topics like Differential
                    Calculus, Integral Calculus etc. In MHT-CET, you get 90
                    minutes to attempt 50 Maths questions, so speed and accuracy
                    has to be very high. For that, giving more and more mock
                    tests and analysing your mistakes from those tests is very
                    important. During the exam, don’t get stuck on a single
                    question for too long. First attempt those questions which
                    are direct, formula based and easy. Since there is no
                    negative marking in MHT-CET, make an educated guess for even
                    those questions which you couldn’t solve.
                  </p>
                </div>
                <hr />
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
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div id="PhysicsLinks">
          <p id="redCol">
            <b>Government State Textbooks PDF Links</b>
          </p>
          <section id="Tbss">
            <section id="intbs">
              <p id="intbsinp">
                <b>
                  State board 11<sup>th</sup>Textbook
                </b>
              </p>
              <img id="tbs" src={t1} />
              <br />
              <button>
                <a href="https://drive.google.com/drive/u/0/folders/10GFS93eUh_CCoWnk2ng3oN5WJckP7kxF">
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
              <img id="tbs" src={t2} />
              <br />
              <button>
                <a href="https://drive.google.com/drive/u/0/folders/1fNdnOkY33-wvwoWqO9oH4Bc747WkfIqm">
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
              <img id="tbs" src={t3} />
              <br />
              <button>
                <a href="https://drive.google.com/drive/u/0/folders/1kCGptgRcqfoXdz9KuJ7oxlfu9mSO3Reh">
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
              <img id="tbs" src={t4} />
              <br />
              <button>
                <a href="https://drive.google.com/drive/u/0/folders/11TR3cWGGH4RhVbLWk-v6hWXu6gAE1phZ">
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
          <div>{watch11 && <MathsPractice11 value={clswth11} />}</div>
          <div>{watch12 && <MathsPractice12 value={clswth12} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Maths;
