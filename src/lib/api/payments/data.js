import { serverFetch } from "../server"

export const FetchMyPayments = async (email)=>{
    // console.log(email)
    const result = await serverFetch(`/api/attendee/payments/${email}`);
    console.log(result)
    return result;
}