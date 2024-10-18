import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "270px" }}>
              <div className="card">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses//${course._id}/Home">
                  <img src={course.image} className="card-img-top" alt="CS 5610" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}</p>
                    <button className="btn btn-primary">Go</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {/* Course 1 */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5610/Home">
                <img src="/images/courses/cs5610.jpg" className="card-img-top" alt="CS 5610" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS 5610</h5>
                  <p className="card-text">Database Management Systems</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          

          {/* Course 2 */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5200/Home">
                <img src="/images/courses/cs5200.jpg" className="card-img-top" alt="CS 5200" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS 5200</h5>
                  <p className="card-text">Database Management Systems</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5800/Home">
                <img src="/images/courses/cs5800.jpg" className="card-img-top" alt="CS 5800" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS 5800</h5>
                  <p className="card-text">Data Structures and Algorithms</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home">
                <img src="/images/courses/cs5001.jpg" className="card-img-top" alt="CS 5001" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS 5001</h5>
                  <p className="card-text">Intensive Foundations of Computer Science</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home">
                <img src="/images/courses/cs5002.jpg" className="card-img-top" alt="CS 5002" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS 5002</h5>
                  <p className="card-text">Discrete Structures</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>


          {/* Course 6 */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home">
                <img src="/images/courses/cs5004.jpg" className="card-img-top" alt="CS 5004" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS 5004</h5>
                  <p className="card-text">Object-Oriented Design</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>


          {/* Course 7 */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/5001/Home">
                <img src="/images/courses/cs5008.jpg" className="card-img-top" alt="CS 5008" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS 5008</h5>
                  <p className="card-text">
                    Data Structures, Algorithms, and Their Applications within Computer Systems</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
          







        </div>
      </div>
    </div>
  );
}