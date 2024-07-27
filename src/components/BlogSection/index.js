import React from 'react'
import blog2 from '../../images/trustimages/h2.png'
import blog3 from '../../images/trustimages/h3.png'
import blog1 from '../../images/trustimages/h1.png'
import {Link} from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our Blog</span>
                            <h2>Latest News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <img src={blog1} alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <span>Nov 24, 2020</span>
                                <h2><Link onClick={ClickHandler} to="/Blog"> Help The Helpless</Link></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <img src={blog2} alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <span>Nov 24, 2020</span>
                                <h2><Link onClick={ClickHandler} to="/Blog"> Help The Helpless</Link></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 custom-grid">
                        <div className="wpo-blog-item">
                            <div className="wpo-blog-img">
                                <img src={blog3} alt=""/>
                            </div>
                            <div className="wpo-blog-content">
                                <span>Nov 24, 2020</span>
                                <h2><Link onClick={ClickHandler} to="/Blog"> Help The Helpless</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;