import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {useLocation, useNavigate} from "react-router-dom";
import '../LoginPage/style.scss';
import { loginService, otpService } from '../../services/auth_services/auth_services';
import { ToastError, ToastSuccess } from './../../config/ToastModalMessage';


import OtpInput from 'react-otp-input';
const Otp = (props) => {

    const state=useLocation();


    console.log(state?.state?.userId)
    const [otp, setOtp] = useState('');
    const push = useNavigate()



  






    const submitForm = async(e) => {
        e.preventDefault();
        if (otp?.length===6) {
                const data={
                    otp:otp,
                    userid:state?.state?.userId,
                }


                const {status,message,token}=await otpService(data);
                if(status)
                    {
                        ToastSuccess(message);
                        setTimeout(() => {
                        push("/home");
                        }, 1000);
                    }
                    else
                    {
                        ToastError(message);
                   }
            
           
        } else {
            ToastError('Please Enter 6 Digit Otp Number');
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>OTP</h2>
                <p>Enter Otp Verification </p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} className="otp-input"/>}
    />
                        </Grid>
                        
                       
                        <Grid item xs={12}>
                            
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Otp Verification</Button>
                            </Grid>
                          
                            
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

export default Otp;