import React, { useEffect, useState } from 'react';

import pmt1 from '../../images/checkout/img-1.png';
import pmt2 from '../../images/checkout/img-2.png';
import pmt3 from '../../images/checkout/img-3.png';
import pmt4 from '../../images/razer.webp';
import ModalPopupaddress from './ModalPopupaddress';
import { getAllAddress } from '../../services/address_services/address_services';
import { ToastError, ToastSuccess } from '../../config/ToastModalMessage';
import { CreatePayment } from '../../services/payment_services/payment_services';
import TokenCheck from '../../middleware/TokenCheck';
import './dontae.css';
const Donate = (props) => {
    const [show, setShow] = useState(false);
    const {token}=TokenCheck();
    const [amount,setAmount]=useState(0);
    const [addressid,setAddressid]=useState("");
    const [addressid1,setAddressid1]=useState("");
    const [payment_type,setPaymentType]=useState("");
    const [addresss,setAddress]=useState([]);
    const [loading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {setShow(true)
        setAddressid1(id)
    };
    const SubmitHandler = (e) => {
        e.preventDefault();
    }

    const getAddress=async()=>{
        try {
            
            const {status,data,message}=await getAllAddress();

            if(status)
                {
                    setAddress(data);
                }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getAddress();
    },[])


    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const PaymentPlans = async (data) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        if(amount && addressid && payment_type)
            {
                const payment_values = {
                    currency: "INR",
                    amount: amount,
                    address: addressid,
                    paymentMethod: payment_type
                };

                setLoading(true);
                CreatePayment(payment_values)
                    .then((res) => {
                        console.log(res,'res')
                        const data = res;
                        const user_payment_id = data.user_payment_id;
                        const options = {
                            key: 'rzp_test_EM3reg1Z7aUAw6',
                            currency: 'INR',
                            amount: data.amount,
                            order_id: data.order_id,
                            name: "Support-Personal-Trust",
                            description: "Can You Please Support Every Month or Day in Trust Pay Amonut",
                            image: "profileimage",
                            handler: async function (data) {
                                const update_userpayment = {
                                    user_payment_id,
                                    paymentId: data.razorpay_payment_id,
                                    orderId: data.razorpay_order_id,
                                    signature: data.razorpay_signature,
                                };
        
                                ToastSuccess("Payment Paid Successfully");
                                setTimeout(() => {
                                    setLoading(false)
        
                                }, 800);
                            },
                            modal: {
                                ondismiss: async function () {
                                },
                            },
                        };
                        const paymentObject = new window.Razorpay(options);
                        paymentObject.open();
                    })
                    .catch((err) => {
                        setLoading(false)
                    });
            }
            else{
                ToastError("Please Enter All Fields")
            }
      
    }

    const LoginCheck=async()=>{
        try {
            window.location.assign("/login");
            localStorage.setItem("tr_path",window.location.pathname);
        } catch (error) {
            
        }
    }
    return (
        <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <form onSubmit={SubmitHandler} action="#">
                            <div className="wpo-donations-amount">
                                <h2>Your Donation</h2>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="text"
                                    id="text"
                                    placeholder="Enter Donation Amount"
                                    value={amount}
                                    
                                    onChange={(e)=>setAmount(e.target.value)}
                                />
                            </div>
                            <div className="wpo-donations-details">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h2 className="mt-3">Details</h2>
                                    </div>
                                    <div>
                                        <button
                                            className="theme-btn"
                                            type="button"
                                            onClick={()=>{handleShow()

                                                setAddressid1("");
                                            }}
                                        >
                                            Add Address +
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <ModalPopupaddress
                                        handleClose={handleClose}
                                        show={show}
                                        getAddress={getAddress}
                                        id={addressid1}
                                    />
                                </div>
                                <div>
                                    {addresss && addresss?.map((item,index)=>{
                                        return(
                                            <div className={`${addressid==item?._id?"active-card":"card"} p-3 rounded cursor-pointer`} onClick={()=>setAddressid(item?._id)} key={index}>
                                                <div>
                                                    {item?.username}
                                                </div>
                                                <div>
                                                    {item?.contactno}
                                                </div>
                                                <div>
                                                    {item?.address}
                                                </div>
                                                <div className='edit' onClick={()=>handleShow(item?._id)}>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="wpo-doanation-payment">
                                <h2>Choose Your Payment Method</h2>
                                <div className="wpo-payment-area">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="wpo-payment-option" id="open4">
                                                <div className="wpo-payment-select">
                                                    <ul>
                                                        <li className="addToggle">
                                                            <input
                                                                id="add"
                                                                type="radio"
                                                                name="payment"
                                                                value="onlypayment"
                                                                onChange={(e)=>setPaymentType("onlypayment")}
                                                            />
                                                            <label htmlFor="add">Only Payment</label>
                                                        </li>
                                                        <li className="removeToggle">
                                                            <input
                                                                id="remove"
                                                                type="radio"
                                                                name="payment"
                                                                value="others"
                                                                onChange={(e)=>setPaymentType("others")}

                                                            />
                                                            <label htmlFor="remove">Others</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-area mt-4">

{token?<>
    <button type="submit" className="theme-btn submit-btn" onClick={PaymentPlans}>Donate Now</button>
</>:<>
<button type="submit" className="theme-btn submit-btn" onClick={LoginCheck}>Donate Now</button>
</>}
                                
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donate;
