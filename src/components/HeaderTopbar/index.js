import React, { useState } from 'react'
import {Link}  from 'react-router-dom'
import './style.css'
import TokenCheck from '../../middleware/TokenCheck'
import Modal from 'react-bootstrap/Modal';
const HeaderTopbar = () => {
    const {token,userdata,removeToken}=TokenCheck();
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-call"></i>+91{userdata?.mobileNo}</li>
                                <li><i className="fi flaticon-envelope"></i>{userdata?.email}</li>
                            </ul>
                        </div>
                    </div>
                    {token?<>
                    
                        <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><span onClick={handleShow} style={{cursor:"pointer"}}>Logout</span></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link className="theme-btn" to="/donate">Donate Now</Link></li>
                            </ul>
                            
                        </div>
                        
                    </div>
                    </>:<>
                    
                        <div className="col col-md-6 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">Sign Up</Link></li>
                                <li><Link className="theme-btn" to="/donate">Donate Now</Link></li>
                            </ul>
                        </div>
                    </div>
                    </>}
                   
                </div>
            </div>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modal'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{userdata?.userName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
            <span>Are You Sure Logout this Website?</span>
        </div>
        <div className='d-flex gap-4 align-items-center justify-content-center mt-4 mb-4'>
            <button className="theme-btn" onClick={handleClose}>Close</button>
            <button className="theme-btn" onClick={()=>{removeToken()
                handleClose()
            }}>Logout</button>
        </div>
        </Modal.Body>
        
      </Modal>
        </div>
    )
}

export default HeaderTopbar;