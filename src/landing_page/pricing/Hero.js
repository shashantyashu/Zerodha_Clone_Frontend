import React from 'react';

function Hero() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>
      <div className="row py-5 mt-5 text-center">
        <div className="col-4 py-4">
          <img style={{width:"250px"}} src="media/images/pricing-eq.svg" />
          <h1 className="fs-3 mt-4">Free equity delivery</h1>
          <p style={{fontSize:"17.5px"}} className="text-muted mt-4">
            All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div  className="col-4 py-4">
          <img style={{width:"250px"}} src="media/images/other-trades.svg" />
          <h1 className="fs-3 mt-4">Intraday and F&O trades</h1>
          <p style={{fontSize:"17.5px"}} className="text-muted mt-4">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 py-4">
          <img style={{width:"250px"}} src="media/images/pricing-eq.svg" />
          <h1 className="fs-3 mt-4">Free direct MF</h1>
          <p style={{fontSize:"17.5px"}} className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
     );
}

export default Hero;