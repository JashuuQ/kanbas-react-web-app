import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container mt-5" id="wd-profile-screen">
      <h1>Profile</h1>

      {/* Username */}
      <div className="mb-3">
        <input id="wd-username" className="form-control"
                value="alice" placeholder="Username" />
      </div>

      {/* Password */}
      <div className="mb-3">
        <input id="wd-password" className="form-control" 
                value="123" placeholder="Password" type="password" />
      </div>

      {/* First Name */}
      <div className="mb-3">
        <input id="wd-firstname" className="form-control" 
                value="Alice" placeholder="First Name" />
      </div>

      {/* Last Name */}
      <div className="mb-3">
        <input id="wd-lastname" className="form-control"
                value="Wonderland" placeholder="Last Name" />
      </div>

      {/* Date of Birth */}
      <div className="mb-3">
        <input id="wd-dob" className="form-control"
                value="2000-01-01" type="date" />
      </div>

      {/* Email */}
      <div className="mb-3">
        <input id="wd-email" className="form-control" 
                value="alice@wonderland.com" type="email" />
      </div>

      {/* Roles */}
      <div className="mb-3">
        <select id="wd-role" className="form-select">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>

      {/* Signout Button */}
      <div className="d-grid gap-2">
        <Link to="/Kanbas/Account/Signin" className="btn btn-danger">Signout</Link>
      </div>
    </div>
  );
}
