import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import './AccountStyles.css';

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();

  const links = currentUser
    ? [
      { name: "Profile", path: "/Kanbas/Account/Profile" },
      { name: "Users", path: "/Kanbas/Account/User" },
    ]
    : [
        { name: "Signin", path: "/Kanbas/Account/Signin" },
        { name: "Signup", path: "/Kanbas/Account/Signup" }
      ];

  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const active = (path: string) => (pathname.includes(path) ? "active" : "");
        
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kanbas/Account/Users`} 
          className={`list-group-item ${active("Users")}`}> Users </Link> )}
   
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`list-group-item border-0 ${active}`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
