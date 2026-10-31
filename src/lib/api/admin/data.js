import { serverFetch } from "../server";

export const FetchAllUsers = async () => {
  const result = await serverFetch("/api/admin/users");
  console.log(result);
  return result;
};


export const FetchPnadingEvents = async () => {
  const result = await serverFetch("/api/admin/events/pending-events");
  console.log(result);
  return result;
};