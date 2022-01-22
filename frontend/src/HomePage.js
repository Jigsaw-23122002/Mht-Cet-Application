import HomePart1 from "./HomePart1";
import "./CssSection/MyCss.css";

function Home_Page(){
    
    return(
        <div id="h">
            <div id="b">
                <h1 id="MainHeading"> Academic Diary</h1>
            </div>
            <hr/>
            <div>
                <div>
                    <HomePart1/>
                </div>
            </div>
        </div>
    )
}

export default Home_Page;