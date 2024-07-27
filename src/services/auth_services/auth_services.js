
import { AllApis } from '../../config/Allapis';
import instanceBaseurl from './../../config/BaseUrl';

export async function loginService(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.login_api}`,datas);
        const {status,message,data,token}=response?.data;
        if(status)
            {
                return {message:message,status:status,data:data,token:token};
            }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}

export async function registerService(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.register_api}`,datas);
        const {status,message,data}=response?.data;
        if(status)
            {
                return {message:message,status:status,data:data};
            }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}

export async function otpService(data){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.otp_api}`,data);
        const {status,message,token}=response?.data;
        if(status)
            {
                localStorage.setItem("tr_token",JSON.stringify(token));
                return {message:message,token:token,status:status};
            }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}

export async function forgetMail(data){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.forgetpassword_mail}`,data);
        const {status,message}=response?.data;
        if(status)
            {
                return {message:message,status:status};
            }
    } catch (error) {

        console.log(error?.response?.data?.message,"kalai")
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}



export async function ChangePasswordservice(data){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.change_password}`);
        const {status,message}=response?.data;
        if(status)
            {
                return {message:message,status:status};
            }
    } catch (error) {

            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}

// get profile image


export async function getProfileUserData(){

    try {
        const response=await instanceBaseurl.get(`${AllApis?.get_user_api}`);
        const {status,message,data}=response?.data;
        if(status)
            {
                return {message:message,status:status,data:data};
            }
    } catch (error) {

        console.log(error?.response?.data?.message,"kalai")
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}


// update profile

// get profile image


export async function updateProfileservice(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.profile_update}`,datas);
        const {status,message,data}=response?.data;
        if(status)
            {
                return {message:message,status:status,data:data};
            }
    } catch (error) {

            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}