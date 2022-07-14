function AnswerList(props) {
  console.log(props.answers);
  if (props.answers.length === 0) {
    return (
      <div
        className="PreviousAnswers"
        style={{ padding: "10px", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
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
                  <p style={{ fontWeight: "bold" }}>
                    Answer by {item.Answerer}
                  </p>
                  <p style={{ color: "white", fontWeight: "bold" }}>Answer :</p>
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
