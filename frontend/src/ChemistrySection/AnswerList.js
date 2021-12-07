import '../CssSection/PQACSS.css'

function AnswerList(props){
    console.log(props.answers);
    if(props.answers.length===0){
        return (
            <div className="PreviousAnswers">
                This question is not yet answered by anyone.
            </div>
        );
    }
    else{
        return (
            <div>
            <hr/>
            <div className="PreviousAnswers">
                <div>
                    {props.answers.map((item)=>{
                        return (
                            <div className="OneAnswer">
                                <p>Answer by {item.Answerer}</p>
                                <p style={{color:"green"}}>Answer :</p>
                                <p>{item.Answer}</p>   
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