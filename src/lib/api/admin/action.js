import { serverMutation } from "../server";

export const DeleteUser = async (id) => {
  const result = await serverMutation(
    `/api/admin/users/${id}`,
    "DELETE"
  );

  return result;
};
export const AdminApproveEvent = async (id) => {
  const result = await serverMutation(
    `/api/admin/events/approve/${id}`,
    "PATCH"
  );

  return result;
};

export const AdminDeleteHostedEvetns = async (id) => {
  const result = await serverMutation(
    `/admin/events/reject/${id}`,
    "DELETE"
  );

  return result;
};