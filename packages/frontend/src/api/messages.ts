// api/users.ts
import { API } from "aws-amplify";

export const fetchMessages = async () => {
  return API.get("connections", "/messages", {});
};
