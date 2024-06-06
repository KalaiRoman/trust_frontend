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