import React from 'react'

function Footer() {
  return (
    <div id="footer" className='bg-dark text-light p-5 mb-0 row'>
        <div className="col-lg-4 mx-auto text-center">
          <h6>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            &nbsp;
            Global
        </h6>
        <p>Where we redefine real estate auctions for the modern world.</p>
        </div>
        <br/>
        <div className="col-lg-4 mx-auto text-center">
        <h6>Reach us:</h6>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        &nbsp;&nbsp;&nbsp;
        <i className="fa fa-facebook" aria-hidden="true"></i>

        &nbsp;&nbsp;&nbsp;
        <i className="fa fa-twitter" aria-hidden="true"></i>

        &nbsp;&nbsp;&nbsp;
        <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
    </div>
  )
}

export default Footer;