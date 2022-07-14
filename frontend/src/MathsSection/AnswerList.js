function AnswerList(props) {
  console.log(props.answers);
  if (props.answers.length === 0) {
    return (
      <div className="PreviousAnswers">
        This question is not yet answered by anyone.
      </div>
    );
  } else {
    return (
      <div>
        <hr />
        <div className="PreviousAnswers">
          <div>
            {props.answers.map((item) => {
              return (
                <div className="OneAnswer">
                  <p style={{ fontWeight: "bold", color: "white" }}>
                    Answer by {item.Answerer}
                  </p>
                  <p style={{ fontWeight: "bold", color: "white" }}>Answer :</p>
                  <p style={{ fontWeight: "bold", color: "black" }}>
                    {item.Answer}
                  </p>
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
