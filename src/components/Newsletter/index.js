import React, { useState } from 'react'
import './style.css'
import { ToastError } from '../../config/ToastModalMessage';
import { Subscribe } from '../../middleware/Subscribeuser';

const Newsletter = (props) => {
    const [subscribe,setSubscribes]=useState("");
    const handleChange=async(e)=>{
        setSubscribes(e.target.value);
    }
    const SubmitHandler = async(e) => {
      e.preventDefault()

      if(subscribe)
        {

        await Subscribe(subscribe);

        }
        else{
            ToastError("Please Enter Mail Id");
        }
    }
    return(
        <section className="wpo-news-letter-section">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 offset-lg-3 col-sm-8 offset-md-2">
                        <div className="wpo-newsletter">
                            <h3>Follow us For ferther information</h3>
                            <div className="wpo-newsletter-form">
                                <form onSubmit={SubmitHandler}>
                                    <div>
                                        <input type="text" placeholder="Enter Your Email" className="form-control"
                                        name="subscribe" value={subscribe} onChange={handleChange}
                                        />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;