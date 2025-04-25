import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as api from "./api/userService";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(null);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api.listUsers()
      .then(setUsers)
      .catch(e => setError(e.message))
      .finally(() => setBusy(false));
  }, []);

  const save = async data => {
    try {
      const saved = data.id
        ? await api.updateUser(data)
        : await api.createUser(data);
      setUsers(u =>
        data.id ? u.map(x => (x.id === data.id ? saved : x)) : [...u, saved]
      );
    } catch (e) {
      setError(e.message);
    } finally {
      setEditing(null);
    }
  };

  const remove = async id => {
    if (!window.confirm("Delete this contact?")) return;
    try {
      await api.deleteUser(id);
      setUsers(u => u.filter(x => x.id !== id));
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Contacts</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      {editing ? (
        <UserForm
          initial={editing}
          onSave={save}
          onCancel={() => setEditing(null)}
        />
      ) : (
        <button className="btn btn-success mb-3" onClick={() => setEditing({})}>
          + Add Contact
        </button>
      )}

      {busy
        ? <div className="text-center p-4">Loading…</div>
        : <UserTable users={users} onEdit={setEditing} onDelete={remove} />}
    </div>
  );
}
