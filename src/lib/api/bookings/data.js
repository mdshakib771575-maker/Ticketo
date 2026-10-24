import { serverFetch } from "../server"

export const FetchMyBookings = async (email)=>{
    // console.log(email)
    const result = await serverFetch(`/api/attendee/events/booking/${email}`);
    console.log(result)
    return result;
}



