import { AllApis } from '../../config/Allapis';
import instanceBaseurl from './../../config/BaseUrl';

export async function CreateReview(datas){

    try {
        const response=await instanceBaseurl.post(`${AllApis?.review_create_api}`,datas);
       if(response)
        {
            return response?.data;
        }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}

export async function GetReview(){

    try {
        const response=await instanceBaseurl.get(`${AllApis?.review_get_api}`);
       if(response)
        {
            return response?.data;
        }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}