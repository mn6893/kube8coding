import { useState, useEffect } from "react";

const empty = { firstName: "", email: "", mobileNo: "", address: "" };

export default function UserForm({ initial = empty, onSave, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => setForm(initial.id ? initial : empty), [initial]);

  const change = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={submit} className="border p-3 bg-light rounded">
      <div className="row g-2">
        <Input label="First name" name="firstName" value={form.firstName} onChange={change} />
        <Input label="Email"      name="email"     type="email" value={form.email} onChange={change} />
        <Input label="Mobile No"  name="mobileNo"  value={form.mobileNo} onChange={change} />
        <Input label="Address"    name="address"   value={form.address} onChange={change} />
      </div>

      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save</button>
        <button className="btn btn-secondary" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div className="col-md-6">
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        required
        {...{ name, type, value, onChange }}
      />
    </div>
  );
}
