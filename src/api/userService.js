/* Generic REST helpers for /users */
const PROD_IP = "192.168.1.191";
const LOCAL_IP = "localhost";
const USERS_API = `http://${PROD_IP}:8080/users`;
const USER_API = `http://${PROD_IP}:8080/user`;

export const listUsers = async () => {
  const r = await fetch(USERS_API);
  if (!r.ok) throw new Error("List failed");
  return r.json();
};

export const createUser = async data => {
  const r = await fetch(USER_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error("Create failed");
  return r.json();
};

export const updateUser = async (data) => {
  const r = await fetch(`${USER_API}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!r.ok) throw new Error("Update failed");
  return r.json();
};

export const deleteUser = async id => {
  const r = await fetch(`${USER_API}/${id}`, { method: "DELETE" });
  if (!r.ok) throw new Error("Delete failed");
};