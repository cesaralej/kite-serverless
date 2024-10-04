// api/users.ts
import { API } from "aws-amplify";

export const loadUsers = async () => {
  try {
    const users = await API.get("connections", "/connections", {});
    return users;
  } catch (error) {
    console.error("Error loading users:", error);
    return [];
  }
};
