import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";

import './style.scss';
import { ToastError, ToastSuccess } from '../../config/ToastModalMessage';
import { forgetMail } from '../../services/auth_services/auth_services';

const ForgotPassword = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
    });

    const {email}=value;

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };

 
    const submitForm = async(e) => {
        e.preventDefault();

        if(email?.length>0)
            {

                const emailCheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}₹/;

                if(emailCheck.test(email))
                    {

                        const data={
                            email:email
                        }
                        const {status,message}=await forgetMail(data);

                        console.log(message,'message')
                        if(status)
                            {
                                ToastSuccess("Please Check Your Mail");
                                setTimeout(() => {
                                    push("/login");
                                }, 800);
                            }
                            else{
                                ToastError(message);
                            }
                    }
                    else{
                    ToastError("Please Enter Valid Email Id")
                    }

            }
            else{
                ToastError("Please Enter Email Id")
            }
      
    };
    return (
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>Forgot Password</h2>
                <p>Reset your account password</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={changeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">Resend
                                    Password</Button>
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

export default ForgotPassword;