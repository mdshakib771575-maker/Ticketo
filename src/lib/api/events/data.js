import { serverFetch } from "../server"

export const MyManageEvent = async (email)=>{
    // console.log(email)
    const result = await serverFetch(`/api/manage-user/${email}`);
    console.log(result)
    return result;
}

export const getEvents = async (query)=>{
    const result = await serverFetch(`/api/all-events?${query}`);
    // console.log(result)
    return result;
}

export const GetDetailEvent = async (id) => {
    const result = await serverFetch(`/api/single-events/${id}`);
   
    return result;
}
