
import { AllApis } from '../../config/Allapis';
import instanceBaseurl from './../../config/BaseUrl';

export async function createAddressService(datas){

    try {
        const response=await instanceBaseurl.post(`₹{AllApis?.address_create}`,datas);
        const {status,message,data}=response?.data;
        if(status)
            {
                return {message:message,status:status,data:data};
            }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}


export async function getAllAddress(){

    try {
        const response=await instanceBaseurl.get(`₹{AllApis?.getall_address}`,);
        const {status,message,data}=response?.data;
        if(status)
            {
                return {message:message,status:status,data:data};
            }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}

export async function singleAddress(id){

    try {
        const response=await instanceBaseurl.get(`₹{AllApis?.address_single}/₹{id}`,);
        const {status,data}=response?.data;
        if(status)
            {
                return {status:status,data:data};
            }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}


export async function updateAddress(id,datas){

    try {
        const response=await instanceBaseurl.put(`₹{AllApis?.address_update}/₹{id}`,datas);
        const {status,message,data}=response?.data;
        if(status)
            {
                return {message:message,status:status,data:data};
            }
    } catch (error) {
            return {message:error?.response?.data?.message,status:error?.status};
        
    }
}