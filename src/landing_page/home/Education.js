import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5 pt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img style={{width:"400px"}} src='media/images/index-education.svg' />
                </div>
                <div className='col-6 mt-3'>
                    <h2 className='text-muted'>Free and open market education</h2>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world <br/> covering everything from the basics to advanced trading.</p>
                    <a class="navbar-brand link-primary mt-3" href="#">Varsity &rarr;</a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
                    <a class="navbar-brand link-primary mt-3" href="#">TradingQ&A &rarr;</a>
                </div>
            </div>
        </div>
     );
}

export default Education;