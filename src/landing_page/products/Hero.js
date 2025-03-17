import React from 'react';

function Hero() {
    return ( 
        <div className='container '>
            <div style={{marginBottom:"110px"}} className='text-center mt-5 pt-5'>
                <h1 className='text-muted' style={{fontSize:"45px"}}>Zerodha Products</h1>
                <p style={{fontSize:"21px"}}>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings &rarr;</a></p>
            </div>
            <hr/>
        </div>
     );
}

export default Hero;