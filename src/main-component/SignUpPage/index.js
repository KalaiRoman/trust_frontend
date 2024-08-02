import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";


import './style.scss';
import { ToastError, ToastSuccess } from '../../config/ToastModalMessage';
import { registerService } from '../../services/auth_services/auth_services';

const SignUpPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
        userName: '',
        password: '',
        confirm_password: '',
        mobileNo:''
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };

   


    const submitForm = async(e) => {
        e.preventDefault();
                        if(value?.email?.length>0 || value?.userName?.length>0 || value?.password?.length>0 || value?.confirm_password?.length>0 || value?.mobileNo?.length>0)
            {

                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                const passwordRegx=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                const email = value.email;
                if (regex.test(email)) {
                    if(passwordRegx.test(value?.password) && passwordRegx.test(value?.confirm_password))
                    {
                        if(value?.password===value?.confirm_password)
                            {
                                const datas={
                                    "userName":value?.userName,
                                    "password":value?.password,
                                    "email":value?.email,
                                    "mobileNo":value?.mobileNo
                                }
                                const {status,message,data}=await registerService(datas);
    
                                if(status)
                                    {
    ToastSuccess("Otp Send Check Your Mail!");
    
    setTimeout(() => {
    
        console.log(data,'data?._id')
        push("/otp",{state:{userId:data?._id}});
                                        setValue({
                                            email: '',
                                            userName: '',
                                            password: '',
                                            confirm_password: '',
                                            mobileNo:''
                                        });
    }, 1000);
                                        
                                    }
                                    else{
                                        ToastError(message);
                                    }
                              
                            } 
                            else{
                                ToastError("Confirm Password Not Matched")
                            }
                    }
                    else{
ToastError("password should contain at least a symbol, upper and lower case letters and a number")
                    }
                  
                  
                }
                else{
                    ToastError('Please Enter Valid Email id');

                }
             
            }
           
         else {
         
            ToastError('Empty field is not allowed!');
        }
    };
    return (
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Full Name"
                                value={value.userName}
                                variant="outlined"
                                name="userName"
                                label="Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Mobile No"
                                value={value.mobileNo}
                                variant="outlined"
                                name="mobileNo"
                                label="Mobile No"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={value.confirm_password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Sign Up</Button>
                            </Grid>
                            {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> */}
                            <p className="noteHelp">Already have an account? <Link to="/login">Return to Sign In</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Grid>
        </Grid>
    )
};

export default SignUpPage;