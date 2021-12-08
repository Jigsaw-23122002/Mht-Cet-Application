import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Physics from "./PhysicsSection/Physics";
import Chemistry from "./ChemistrySection/Chemistry";
import Maths from "./MathsSection/Maths";
import {useState,useContext} from 'react';
import HomePart2 from './HomePart2';
import UserContext from './UserContext';
import PQASection from './PhysicsSection/PQASection';
import CQASection from './ChemistrySection/CQASection';

function HomePart1(){

    const [physicsData,setPhysicsData]=useState([]);
    const [chemistryData,setChemistryData]=useState([]);
    return (
        <div>
            <div id="a">
                <Router>
                    <div id="a1">
                        <div>
                            <Link to="/" style={{textDecoration:"none",color:'black',fontWeight:"bold"}}> Home</Link>
                        </div>
                        <div>
                            <Link to="/Physics" style={{textDecoration:"none",color:'black',fontWeight:"bold"}}> Physics </Link>
                        </div>
                        <div>
                            <Link to="/Chemistry" style={{textDecoration:"none",color:'black',fontWeight:"bold"}}> Chemistry </Link>
                        </div>
                        <div>
                            <Link to="/Maths" style={{textDecoration:"none",color:'black',fontWeight:"bold"}}> Maths</Link>
                        </div>
                    </div>
                    <div id="a2">
                        <UserContext.Provider value={{physicsData,setPhysicsData,chemistryData,setChemistryData}}>
                            <Switch>
                                <Route exact path="/Physics">
                                    <Physics/>
                                </Route>
                                <Route exact path="/Chemistry">
                                    <Chemistry/>
                                </Route>
                                <Route exact path="/Maths">
                                    <Maths/>
                                </Route>
                                <Route exact path="/">
                                    <HomePart2/>
                                </Route>
                                <Route exact path="/PhysicsQA">
                                    <PQASection/>
                                </Route>
                                <Route exact path="/ChemistryQA">
                                    <CQASection/>
                                </Route>
                            </Switch>
                        </UserContext.Provider>      
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default HomePart1;