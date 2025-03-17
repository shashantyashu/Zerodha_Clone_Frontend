import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5 ps-4'>
                    <h2 className='text-muted'>Unbeatable pricing</h2>
                    <p className='mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a class="navbar-brand link-primary" href="#">See pricing &rarr;</a>
                </div>
                <div className='col-7 mt-5'>
                    <div style={{display:"inline-flex"}} className='col-4'>
                        <div className='' style={{display:"inline-flex"}}>
                            <img className='' style={{width:"115px"}} src='media/images/pricing-eq.svg'></img>
                            <p style={{fontSize:"11px",width:"100px"}} className='pt-5'>Free account opening</p>
                        </div>
                        <div className='' style={{display:"inline-flex"}}>
                            <img className='' style={{width:"115px"}} src='media/images/pricing-eq.svg'></img>
                            <p style={{fontSize:"11px",width:"117px"}} className='pt-5'>Free equity delivery <br/>
                            and direct mutual funds</p>
                        </div>
                        <div className='' style={{display:"inline-flex"}}>
                            <img className='' style={{width:"115px"}} src='media/images/other-trades.svg'></img>
                            <p style={{fontSize:"11px",width:"100px"}} className='pt-5 '>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;