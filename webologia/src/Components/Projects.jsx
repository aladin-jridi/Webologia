import React from 'react'

const Projects = () => {
  return (
    <div className="projects-wrapper projectinfotechno-bg section-space--ptb_100">
    <div className="container">

        <div className="row">
            <div className="col-lg-12">
                
                <div className="section-title-wrap text-center section-space--mb_40">
                    <h6 className="section-sub-title mb-20">Case studies</h6>
                    <h3 className="heading">Proud projects <span className="text-color-primary"> make us excel</span></h3>
                </div>
              
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="projects-wrap swiper-container projects-slider__container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            
                            <a href="#" className="projects-wrap style-01 wow move-up">
                                <div className="projects-image-box">
                                    <div className="projects-image">
                                        <img className="img-fluid" src="assets/images/projects/case-study-01-480x298.webp" alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="heading">Mitech-Smart Vision</h6>
                                        <div className="post-categories">Cyber Security</div>
                                        <div className="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.
                                        </div>
                                        <div className="box-projects-arrow">
                                            <span className="button-text">View case study</span>
                                            <i className="fa fa-long-arrow-right ml-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                           
                        </div>

                        <div className="swiper-slide">
                            <a href="#" className="projects-wrap style-01 wow move-up">
                                <div className="projects-image-box">
                                    <div className="projects-image">
                                        <img className="img-fluid" src="assets/images/projects/case-study-02-480x298.webp" alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="heading">Arden-Internal Networking</h6>
                                        <div className="post-categories">Cyber Security</div>
                                        <div className="text">The prospects for a company operating in this new market are varied and exciting. The potential …
                                        </div>
                                        <div className="box-projects-arrow">
                                            <span className="button-text">View case study</span>
                                            <i className="fa fa-long-arrow-right ml-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="swiper-slide">
                            <a href="#" className="projects-wrap style-01 wow move-up">
                                <div className="projects-image-box">
                                    <div className="projects-image">
                                        <img className="img-fluid" src="assets/images/projects/case-study-03-480x298.webp" alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="heading">A Freeserve case study</h6>
                                        <div className="post-categories">Cyber Security</div>
                                        <div className="text">The prospects for a company operating in this new market are varied and exciting. The potential …
                                        </div>
                                        <div className="box-projects-arrow">
                                            <span className="button-text">View case study</span>
                                            <i className="fa fa-long-arrow-right ml-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="swiper-slide">
                            <a href="#" className="projects-wrap style-01 wow move-up">
                                <div className="projects-image-box">
                                    <div className="projects-image">
                                        <img className="img-fluid" src="assets/images/projects/case-study-04-480x298.webp" alt="" />
                                    </div>
                                    <div className="content">
                                        <h6 className="heading">Aqua – Research and Energy</h6>
                                        <div className="post-categories">Cyber Security</div>
                                        <div className="text">The prospects for a company operating in this new market are varied and exciting. The potential …
                                        </div>
                                        <div className="box-projects-arrow">
                                            <span className="button-text">View case study</span>
                                            <i className="fa fa-long-arrow-right ml-1"></i>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="swiper-pagination swiper-pagination-project mt_20"></div>
                </div>

                <div className="section-under-heading text-center section-space--mt_40">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>

            </div>
        </div>
    </div>
</div>
  )
}

export default Projects