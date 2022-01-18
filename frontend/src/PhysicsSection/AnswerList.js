import '../CssSection/PQACSS.css'

function AnswerList(props){
    console.log(props.answers);
    if(props.answers.length===0){
        return (
            <div className="PreviousAnswers" style={{fontFamily:"sans-serif",backgroundColor:"rgba(0, 0, 0, 0.5)",padding:"10px"}}>
                This question is not yet answered by anyone.
            </div>
        );
    }
    else{
        return (
            <div>
            <hr/>
            <div className="PreviousAnswers" style={{fontFamily:"sans-serif"}}>
                <div>
                    {props.answers.map((item)=>{
                        return (
                            <div className="OneAnswer">
                                <p style={{fontWeight:"bold"}}>Answer by {item.Answerer}</p>
                                <p style={{fontWeight:"bold"}}>Answer :</p>
                                <p style={{color:"black",fontWeight:"bold"}}>{item.Answer}</p>   
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>
        );
    }
}

export default AnswerList;