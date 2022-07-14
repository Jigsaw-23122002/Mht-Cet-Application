function MathsPractice11(props) {
  return (
    <div id="MathsLinks">
      <div className="main-container">
        <div className="heading">
          <h1 className="heading__title">Chapterwise Practice Questions</h1>
          <p className="heading__credits">Credits to academicdiary@gmail.com</p>
        </div>
        <div className="cards">
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">1.Straight Lines</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1tXF5_Ei2Ah4ev-NVxcy1M1Gszs5iPv_I"
              >
                Open <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-2">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">2.Circle and Conics</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1oLF-ssfxpjITUQMc1yyuBbTcFcv07Oip"
              >
                Open <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-3">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">3.Functions</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1BEveQyd0C-H35_30jNFQsrwp1Jnl9jK4"
              >
                Open <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-4">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">4.Limits and Continuity</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/14bPBQnLk0pC_gu1_uuSPIolmThHzMsmq"
              >
                Open <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-5">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">5.Trigonometry</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1NFyglUId9zQE663JbjIKo1__iqWuwWZp"
              >
                Open <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div className="card card-6">
            <div className="card__icon">
              <i className="fas fa-bolt"></i>
            </div>
            <p className="card__exit">
              <i className="fas fa-times"></i>
            </p>
            <h2 className="card__title">6.Probablity</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1RDu0qMg_UZVvPDCUnuFDZ1XTYh7UrwEj"
              >
                Open <i className="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
      <button
        onClick={() => {
          props.value();
        }}
      >
        Close
      </button></div>
    </div>
  );
}

export default MathsPractice11;
