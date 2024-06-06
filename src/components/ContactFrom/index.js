import React, { Component } from 'react'
import { createContact } from '../../services/contact_services/contact_services';
import { ToastError, ToastSuccess } from './../../config/ToastModalMessage';


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        mobileno: '',
        lastname: '',
        message: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = async(e) => {
        e.preventDefault();

       try {
        const { name,
            email,
            mobileno,
            lastname,
            message,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (mobileno === '') {
            error.mobileno = "Please enter your mobileno";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (message === '') {
            error.message = "Select your  message";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.mobileno === '' && error.message === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                mobileno: '',
                message: '',
                notes: '',
                error: {}
            })
        }

        if(name && email && mobileno && lastname && message)
            {

                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const mobilePattern = /^\d{10}$/;

                if(emailPattern.test(email))
                    {

                        if(mobilePattern.test(mobileno))
                            {
                                const data={
                                    firstName:name,
                                    lastName:lastname,
                                    contactNo:mobileno,
                                    message:message,
                                    email:email
                                }
                                const response=await createContact(data);
                                if(response)
                                    {
                                        ToastSuccess("Contact Successfully");
                                    }

                                    else{
                                        ToastError("Email Already Exists")
                                    }
                
                                   
                                    
                            }
                            else{
                                ToastError("Please Enter Valid Mobile No");
                            }
                        
                    }
                    else
                    {
                        ToastError("Please Enter Valid Email Id")
                    }

                

                
            }
       } catch (error) {
        ToastError(error?.response?.data?.message);
       }
    }

    render(){
        const { name,
            email,
            mobileno,
            lastname,
            error,message } = this.state;

        return(
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Lastname"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={mobileno} type="text" name="mobileno" placeholder="mobileno"/>
                            <p>{error.mobileno ? error.mobileno : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Message" onChange={this.changeHandler} value={message} type="text" ></textarea>
                        </div>
                        <p>{error.message ? error.message : ''}</p>

                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;