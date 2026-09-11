import { serverFetch } from "../server"

export const myOrganizetion = async (email)=>{
    // console.log(email)
    const result = await serverFetch(`/api/organization/${email}`);
    console.log(result)
    return result;
}

