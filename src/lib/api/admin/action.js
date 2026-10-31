import { serverMutation } from "../server";

export const DeleteUser = async (id) => {
  const result = await serverMutation(
    `/api/admin/users/${id}`,
    "DELETE"
  );

  return result;
};