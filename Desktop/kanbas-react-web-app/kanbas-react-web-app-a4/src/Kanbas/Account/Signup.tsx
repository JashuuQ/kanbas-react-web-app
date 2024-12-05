import { Link } from "react-router-dom";
import './AccountStyles.css';

export default function Signup() {
  return (
    <div className="container mt-5" id="wd-signup-screen">
      <h1>Sign up</h1>

      {/* Input */}
      <div className="mb-3">
        <input className="form-control" placeholder="username" />
      </div>
      <div className="mb-3">
        <input className="form-control" placeholder="password" type="password" />
      </div>
      
      {/*Button */}
      <div className="d-grid gap-2">
        <Link to="/Kanbas/Account/Profile" className="btn btn-primary"> Sign up </Link>
      </div>

      {/* Sign in*/}
      <div className="mt-3">
        <span>Already have an account? </span>
        <Link to="/Kanbas/Account/Signin" className="text-primary">Sign in</Link>
      </div>
    </div>
  );
}
