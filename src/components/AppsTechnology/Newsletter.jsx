import React from 'react';

function Newsletter() {
  return (
    <section className="tc-newsletter-style4">
      <div className="container">
        <div className="newsletter-content wow fadeInUp slow">
          <div className="row">
            <div className="col-lg-6">
              <div className="info">
                <p className="fsz-16 sub_font text-uppercase text-decoration-underline mb-20"> Newsletter </p>
                <h2 className="fsz-60 mb-30"> Stay updated with financial inclusion news, product updates, and more. </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="contact.php" className="form">
                <div className="form-group">
                  <span className="icon"> <i className="fal fa-envelope-open"></i> </span>
                  <input type="text" placeholder="Your email" className="form-control" />
                  <div className="button_su flex-shrink-0">
                    <span className="su_button_circle bg-dark desplode-circle"></span>
                    <a href="#" className="butn button_su_inner bg-blue1 border-0">
                      <span className="button_text_container fsz-14 text-uppercase text-white"> Subscribe <i className="fal fa-long-arrow-right ms-2"></i> </span>
                    </a>
                  </div>
                </div>
                <div className="form-check mt-40">
                  <input className="form-check-input rounded-circle bg-dark" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label color-999" htmlFor="flexCheckDefault">
                    I agree to receive communications from Gubbi AI and consent to my personal data being processed in accordance with the <a href="#" className="text-decoration-underline text-white"> Privacy Policy. </a>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;
