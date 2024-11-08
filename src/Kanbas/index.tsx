import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import * as db from "./Database";
import { useState } from "react";
import "./styles.css";
import Account from "./Account";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course Name",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/courses/cs0000.jpg",
    description: "New Description"
  });

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };

  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard" element={
            <ProtectedRoute>
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            </ProtectedRoute>
          } />
          
          <Route path="Courses/:cid/*" element={
            <ProtectedRoute>
              <Courses courses={courses} />
            </ProtectedRoute>
          } />
          
          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
  );
}
