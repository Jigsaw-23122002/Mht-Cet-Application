function ChemistryPractice11(props) {
  return (
    <div id="ChemLinks">
      <div>
        <a href="https://drive.google.com/drive/u/0/folders/1-Xy5_6AB2NejuSAS9Jv6kXsT4ssQCnLs">
          <b>1.</b>Some Basic Concepts of Chemistry
        </a>
      </div>
      <br />
      <div>
        <a href="https://drive.google.com/drive/u/0/folders/1IceLf-u5Cm6Gc3b3ASN1UtSFQ3gTuMEy">
          <b>2.</b>States of Matter
        </a>
      </div>
      <br />
      <div>
        <a href="https://drive.google.com/drive/u/0/folders/1t58x-0021Z9l6V2Ptm1uPXFaypBspRTW">
          <b>3.</b>Redox Reaction
        </a>
      </div>
      <br />
      <div>
        <a href="https://drive.google.com/drive/u/0/folders/1Plg60gbM6MSu2UVFQdaTnMNfu6ypelun">
          <b>4.</b>Adsorption and colloids(Surface Chemistry)
        </a>
      </div>
      <br />
      <div>
        <a href="https://drive.google.com/drive/u/0/folders/1d0RRvej-xsqMoFtRrO1pGTuVH1IIJ7Qi">
          <b>5.</b>Chemical Bonding
        </a>
      </div>
      <br />
      <div>
        <a href="https://drive.google.com/drive/u/0/folders/1UXyDvbEPTLV2hz0R_xbzGlBZ-IaFXsjt">
          <b>6.</b>Elements of Group 1 and 2
        </a>
      </div>
      <br />
      <div>
        <a href="https://drive.google.com/drive/u/0/folders/1M8zwbOhx44ePP2QRRgjv8lVAXT_mjOVq">
          <b>7.</b>Basic Principle and Techniques in Organic Chemistry
        </a>
      </div>
      <br />
      <button
        onClick={() => {
          props.value();
        }}
      >
        &#x21e7;
      </button>
    </div>
  );
}

export default ChemistryPractice11;
