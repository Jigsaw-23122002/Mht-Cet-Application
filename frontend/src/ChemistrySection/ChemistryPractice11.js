function ChemistryPractice11(props) {
  return (
    <div id="ChemLinks">
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">Chapterwise Practice Questions</h1>
          <p class="heading__credits">Credits to academicdiary@gmail.com</p>
        </div>
        <div class="cards">
          <div class="card card-1">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">1.Some Basic Concepts of Chemistry</h2>
            <p class="card__apply">
              <a
                class="card__link"
                href="https://drive.google.com/drive/u/0/folders/1-Xy5_6AB2NejuSAS9Jv6kXsT4ssQCnLs"
              >
                Open <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-2">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">2.States of Matter</h2>
            <p class="card__apply">
              <a
                class="card__link"
                href="https://drive.google.com/drive/u/0/folders/1IceLf-u5Cm6Gc3b3ASN1UtSFQ3gTuMEy"
              >
                Open <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-3">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">3.Redox Reaction</h2>
            <p class="card__apply">
              <a
                class="card__link"
                href="https://drive.google.com/drive/u/0/folders/1t58x-0021Z9l6V2Ptm1uPXFaypBspRTW"
              >
                Open <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-4">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              4.Adsorption and colloids(Surface Chemistry)
            </h2>
            <p class="card__apply">
              <a
                class="card__link"
                href="https://drive.google.com/drive/u/0/folders/1Plg60gbM6MSu2UVFQdaTnMNfu6ypelun"
              >
                Open <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-5">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">5.Chemical Bonding</h2>
            <p class="card__apply">
              <a
                class="card__link"
                href="https://drive.google.com/drive/u/0/folders/1d0RRvej-xsqMoFtRrO1pGTuVH1IIJ7Qi"
              >
                Open <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-6">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">6.Elements of Group 1 and 2</h2>
            <p class="card__apply">
              <a
                class="card__link"
                href="https://drive.google.com/drive/u/0/folders/1UXyDvbEPTLV2hz0R_xbzGlBZ-IaFXsjt"
              >
                Open <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-1">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              7.Basic Principle and Techniques in Organic Chemistry
            </h2>
            <p class="card__apply">
              <a
                class="card__link"
                href="https://drive.google.com/drive/u/0/folders/1M8zwbOhx44ePP2QRRgjv8lVAXT_mjOVq"
              >
                Open <i class="fas fa-arrow-right"></i>
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
          close
        </button>
      </div>
    </div>
  );
}

export default ChemistryPractice11;
