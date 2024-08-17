import React from 'react'
import '../../profile.css';
import TokenCheck from '../../../../middleware/TokenCheck';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Header from '../../../header';
import { createInvoice, GetInvoice } from '../../../../services/payment_services/payment_services';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
function Invoice() {
  const {id}=useParams();
  const {token,userdata,removeToken,userdataPayment}=TokenCheck();
  const SinglePayment=userdataPayment.find((item,index)=>item?._id==id)


  const createPdf = (params) => {
        // const doc = new jsPDF();
        // doc.text("Hello world!", 10, 10);
        // const jsonData = {
        //   title: userdata?.email,
        //   amount:SinglePayment?.amount,
        //   description: "This is an example of generating a PDF in React."
        // };
        // doc.text(jsonData.title, 10, 20);
        // doc.text(jsonData.amount, 10, 30);
        // doc.text(jsonData.description, 10, 40);
        // doc.save("invoice.pdf");

        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text("Invoice", 14, 22);

        doc.text("Pure Heart Trust", 14, 32);
        doc.setFontSize(12);
        const jsonData = {
        Sno:"1",
          title: userdata?.userName,
          orderId:SinglePayment?.orderId,
          amount: `${SinglePayment?.amount}`,
          description: "This is an example of generating a PDF in React."
        };
      
        doc.text(`userName: ${jsonData.title}`, 14, 40);
        const tableColumn = ["S.No","OrderId","Amount"];
        const tableRows = [];
        const rowData = [jsonData.Sno, jsonData.orderId,jsonData.amount];
        tableRows.push(rowData);
              doc.autoTable({
          head: [tableColumn],
          body: tableRows,
          startY: 50,
        });
        doc.text(`Total:${jsonData.amount}`, 14, doc.autoTable.previous.finalY + 10);
        doc.save("invoice.pdf");
      
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