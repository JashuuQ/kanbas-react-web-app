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
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    image: "/images/courses/cs0000.jpg",
    description: ""
  });

  const resetCourse = () => {
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      image: "/images/courses/cs0000.jpg",
      description: ""
    });
  };

  const validateCourse = (course: any) => {
    if (!course.name.trim() || !course.description.trim()) {
      alert("Name and description cannot be empty.");
      return false;
    }
    return true;
  };
  
  const addNewCourse = () => {
    if (!validateCourse(course)) return;
  
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(),
    };
  
    setCourses([...courses, newCourse]);
    resetCourse();
  };

  const deleteCourse = (courseId: string) => {
    if (!window.confirm("Are you sure you want to delete the course?")) return;
    setCourses(courses.filter((course) => course._id !== courseId));
      if (course._id === courseId) {
      resetCourse();
    }
  };
  
  const updateCourse = () => {
    if (!course.name) {
      alert("Please select the course you want to edit.");
      return;
    }
    if (!validateCourse(course)) return;
    setCourses(
      courses.map((c) => (c.name === course.name ? course : c))
    );
    resetCourse();
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
