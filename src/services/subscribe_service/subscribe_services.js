import { AllApis } from '../../config/Allapis';
import instanceBaseurl from './../../config/BaseUrl';

export async function SubscribeUser(datas){

    try {
        const response=await instanceBaseurl.post(`₹{AllApis?.subscribe_api}`,datas);
       if(response)
        {
            return response?.data;
        }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}