import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import * as db from "./Database";

interface DashboardProps {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  // check the status of login
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  // filter the registered courses
  const userCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {/* Only user = FACULTY */}
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <hr />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <br />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({userCourses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {userCourses.map((course) => (
          <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to={`/Kanbas/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark"
              >
                <img
                  src={`/images/courses/${course._id}.jpg`}
                  alt="Course"
                  width="100%"
                  height={160}
                  onError={(e) => { e.currentTarget.src = "/images/courses/cs0000.jpg"; }}
                />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                  <p className="wd-dashboard-course-description card-text" style={{ maxHeight: 100 }}>
                    {course.description}
                  </p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
              
              {/* Only user = FACULTY */}
              {currentUser.role === "FACULTY" && (
                <div className="card-footer">
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    className="btn btn-danger float-end"
                    id="wd-delete-course-click"
                  >
                    Delete
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-warning me-2 float-end"
                    id="wd-edit-course-click"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
