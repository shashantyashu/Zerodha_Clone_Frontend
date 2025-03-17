import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore, link1, link1Name, htmlString1 }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div style={{marginTop:"100px"}} className="col-5 py-5 ">
          <h2 style={{fontSize:"35px"}} className="mb-4">{productName}</h2>
          <p style={{width:"310px",lineHeight:"1.8rem"}}>{productDesription}</p>
          <div>
          <a style={{textDecoration:"none",fontSize:"17px"}} href={link1}>{link1Name} {htmlString1}</a>
          </div>
        </div>
        <div className="col-7 ">
          <img style={{width:"95%"}} src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
