import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import tm1 from '../../images/team/team-1.jpg'
import tm2 from '../../images/team/team-2.jpg'
import tm3 from '../../images/team/team-3.jpg'

const TeamSection = (props) => {
    return(
        <div className="wpo-team-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Meet Our Team</span>
                            <h2>Our Expert Volunteer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={tm1} alt=""/>
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">Smith Tomkin</Link> </h2>
                                    <span>CEO & Founder</span>
                                    <ul>
                                        <li><Link to="/volunteer"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-twitter"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-google"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={tm2} alt=""/>
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">Robert Honey</Link></h2>
                                    <span>Volunteer</span>
                                    <ul>
                                        <li><Link to="/volunteer"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-twitter"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-google"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-team-wrap">
                            <div className="wpo-team-img">
                                <img src={tm3} alt=""/>
                            </div>
                            <div className="wpo-team-content">
                                <div className="wpo-team-text-sub">
                                    <h2><Link to="/volunteer">Juliya Jossoy</Link></h2>
                                    <span>Volunteer</span>
                                    <ul>
                                        <li><Link to="/volunteer"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-twitter"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-google"></i></Link></li>
                                        <li><Link to="/volunteer"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;