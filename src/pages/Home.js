import React from 'react'
import LandingPage from '../components/LandingPage';

function Home() {
  return (
    <div id="home" className='m-2'>
      <h2>WELCOME TO BIDBRICK!</h2>
      <br/>
        <h6>Become a Proud Home Owner Today! 
          <br/><br/>
          Whether you're looking to buy your dream home or sell your investment property, we're here to make it happen.</h6>
        <br/>
        <LandingPage />
    </div>
  )
}

export default Home;