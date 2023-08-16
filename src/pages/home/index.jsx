import React, { useEffect } from 'react';

import Navigation from '../../components/nav/Navigation';
import Footer from '../../components/footer/footer';
// import Counter from '../../components/counter/Counter';

import backgroundImg from './images/bank-tree.jpeg';
import logoFeature1 from './images/icon-chat.png';
import logoFeature2 from './images/icon-money.png';
import logoFeature3 from './images/icon-security.png';
import './home.scss';

/**
 * Defining the Home component
 */
function Home() {


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)
  }, [])

  return (
    <div className="home">
      <Navigation />
      <div className='header'>
        <img className="img" src={backgroundImg} alt="" />
        <div className="hero">
          <section className="hero-content">
            <h2 className="subtitle">No fees.</h2>
            <h2 className="subtitle">No minimum deposit.</h2>
            <h2 className="subtitle">High interest rates.</h2>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
      </div>
      <section className='section'>
        <div className='feature-item'>
          <img className='feature-icon' src={logoFeature1} alt="" />
          <h3 className='feature-item-title'>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className='feature-item'>
          <img className='feature-icon' src={logoFeature2} alt="" />
          <h3 className='feature-item-title'>More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className='feature-item'>
          <img className='feature-icon' src={logoFeature3} alt="" />
          <h3 className='feature-item-title'>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
      <Footer />
      {/* <Counter /> */}
    </div>
  );
}

export default Home;
