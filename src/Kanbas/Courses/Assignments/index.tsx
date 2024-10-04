import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaRegFileAlt } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link } from "react-router-dom";

export default function Assignments() {
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
            {/* Assignment 1 */}
            <li className="wd-detail
                           list-group-item d-flex
                           justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />        
                <FaRegFileAlt className="me-4 text-success" />  {/* Icon: file */}
                <div>
                  <strong className="fs-4">
                    <Link to="./Ass1Editor">A1</Link>
                  </strong>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules </span> | 
                    <span className="fw-bold"> Not available until</span> May 6 at 12:00am | 
                    <br />
                    <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>

            {/* Assignment 2 */}
            <li className="wd-detail
                           list-group-item d-flex
                           justify-content-between
                           align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />        
                <FaRegFileAlt className="me-4 text-success" />  {/* Icon: file */}
                <div>
                  <strong className="fs-4">
                    <Link to="./Ass1Editor">A2</Link>    {/* Need to be polish */}
                  </strong>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules </span> | 
                    <span className="fw-bold"> Not available until</span> May 13 at 12:00am | 
                    <br />
                    <span className="fw-bold">Due</span> May 20 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>

            {/* Assignment 3 */}
            <li className="wd-detail
                           list-group-item d-flex
                           justify-content-between
                           align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-3 fs-3" />        
                <FaRegFileAlt className="me-4 text-success" />  {/* Icon: file */}
                <div>
                  <strong className="fs-4">
                    <Link to="./Ass1Editor">A3</Link>    {/* Need to be polish */}
                  </strong>
                  <div className="text-muted">
                    <span className="text-danger">Multiple Modules </span> | 
                    <span className="fw-bold"> Not available until</span> May 20 at 12:00am | 
                    <br />
                    <span className="fw-bold">Due</span> May 27 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>

          </ul>
        </li>
      </ul>
    </div>
  );
}
