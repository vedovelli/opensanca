import { http } from "./http";

export const fetchUsers = () => {
  return http.get("/api/users");
};
