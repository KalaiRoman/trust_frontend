import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link, useNavigate} from "react-router-dom";

import './style.scss';
import { loginService } from '../../services/auth_services/auth_services';
import { ToastError, ToastSuccess } from './../../config/ToastModalMessage';



const LoginPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: false,
    });

    
    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        // validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    // const [validator] = React.useState(new SimpleReactValidator({
    //     className: 'errorMessage'
    // }));



    const submitForm = async(e) => {
        e.preventDefault();
        if (value?.email?.length>0 || value?.password?.length>0) {
           

            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const email = value.email;
            if (regex.test(email)) {
                const data={
                    UserCommanName:value.email,
                    password:value.password,
                }
                const {status,message,token}=await loginService(data);
                if(status)
                    {

                        localStorage.setItem("tr_token",JSON.stringify(token));
                        ToastSuccess(message);
                        setTimeout(() => {
                        push("/home");
    
                        }, 1000);

                        setValue({
                            email: '',
                            password: '',
                        })
                    }

                    else
                    {
                        ToastError(message);
                    }
            }
            else{
                ToastError('Please Enter Valid Email id');
                
            }
        } else {
            ToastError('Empty field is not allowed!');
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
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
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
                                {/* <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler}/>}
                                    label="Remember Me"
                                /> */}
                                <div>
                                    
                                </div>
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </Grid>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Login</Button>
                            </Grid>
                            {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> */}
                            <p className="noteHelp">Don't have an account? <Link to="/signup">Create free account</Link>
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

export default LoginPage;