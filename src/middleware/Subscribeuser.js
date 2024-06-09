import { SubscribeUser } from "../services/subscribe_service/subscribe_services"
import { ToastError, ToastSuccess } from './../config/ToastModalMessage';

export const Subscribe=async(params)=>{
    try {
        const {status,message}=await SubscribeUser({
            email:params
        })
        if(status)
            {
                ToastSuccess("Subscribe User Successfully");
            }
            else{
                ToastError(message);
            }
    } catch (error) {
     
    }
}

