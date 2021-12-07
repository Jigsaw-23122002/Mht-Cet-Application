import "../CssSection/LinksCss.css";

function MathsPractice11(props){
    return (
        <div id="MathsLinks">
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1tXF5_Ei2Ah4ev-NVxcy1M1Gszs5iPv_I"><b>1.</b>Straight Lines</a>
            </div>
            <br/>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1oLF-ssfxpjITUQMc1yyuBbTcFcv07Oip"><b>2.</b>Circle and Conics</a>
            </div>
            <br/>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1BEveQyd0C-H35_30jNFQsrwp1Jnl9jK4"><b>3.</b>Functions</a>
            </div>
            <br/>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/14bPBQnLk0pC_gu1_uuSPIolmThHzMsmq"><b>4.</b>Limits and Continuity</a>
            </div>
            <br/>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1NFyglUId9zQE663JbjIKo1__iqWuwWZp"><b>5.</b>Trigonometry</a>
            </div>
            <br/>
            <br/>
            <div>
            <a href="https://drive.google.com/drive/u/0/folders/1RDu0qMg_UZVvPDCUnuFDZ1XTYh7UrwEj"><b>6.</b>Probablity</a>
            </div>
            <br/>
            <br/>
            <button onClick={()=>{props.value()}}>Close this section</button>
        </div>
    );
}

export default MathsPractice11;