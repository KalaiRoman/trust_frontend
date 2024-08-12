import React from 'react'
import '../../profile.css';
import TokenCheck from '../../../../middleware/TokenCheck';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Header from '../../../header';
import { createInvoice, GetInvoice } from '../../../../services/payment_services/payment_services';
import { jsPDF } from 'jspdf';
function Invoice() {
  const {id}=useParams();
  const {token,userdata,removeToken,userdataPayment}=TokenCheck();
  const SinglePayment=userdataPayment.find((item,index)=>item?._id==id)


  const createPdf = (params) => {

    // const data={
    //     name:userdata?.email,
    //     items:userdata?.email,
    //     total :100
    // }
    // createInvoice(data)
    // //   .then(() => GetInvoice({ responseType: 'blob' }))
    //   .then((res) => {
    //     console.log(res,"kalaisurya")
    //     // const pdfBlob = new Blob([res.data.filename], { type: 'application/pdf' });

    //     // const pdfUrl = URL.createObjectURL(pdfBlob);
    //     // const link = document.createElement('a');
    //     // link.href = pdfUrl;
    //     // link.download = 'invoice.pdf';
    //     // document.body.appendChild(link);
    //     // link.click();
    //     // document.body.removeChild(link);
    //     const pdfUrl = `/Invoice/${res.data}`;
    //     const a = document.createElement('a');
    //     a.href = pdfUrl;
    //     a.download = 'invoice.pdf';
    //     a.click();
    //   });

        const doc = new jsPDF();
    
        doc.text("Hello world!", 10, 10);
    
        const jsonData = {
          title: userdata?.email,
          amount:SinglePayment?.amount,
          description: "This is an example of generating a PDF in React."
        };
    
        doc.text(jsonData.title, 10, 20);
        doc.text(jsonData.amount, 10, 30);
        doc.text(jsonData.description, 10, 40);
    
        doc.save("sample.pdf");
      
  };
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
                    <th>Order Id</th>

                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{1}</td>

                    <td>{SinglePayment?.orderId}</td>
                    <td>₹ {SinglePayment?.amount}</td>
                </tr>
            </tbody>
        </table>
        <div class="invoice-total mb-5">
            <p>Subtotal: ₹ {SinglePayment?.amount}</p>
            {/* <p>Tax (8%): ₹0.52</p> */}
            <p>Total: ₹ {SinglePayment?.amount}</p>
        </div>

        <div class="invoice-footer mb-5">
            <p>Thank you for Payment with us!</p>
        </div>
        <div>
            <button onClick={createPdf}>Donload Invoice</button>
        </div>
    </div>
    
    </div>
  )
}

export default Invoice