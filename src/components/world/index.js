import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import tm1 from '../../images/team/1.png'

const WorldSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-world-area ${props.worldclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-world-section">
                            <h2>Lets Chenge The World With Humanity</h2>
                            <Link onClick={ClickHandler} to="/Volunteer"><img src={tm1} alt=""/>   Become A Volunteer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorldSection;