import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5'>
                    <h2 className='mb-5 text-muted'>Trust with confidence</h2>
                    <h4 className='mt-4 text-muted'>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4 className='mt-4 text-muted'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4 className='mt-4 text-muted'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4 className='mt-4 text-muted'>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 px-5'>
                    <img className='col-12'  src='media/images/ecosystem.png' />
                    <span>
                    <p style={{textAlign:"center"}}><a class="navbar-brand link-primary" href="#">Explore our products &rarr;</a> &nbsp;&nbsp;&nbsp; <a class="navbar-brand link-primary" href="#">Try Kite demo &rarr;</a></p>
                    </span>   
                </div>
                <div style={{width:"900px"}} className='px-5 mx-auto mt-5 mb-5'><img className='col-12 px-5' src='media/images/press-logos.png' /> </div>
                
            </div>
        </div>
     );
}

export default Stats;