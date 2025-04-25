export default function UserTable({ users, onEdit, onDelete }) {
    if (!users.length)
      return <div className="alert alert-info">No contacts yet.</div>;
  
    return (
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th>#</th><th>Name</th><th>Email</th><th>Mobile</th><th>Address</th>
            <th style={{ width: 120 }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id ?? i}>
              <td>{i + 1}</td>
              <td>{u.firstName}</td>
              <td>{u.email}</td>
              <td>{u.mobileNo}</td>
              <td>{u.address}</td>
              <td>
                <button className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => onEdit(u)}>Edit</button>
                <button className="btn btn-sm btn-outline-danger"
                        onClick={() => onDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  