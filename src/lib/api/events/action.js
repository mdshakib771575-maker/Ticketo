"use server"

import { serverMutation } from "../server"

export const addEvent = async (data)=>{
    console.log("data",data)
    const resData = await serverMutation("/api/add-event","POST",data);
    
    return resData; 
};

export const updateEvent = async (data,id)=>{
    const resData = await serverMutation(`api/manage-event-update/${id}`,"PATCH",data);
    
    return resData; 
}

export const DeleteEvent = async (id) => {
  return await serverMutation(`/api/manage-event-delete/${id}`, "DELETE");
};
