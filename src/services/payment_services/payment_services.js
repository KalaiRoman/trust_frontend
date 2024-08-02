import { AllApis } from '../../config/Allapis';
import instanceBaseurl from './../../config/BaseUrl';

export async function CreatePayment(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.payment_method}`,datas);
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
        const response=await instanceBaseurl.get(`${AllApis?.allpayments_api}`);
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


// create invoice

export async function createInvoice(data){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.invoice_create_api}`,data);
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

// get invoice data

export async function GetInvoice(data){

    try {
        const response=await instanceBaseurl.get(`${AllApis?.invoice_get_api}`);
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