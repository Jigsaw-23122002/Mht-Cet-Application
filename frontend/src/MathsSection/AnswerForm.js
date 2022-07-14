import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:4500");

function AnswerForm(props) {
  const [answerer, setAnswerer] = useState("");
  const [answer, setAnswer] = useState("");

  function addedAnswer(e) {
    e.preventDefault();
    let object = {
      QuestionID: props.id,
      Answerer: answerer,
      Answer: answer,
    };
    socket.emit("addTheAnswerMath", object);
  }

  useEffect(() => {
    console.log("........");
    socket.on("AddingAnswerConfirmation", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="AddAnswerForm">
      <form>
        <label>Name of Answerer</label>
        <br />
        <br />
        <input
          type="text"
          required
          placeholder="Name of Answerer"
          value={answerer}
          onChange={(e) => {
            setAnswerer(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Add Valid Answer</label>
        <br />
        <br />
        <textarea
          required
          placeholder="Answer"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        ></textarea>
        <br />
        <br />
        <button
          onClick={addedAnswer}
          style={{ backgroundColor: "black", color: "white", padding: "8px" }}
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
}

export default AnswerForm;
