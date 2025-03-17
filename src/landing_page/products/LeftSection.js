import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  googlePlay,
  appStore,
  link1,
  link1Name,
  link2,
  link2Name,
  htmlString1,
  htmlString2,
}) {
  return (
    <div className="container mt-5">
      <div style={{marginTop:"100px"}} className="row">
        <div className="col-6" style={{marginLeft:"35px"}}>
          <img src={imageURL} />
        </div>
        <div style={{width:"400px",marginLeft:"130px"}} className="col-6 pt-5 ps-5">
          <h2 className="text-muted">{productName}</h2>
          <p className="mt-4" style={{lineHeight:"1.8rem"}}>{productDesription}</p>
          <div >
            <a style={{textDecoration:"none",fontSize:"17px"}} href={link1}>{link1Name} {htmlString1}</a>
            <a href={link2} style={{ marginLeft: "50px",textDecoration:"none",fontSize:"17px" }}>{link2Name} {htmlString2}</a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src="media/images/google-play-badge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstore-badge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
