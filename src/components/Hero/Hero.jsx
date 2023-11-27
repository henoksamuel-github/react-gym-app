import React from 'react';
import './Hero.css'
import Header from '../Header/Header';

function Hero() {
  return (
    <div className="hero">
        <div className="left-hero">
        
        <Header/>

        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div>
            <span>
            In here we will help you to shape and build your ideal body and live your life to fullest
            </span>
          </div>

        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>

        </div>
          {/* hero buttons */}
          <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right-hero">Right Side</div>
    </div>

  )
}

export default Hero