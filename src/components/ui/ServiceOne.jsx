import React from "react";

const ServicesOne = () => {
  return (
    <section className="services-one">
      <div className="container">
        <div className="services-one__top">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="services-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">What We’re Offering</span>
                  <h2 className="section-title__title">The Services We’re Providing <br /> to Our Customers</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="services-one__top-right">
                <p className="services-one__top-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. quis nostrud exercitation ullamco laboris.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="services-one__bottom">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms">
              {/* Services One Single */}
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src="http://layerdrops.com/wostin/main-html/assets/images/services/services-1-1.jpg" alt="" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-garbage-1"></span>
                  </div>
                </div>
                <div className="services-one__content-box">
                  <div className="services-one__content">
                    <h3 className="services-one__title"><a href="zero-waste.html">Zero Waste</a></h3>
                  </div>
                  <div className="services-one__hover">
                    <h3 className="services-one__hover-title"><a href="zero-waste.html">Zero Waste</a></h3>
                    <p className="services-one__hover-text">Lorem ipsum dolor sit amet, adipelit do.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms">
              {/* Services One Single */}
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src="http://layerdrops.com/wostin/main-html/assets/images/services/services-1-1.jpg" alt="" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-dumpster"></span>
                  </div>
                </div>
                <div className="services-one__content-box">
                  <div className="services-one__content">
                    <h3 className="services-one__title"><a href="dumpster-rental.html">Dumpster Rental</a></h3>
                  </div>
                  <div className="services-one__hover">
                    <h3 className="services-one__hover-title"><a href="dumpster-rental.html">Dumpster Rental</a></h3>
                    <p className="services-one__hover-text">Lorem ipsum dolor sit amet, adipelit do.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms">
              {/* Services One Single */}
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src="http://layerdrops.com/wostin/main-html/assets/images/services/services-1-1.jpg" alt="" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-portable-toilets"></span>
                  </div>
                </div>
                <div className="services-one__content-box">
                  <div className="services-one__content">
                    <h3 className="services-one__title"><a href="portable-toilet.html">Portable Toilet</a></h3>
                  </div>
                  <div className="services-one__hover">
                    <h3 className="services-one__hover-title"><a href="portable-toilet.html">Portable Toilet</a></h3>
                    <p className="services-one__hover-text">Lorem ipsum dolor sit amet, adipelit do.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="400ms">
              {/* Services One Single */}
              <div className="services-one__single">
                <div className="services-one__img-box">
                  <div className="services-one__img">
                    <img src="http://layerdrops.com/wostin/main-html/assets/images/services/services-1-1.jpg" alt="" />
                  </div>
                  <div className="services-one__icon">
                    <span className="icon-triangular-arrows-sign-for-recycle"></span>
                  </div>
                </div>
                <div className="services-one__content-box">
                  <div className="services-one__content">
                    <h3 className="services-one__title"><a href="recylcing-services.html">Recycling Service</a></h3>
                  </div>
                  <div className="services-one__hover">
                    <h3 className="services-one__hover-title"><a href="recylcing-services.html">Recycling Service</a></h3>
                    <p className="services-one__hover-text">Lorem ipsum dolor sit amet, adipelit do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
