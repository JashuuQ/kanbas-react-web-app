import React from 'react';
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = 
        assignments.filter(assignment => assignment.course === cid);

  return (
    <div className="container">
      <br />
      <AssignmentsControls />

      {/* Assignments */}
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-3 fs-5 border-gray">
          {/* Align content horizontally */}
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <strong className="fs-4">ASSIGNMENTS</strong>
            </div>
            <AssignmentControlButtons />
          </div>

          <ul className="wd-assignment-details list-group rounded-0">
            
            {courseAssignments.map(assignment => (
              <li
                key={assignment._id}
                className="wd-detail list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
                
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-3 fs-3" />        
                  <FaRegFileAlt className="me-4 text-success" />
                  <div>
                    <strong className="fs-4">
                      <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link>
                    </strong>
                    <div className="text-muted">
                      <span className="text-danger">Multiple Modules</span> | 
                      <span className="fw-bold"> Not available until</span> {assignment.availableFrom} |
                      <br />
                      <span className="fw-bold">Due</span> {assignment.dueDate} | {assignment.points} pts
                    </div>
                  </div>
                </div>

                <LessonControlButtons />
              </li>
            ))}
            </ul>
        </li>
      </ul>
    </div>
  );
}