import { serverFetch } from "../server";

export const FetchAllUsers = async () => {
  const result = await serverFetch("/api/admin/users");
  console.log(result);
  return result;
};