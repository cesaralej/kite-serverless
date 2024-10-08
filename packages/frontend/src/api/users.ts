// api/users.ts
import { API } from "aws-amplify";

export const loadUsers = async () => {
  return API.get("connections", "/connections", {});
};
