import React, { useState, useContext, useEffect } from "react";
import { myContext } from "../../App";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  const { loginData, setLoginData } = useContext(myContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (loginData) {
      setUser({
        name: loginData.displayName || "",
        email: loginData.email || "",
        phone: loginData.phoneNumber || "",
        photo: loginData.photoURL || "",
        DOB: loginData.DOB || "",
      });
    }
  }, [loginData]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile updated!");
    setIsEditing(false);
    setLoginData({ ...loginData, ...user }); 
  };

  return (
    <div className="container mb-5 mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">My Profile</h2>
      <div className="mb-3">
        <label>
        <img src={user.photo} alt="" className="rounded-circle p-3"/>
        </label><br/>
        <label className="form-label">Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          value={user.name}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          type="email"
          className="form-control"
          value={user.email}
          onChange={handleChange}
          disabled
        />
        <small className="text-muted">Email cannot be changed</small>
      </div>

      <div className="mb-3">
        <label className="form-label">Phone</label>
        <input
          name="phone"
          type="text"
          className="form-control"
          value={user.phoneNumber}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">DOB</label>
        <input
          name="DOB"
          type="date"
          className="form-control"
          value={user.DOB}
          onChange={handleChange}
          disabled={!isEditing}
        />
      </div>

      {!isEditing ? (
        <button
          className="btn btn-primary"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </button>
      ) : (
        <>
          <button className="btn btn-success me-2" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setIsEditing(false);
              setUser({
                name: loginData.displayName || "",
                email: loginData.email || "",
                phone: loginData.phoneNumber || "",
              });
            }}
          >
            Cancel
          </button>
        </>
      )}
    </div>
  );
}
