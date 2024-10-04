import { Link } from "react-router-dom";
import './AccountStyles.css';
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="me-5">
        <Link to={`/Kanbas/Account/Signin`} className="nav-link active text-dark fs-5"> Signin </Link> 
        <Link to={`/Kanbas/Account/Signup`} className="nav-link text-danger fs-5"> Signup </Link> 
        <Link to={`/Kanbas/Account/Profile`} className="nav-link text-danger fs-5"> Profile </Link> 
      </div>
);}
