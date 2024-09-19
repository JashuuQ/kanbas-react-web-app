import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="CS 5610">
          <img src="/images/courses/cs5610.jpg" width={300} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5610/Home">
              CS 5610
            </Link>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <Link to="/Kanbas/Courses/5610/Home"> Go </Link>
          </div>
        </div>

        <div className="CS 5200">
          <img src="/images/courses/cs5200.jpg" width={300} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5200/Home">
              CS 5200
            </Link>
            <p className="wd-dashboard-course-title">
              Database Management Systems
            </p>
            <Link to="/Kanbas/Courses/5200/Home"> Go </Link>
          </div>
        </div>

        <div className="CS 5800">
          <img src="/images/courses/cs5800.jpg" width={300} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5800/Home">
              CS 5800
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithms
            </p>
            <Link to="/Kanbas/Courses/5800/Home"> Go </Link>
          </div>
        </div>

        <div className="CS 5001">
          <img src="/images/courses/cs5001.jpg" width={300} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5001/Home">
              CS 5001
            </Link>
            <p className="wd-dashboard-course-title">
              Intensive Foundations of Computer Science
            </p>
            <Link to="/Kanbas/Courses/5001/Home"> Go </Link>
          </div>
        </div>

        <div className="CS 5002">
          <img src="/images/courses/cs5002.jpg" width={300} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5002/Home">
              CS 5002
            </Link>
            <p className="wd-dashboard-course-title">
              Discrete Structures
            </p>
            <Link to="/Kanbas/Courses/5002/Home"> Go </Link>
          </div>
        </div>

        <div className="CS 5004">
          <img src="/images/courses/cs5004.jpg" width={300} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5004/Home">
              CS 5004
            </Link>
            <p className="wd-dashboard-course-title">
              Object-Oriented Design
            </p>
            <Link to="/Kanbas/Courses/5004/Home"> Go </Link>
          </div>
        </div>


        <div className="CS 5008">
          <img src="/images/courses/cs5008.jpg" width={300} />
          <div>
            <Link className="wd-dashboard-course-link"
              to="/Kanbas/Courses/5008/Home">
              CS 5008
            </Link>
            <p className="wd-dashboard-course-title">
              Data Structures, Algorithms, and Their Applications within Computer Systems
            </p>
            <Link to="/Kanbas/Courses/5008/Home"> Go </Link>
          </div>
        </div>

        







      </div>
    </div>
  );
}
