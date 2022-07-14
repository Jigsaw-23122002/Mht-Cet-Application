import "./Cards.css";

function PhysicsPractice11(props) {
  return (
    <div id="PhysicsLinks" classNameName="SectionalDivision">
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
            <h2 className="card__title">1.Gravitation</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1QiVIi8V2Qg7RnU_3O0HKeV9vkLBCsyAr"
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
            <h2 className="card__title">2.Thermal Properties of Matter</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1dX_kYOeGB77Vdy6qwT9zYMzo3p85DV2C"
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
            <h2 className="card__title">3.Optics</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1TzKtHt7iC94bHGo6SANdHMEPnggUDq5u"
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
            <h2 className="card__title">4.Laws of Motion</h2>
            <p className="card__apply">
              <a
                className="card__link"
                href="https://drive.google.com/drive/u/0/folders/1Ca3PkXVFeVd9-Fca2UePV8THfo7UWIHh"
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
        </button>
      </div>
    </div>
  );
}

export default PhysicsPractice11;
