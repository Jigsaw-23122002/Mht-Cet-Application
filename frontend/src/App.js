import "./App.css";
import "./styles/navbar.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Physics from "./PhysicsSection/Physics";
import Chemistry from "./ChemistrySection/Chemistry";
import Maths from "./MathsSection/Maths";
import { useState } from "react";
import HomePage from "./HomePage/HomePage";
import UserContext from "./UserContext";
import PQASection from "./PhysicsSection/PQASection";
import CQASection from "./ChemistrySection/CQASection";
import MQASection from "./MathsSection/MQASection";

function App() {
  const [physicsData, setPhysicsData] = useState([]);
  const [chemistryData, setChemistryData] = useState([]);
  const [mathsData, setMathsData] = useState([]);

  return (
    <div>
      <div id="h">
        <div>
          <div>
            <div>
              <Router>
                <div className="body">
                  <header>
                    <div>Academic Diary</div>

                    <nav>
                      <ul class="nav__links">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/Physics">Physics</Link>
                        </li>
                        <li>
                          <Link to="/Chemistry">Chemistry</Link>
                        </li>
                        <li>
                          <Link to="/Maths">Maths</Link>
                        </li>
                      </ul>
                    </nav>
                    <a href="" class="cta">
                      <button>Contact</button>
                    </a>
                  </header>
                </div>
                <UserContext.Provider
                  value={{
                    physicsData,
                    setPhysicsData,
                    chemistryData,
                    setChemistryData,
                    mathsData,
                    setMathsData,
                  }}
                >
                  <Switch>
                    <Route exact path="/Physics">
                      <Physics />
                    </Route>
                    <Route exact path="/Chemistry">
                      <Chemistry />
                    </Route>
                    <Route exact path="/Maths">
                      <Maths />
                    </Route>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route exact path="/PhysicsQA">
                      <PQASection />
                    </Route>
                    <Route exact path="/ChemistryQA">
                      <CQASection />
                    </Route>
                    <Route exact path="/MathsQA">
                      <MQASection />
                    </Route>
                  </Switch>
                </UserContext.Provider>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
