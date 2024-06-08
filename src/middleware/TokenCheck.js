import { useEffect, useState } from "react";
import { getProfileUserData } from "../services/auth_services/auth_services";

function TokenCheck() {

    const [userdata,setUserData]=useState({});
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

    const removeToken=async()=>{
        localStorage.removeItem("tr_token");
    }

    useEffect(()=>{

        if(token)
            {
                getUser();

            }
    },[token]);
  return {token,userdata,removeToken,pathCheck}
}

export default TokenCheck