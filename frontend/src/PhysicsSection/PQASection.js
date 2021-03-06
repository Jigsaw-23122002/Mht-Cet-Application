import React, { useContext, useState } from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserContext from "../UserContext";
import AnswerComponent from "./AnswerComponent";

const socket = io.connect("http://localhost:3001");

function PQASection(props) {
  const { physicsData, setPhysicsData } = useContext(UserContext);
  let [sidebar, setSidebar] = useState(false);
  let [chapter, setChapter] = useState("");
  let [question, setQuestion] = useState("");

  function wthsb() {
    setSidebar(true);
  }
  function upload(event) {
    event.preventDefault();
    if (chapter !== "" && question !== "") {
      let object = {
        Chapter: chapter,
        Question: question,
      };
      socket.emit("Upload", object);
    }
  }

  useEffect(() => {
    socket.emit("getPhysicsQuestions");
    socket.on("takePhysicsQuestions", (data) => {
      setPhysicsData(data);
    });
  }, []);

  return (
    <div id="natak">
      <h2>Physics Question and answer section</h2>
      <section id="sync1">
        <div id="sync2">
          <div id="sync4">
            <h4>Asked Questions - </h4>
            <button className="BackToMain" onClick={wthsb}>
              Ask a Question
            </button>
          </div>
          <hr />
          <section>
            <div>
              {physicsData.map((element) => {
                return (
                  <div className="QuestionDiv">
                    <AnswerComponent elem={element} />
                  </div>
                );
              })}
            </div>
            <p></p>
          </section>
        </div>

        {sidebar ? (
          <div id="sync3">
            <div id="sync5">
              <form>
                <h3>Upload a Question</h3>
                <hr />
                <br />
                <label>Chapter Name : </label>
                <br />
                <input
                  type="text"
                  required
                  onChange={(e) => {
                    setChapter(e.target.value);
                  }}
                />
                <br />
                <br />
                <label> Question : </label>
                <br />
                <textarea
                  required
                  onChange={(e) => {
                    setQuestion(e.target.value);
                  }}
                ></textarea>
                <br />
                <br />
                <button onClick={upload}> Upload Question </button>
              </form>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </section>
      <section>
        <button className="BackToMain" onClick={props.close}>
          <Link to="/Physics">Back to Main</Link>
        </button>
      </section>
    </div>
  );
}

export default PQASection;
