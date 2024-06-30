import React from 'react'
import '../../profile.css';
import TokenCheck from '../../../../middleware/TokenCheck';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Header from '../../../header';
function Invoice() {
  const {id}=useParams();
  const {token,userdata,removeToken,userdataPayment}=TokenCheck();
  const SinglePayment=userdataPayment.find((item,index)=>item?._id==id)
  return (
    <div className='mb-5'>

        <Header/>

<div class="invoice">
        <div class="invoice-header">
            <div class="invoice-header-left">
                {/* <img src="https://img.icons8.com/?size=256&id=FJJcVgL6wWOP&format=png" alt="Company Logo" width="150"/> */}
                <h1>Trust</h1>
                <p>{userdata?.address}</p>
                <p>Email: {userdata?.email}</p>
                <p>Phone: +91 {userdata?.mobileNo}</p>
            </div>
            <div class="invoice-header-right">
                <h2>Invoice</h2>
                <p>Invoice Number: {SinglePayment?.orderId}</p>
                <p>Date: {moment(SinglePayment?.createdAt).format('LLL')}</p>
            </div>
        </div>
        <table class="invoice-table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{SinglePayment?._id.slice(23,25)}</td>
                    <td>{SinglePayment?.amount}</td>
                </tr>
            </tbody>
        </table>
        <div class="invoice-total mb-5">
            <p>Subtotal: ₹{SinglePayment?.amount}</p>
            {/* <p>Tax (8%): $0.52</p> */}
            <p>Total: ₹ {SinglePayment?.amount}</p>
        </div>

        <div class="invoice-footer">
            <p>Thank you for Payment with us!</p>
        </div>
    </div>
    
    </div>
  )
}

export default Invoice