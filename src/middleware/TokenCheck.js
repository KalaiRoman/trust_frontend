import { useEffect, useState } from "react";
import { getProfileUserData } from "../services/auth_services/auth_services";
import { GetPayment } from "../services/payment_services/payment_services";

function TokenCheck() {

    const [userdata,setUserData]=useState({});
    const [userdataPayment,setUserDataPayment]=useState([]);

    const token=localStorage.getItem("tr_token");
    const pathCheck=localStorage.getItem("tr_path");

    const getUser=async()=>{
        try {
            const {status,data,message}=await getProfileUserData();
            if(status)
                {
                    setUserData(data);
                }
        } catch (error) {
            console.log(error);
        }
    }

    const getUserPayment=async()=>{
        try {
            const {status,data,message}=await GetPayment();
            if(status)
                {
                    setUserDataPayment(data);
                }
        } catch (error) {
            console.log(error);
        }
    }

    const removeToken=async()=>{
        localStorage.removeItem("tr_token");
        localStorage.clear();
        window.location.reload(false);
    }

    useEffect(()=>{

        if(token)
            {
                getUser();
                getUserPayment();
            }
    },[token]);
  return {token,userdata,removeToken,pathCheck,userdataPayment}
}

export default TokenCheck