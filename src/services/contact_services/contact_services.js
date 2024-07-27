import { AllApis } from '../../config/Allapis';
import { ToastError } from '../../config/ToastModalMessage';
import instanceBaseurl from './../../config/BaseUrl';

export async function createContact(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.contact_api}`,datas);
       if(response)
        {
            return response?.data;
        }
       
    } catch (error) {
        console.log(error);
           
    }
}