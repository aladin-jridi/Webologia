import React from "react";

const Header = () => {
  return (
    <div className="header-area">
      
      <div className="header-top-wrap border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center top-message">
                <a href="#">Now Hiring:</a> Are you a driven and motivated 1st
                Line IT Support Engineer?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                <div className="header__logo top-logo">
                  <a href="index.html">
                    <img
                      src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/281137070_127222839962455_1279018889319035446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xb7xkbMBWjEAX8G4DpD&_nc_ht=scontent.ftun16-1.fna&oh=00_AT9FkJm98mYCqLtEkYbGkLwEMZjv4u-6npg1fGtVPUF-YA&oe=62AE3C7A"
                      width="10"
                      height="48"
                      className="img-fluid"
                      alt="aaaaa"
                    />
                  </a>
                </div>

                <div className="header-right flexible-image-slider-wrap">
                  <div className="header-right-inner" id="hidden-icon-wrapper">
                    <div className="header-search-form d-md-none d-block">
                      <form action="#" className="search-form-top">
                        <input
                          className="search-field"
                          type="text"
                          placeholder="Search…"
                        />
                        <button className="search-submit">
                          <i className="search-btn-icon fa fa-search"></i>
                        </button>
                      </form>
                    </div>

                    <div className="swiper-container header-top-info-slider-werap top-info-slider__container">
                      <div className="swiper-wrapper header-top-info-inner default-color">
                        <div className="swiper-slide">
                          <div className="info-item">
                            <div className="info-icon">
                              <span className="fa fa-phone"></span>
                            </div>
                            <div className="info-content">
                              <h6 className="info-title">+216 50 915 806 </h6>
                              <div className="info-sub-title">
                                aladinjridi007@gmail.com
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="info-item">
                            <div className="info-icon">
                              <span className="fa fa-map-marker-alt"></span>
                            </div>
                            <div className="info-content">
                              <h6 className="info-title">
                                Cité El Ghazala 2, Raoued,
                              </h6>
                              <div className="info-sub-title">
                                Ariana 2083 Ariana, Tunisie
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="info-item">
                            <div className="info-icon">
                              <span className="fa fa-clock"></span>
                            </div>
                            <div className="info-content">
                              <h6 className="info-title">8:00AM - 5:00PM</h6>
                              <div className="info-sub-title">
                                Monday to Saturday
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="info-item">
                            <div className="info-icon">
                              <span className="fa fa-comment-alt-lines"></span>
                            </div>
                            <div className="info-content">
                              <h6 className="info-title">Online 24/7</h6>
                              <div className="info-sub-title">
                                +216 50 915 806
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="header-social-networks style-icons">
                      <div className="inner">
                       
                        <a
                          className=" social-link hint--black hint--bottom-left"
                          aria-label="Facebook"
                          href="https://www.facebook.com/BestWebDevelopmentExperts à)"
                          data-hover="Facebook"
                          target="_blank"
                        >
                          <i className="social-icon fab fa-facebook-f"></i>
                        </a>
                        <a
                          className=" social-link hint--black hint--bottom-left"
                          aria-label="Instagram"
                          href="https://instagram.com/"
                          data-hover="Instagram"
                          target="_blank"
                        >
                          <i className="social-icon fab fa-instagram"></i>
                        </a>

                      </div>
                    </div>
                  </div>

                  <div
                    className="mobile-navigation-icon d-block d-xl-none"
                    id="mobile-menu-trigger"
                  >
                    <i></i>
                  </div>

                  <div
                    className="hidden-icons-menu d-block d-md-none"
                    id="hidden-icon-trigger"
                  >
                    <a href="javascript:void(0)">
                      <i className="far fa-ellipsis-h-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-bottom-inner position-relative">
                  <div className="header-bottom-left-wrap">
                    <div className="header__navigation d-none d-xl-block">
                      <nav className="navigation-menu navigation-menu--text_white">
                        <ul>
                          <li className="has-children has-children--multilevel-submenu">
                            <a href="#">
                              <span>Home</span>
                            </a>
                          </li>
                          <li className="has-children has-children--multilevel-submenu">
                            <a href="#">
                              <span>Company</span>
                            </a>
                            <ul className="submenu">
                              <li className="has-children">
                                <a href="about-us-01.html">
                                  <span>About us</span>
                                </a>
                               
                              </li>
                              <li>
                                <a href="contact-us.html">
                                  <span>Contact us</span>
                                </a>
                              </li>
                              <li>
                                {/* <a href="leadership.html">
                                  <span>Leadership</span>
                                </a> */}
                              </li>
                              <li>
                                {/* <a href="why-choose-us.html">
                                  <span>Why choose us</span>
                                </a> */}
                              </li>
                              <li>
                                {/* <a href="our-history.html">
                                  <span>Our history</span>
                                </a> */}
                              </li>
                              <li>
                                {/* <a href="faqs.html">
                                  <span>FAQs</span>
                                </a> */}
                              </li>
                              <li>
                                {/* <a href="careers.html">
                                  <span>Careers</span>
                                </a> */}
                              </li>
                              <li>
                                {/* <a href="pricing-plans.html">
                                  <span>Pricing plans</span>
                                </a> */}
                              </li>
                            </ul>
                          </li>
                          <li className="has-children has-children--multilevel-submenu">
                            <a href="#">
                              <span>IT solutions</span>
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="it-services.html">
                                  <span>IT Services</span>
                                </a>
                              </li>
                              <li>
                                <a href="managed-it-service.html">
                                  <span>Managed IT Services</span>
                                </a>
                              </li>
                              <li>
                                <a href="industries.html">
                                  <span>Industries</span>
                                </a>
                              </li>
                              <li>
                                <a href="business-solution.html">
                                  <span>Business solution</span>
                                </a>
                              </li>
                              <li>
                                <a href="it-services-details.html">
                                  <span>IT Services Details</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="header-search-form ">
                    <form action="#" className="search-form-top style-03 ">
                      <input
                        className="search-field"
                        type="text"
                        placeholder="Search…"
                      />
                      <button className="search-submit">
                        <i className="search-btn-icon fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
