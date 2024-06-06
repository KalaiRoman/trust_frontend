import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";

import './style.scss';
import { ToastError, ToastSuccess } from '../../config/ToastModalMessage';
import { ChangePasswordservice, forgetMail } from '../../services/auth_services/auth_services';
import { jwtDecode } from "jwt-decode";
const Changepassword = (props) => {
   
    const token = new URLSearchParams(window.location.search);
    const getToken = token.get("token");

    const checkuerId=jwtDecode(getToken);
    const push = useNavigate()
    const [value, setValue] = useState({
        password: '',
        confirmpassword:""
    });

    const {password,confirmpassword}=value;
    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };
    const submitForm = async(e) => {
        e.preventDefault();
        if(password?.length>0 && confirmpassword?.length>0)
            {
                if(password===confirmpassword)
                    {
                        const data={
                            password:password,
                            userId:checkuerId?._id
                        }
                       
                        const {status,message}=await ChangePasswordservice(data);
                        if(status)
                            {
                                ToastSuccess("Password Changed Successfully");
                                setTimeout(() => {
                                    push("/login");
                                }, 800);
                            }
                            else{
                                ToastError(message);
                            }
                    }
                    else{
                    ToastError("Password Not Matched")
                    }

            }
            else{
                ToastError("Please Enter filed")
            }
      
    };
    return (
        <Grid className="loginWrapper">

            <Grid className="loginForm">
                <h2>Change Password</h2>
                <p>Reset your account password</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="New Password"
                                value={password}
                                variant="outlined"
                                name="password"
                                label="New Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={changeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={confirmpassword}
                                variant="outlined"
                                name="confirmpassword"
                                label="Confirm Password"
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

export default Changepassword;