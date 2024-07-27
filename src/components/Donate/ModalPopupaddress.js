import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastError, ToastSuccess } from '../../config/ToastModalMessage';
import { createAddressService, singleAddress, updateAddress } from '../../services/address_services/address_services';

function ModalPopupaddress({ show, handleClose,getAddress,id }) {
  const [users, setUsers] = useState({
    username: "",
    contactno: "",
    alternateno: "",
    address: "",
  });

  const { username, contactno, alternateno, address } = users;

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (username && contactno && alternateno && address) {
      const contactNumberCheck = /^\d{10}₹/;

      if (contactNumberCheck.test(contactno) && contactNumberCheck.test(alternateno)) {
        const data = {
          username,
          contactno,
          alternateno,
          address,
        };

        const {status}=await createAddressService(data);
        if(status)
          {
            ToastSuccess("Created Address");
            handleClose();
            getAddress();
          }
      } else {
        ToastError("Please Enter Valid Mobile No");
      }
    } else {
      ToastError("Please Enter All Fields");
    }
  };

  const getSingleAddress=async()=>{
    try {
      if(id)
        {
          const {status,data}=await singleAddress(id);
          if(status)
            {
              setUsers(data);
            }
        }
    } catch (error) {
    
    }
  }

  const handleUpdate=async(e)=>{
    e.preventDefault();

    if (username && contactno && alternateno && address) {
      const contactNumberCheck = /^\d{10}₹/;

      if (contactNumberCheck.test(contactno) && contactNumberCheck.test(alternateno)) {
        const data = {
          username,
          contactno,
          alternateno,
          address,
        };

        const {status}=await updateAddress(id,data);
        if(status)
          {
            ToastSuccess("Updated Address");
            handleClose();
            getAddress();
          }
      } else {
        ToastError("Please Enter Valid Mobile No");
      }
    } else {
      ToastError("Please Enter All Fields");
    }
  }


  useEffect(()=>{
    if(id)
      {
        getSingleAddress();

      }
      else{
        setUsers({  username: "",
          contactno: "",
          alternateno: "",
          address: "",});
      }
  },[id])
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-6 col-12 form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  id="fname"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className='row mt-3 mb-4'>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                <label>Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  value={contactno}
                  onChange={handleChange}
                  name="contactno"
                  id="contactno"
                  placeholder="Contact No"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                <label>Alternate Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  value={alternateno}
                  onChange={handleChange}
                  name="alternateno"
                  placeholder="Contact No"
                />
              </div>
              <div className='col-lg-12 col-12 from-group mt-3 mb-4'>
                <label>Address</label>
                <textarea
                  className="form-control"
                  placeholder="Message"
                  value={address}
                  onChange={handleChange}
                  name="address"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
            </div>

            <div className='mt-2 mb-4'>
              <button className='theme-btn' onClick={id?handleUpdate:handleSubmit}>{id?"Update Address":"Create Address"}</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalPopupaddress;
