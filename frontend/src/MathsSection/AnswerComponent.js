import { useState } from "react";
import AnswerForm from "./AnswerForm";
import AnswerList from "./AnswerList";

function AnswerComponent(props) {
  const [addAnswer, setAddAnswer] = useState(false);
  const [seeAnswer, setSeeAnswer] = useState(false);

  function ADDANSWER() {
    setAddAnswer(true);
    setSeeAnswer(false);
  }
  function SEEANSWER() {
    setSeeAnswer(true);
    setAddAnswer(false);
  }

  return (
    <div>
      <div>
        <h3 className="header">
          <div className="Insideheader">{props.elem.Chapter}</div>
          <button className="BOTbutton1" onClick={SEEANSWER}>
            Previous Answers
          </button>
          <button className="BOTbutton2" onClick={ADDANSWER}>
            Add Answer
          </button>
        </h3>
        <hr />
        <h3>Question :</h3>
        <div>
          <p>{props.elem.Question}</p>
        </div>
        {addAnswer && <AnswerForm id={props.elem._id} />}
        {seeAnswer && <AnswerList answers={props.elem.Answers} />}
      </div>
    </div>
  );
}

export default AnswerComponent;
