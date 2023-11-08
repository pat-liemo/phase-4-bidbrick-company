import React from "react";

function ContactUs() {
  return (
    <section id="contact-us" className="contact-section m-5 bg-dark text-light p-5 rounded-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="section-heading">Contact Us</h3>
            <p>
              We are here to assist you. If you have any questions or need
              support, please feel free to reach out.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mx-auto text-center">
          <i className="fa fa-phone" aria-hidden="true"></i>
            <p>
              <a href="tel:123-456-7890">123-456-7890</a>
            </p>
          </div>
          <div className="col-lg-4 mx-auto text-center">
          <i className="fa fa-envelope" aria-hidden="true"></i>
            <p>
              <a href="mailto:info@realestateauctionapp.com">
                info@realestateauctionapp.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
