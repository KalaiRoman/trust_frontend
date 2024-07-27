import { AllApis } from '../../config/Allapis';
import instanceBaseurl from './../../config/BaseUrl';

export async function CreatePayment(datas){

    try {
        const response=await instanceBaseurl.post(`₹{AllApis?.payment_method}`,datas);
       if(response)
        {
            return response?.data;
        }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}

export async function GetPayment(){

    try {
        const response=await instanceBaseurl.get(`₹{AllApis?.allpayments_api}`);
       if(response)
        {
            return{
                status:response?.data?.status,
                data:response?.data?.data,
                message:response?.data?.message
            }
        }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}