import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" 
         className="
              list-group rounded-0 position-fixed 
              bottom-0 top-0 d-none d-md-block bg-black z-2" 
         style={{ width: 120 }}>

      {/* NU Logo */}
      <a id="wd-neu-link" target="_blank" 
         href="https://www.northeastern.edu/" 
         className="list-group-item bg-black border-0 text-center">
        <img src="/images/NU.png" alt="NEU" width="75px" />
      </a>
      <br />

      {/* Account */}
      <Link to="/Kanbas/Account" 
        className="list-group-item text-white bg-black text-center border-0">
        <FaRegCircleUser className="fs-1 text-white" /><br />
        Account
      </Link>
      <br />

      {/* Dashboard */}
      <Link to="/Kanbas/Dashboard" 
        className="list-group-item text-center border-0 bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard
      </Link>
      <br />

      {/* Courses */}
      <Link to="/Kanbas/Courses" 
        className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses
      </Link>
      <br />

      {/* Calendar */}
      <Link to="/Kanbas/Calendar" 
        className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Calendar
      </Link>
      <br />

      {/* Inbox */}
      <Link to="/Kanbas/Inbox" 
        className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Inbox
      </Link>
      <br />

      {/* Labs */}
      <Link to="/Labs" 
        className="list-group-item text-white bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Labs
      </Link>
      <br />
     
    </div>
  );
}


