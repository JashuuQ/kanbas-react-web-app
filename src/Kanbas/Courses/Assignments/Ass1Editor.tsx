import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, assignmentID } = useParams();
  const assignment = db.assignments.find(a => a._id === assignmentID);

  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [submissionType, setSubmissionType] = useState("online");

  // Function to convert "May 20 at 11:59pm" to "yyyy-MM-ddTHH:mm"
  function formatDateToDateTimeLocal(dateString: string) {
    const [monthDayPart, timePart] = dateString.split(" at ");
    if (!monthDayPart || !timePart) return "";
    
    const date = new Date(`${monthDayPart} ${new Date().getFullYear()} ${timePart}`);
    
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = (`0${date.getMonth() + 1}`).slice(-2);
      const day = (`0${date.getDate()}`).slice(-2);
      const hours = (`0${date.getHours()}`).slice(-2);
      const minutes = (`0${date.getMinutes()}`).slice(-2);
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
    return "";
  }

  // Set the dates after assignment is loaded
  useEffect(() => {
    if (assignment) {
      setDueDate(formatDateToDateTimeLocal(assignment.dueDate));
      setAvailableFrom(formatDateToDateTimeLocal(assignment.availableFrom));
    }
  }, [assignment]);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }


  return (
    <div className="container mt-5">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
        <input 
          type="text" 
          id="assignmentName" 
          className="form-control" 
          value={assignment.title}
          readOnly
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <div className="border p-3">
          <p>{assignment.description}</p>
        </div>
      </div>

      {/* Points */}
      <div className="row mb-3">
        <label htmlFor="points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            id="points"
            className="form-control"
            value={assignment.points}
            readOnly
          />
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-3">
        <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select id="assignmentGroup" className="form-select">
            <option value="ASSIGNMENTS1">ASSIGNMENTS1</option>
            <option value="ASSIGNMENTS2">ASSIGNMENTS2</option>
            <option value="ASSIGNMENTS3">ASSIGNMENTS3</option>
          </select>
        </div>
      </div>

      {/* Display Grade */}
      <div className="row mb-3">
        <label htmlFor="displayGrade" className="col-sm-2 col-form-label text-end">
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select id="displayGrade" className="form-select">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-3">
        <label htmlFor="submissionType" className="col-sm-2 col-form-label text-end">
          Submission Type
        </label>
        <div className="col-sm-10">
          <select
            id="submissionType"
            className="form-select"
            value={submissionType}
            onChange={(e) => setSubmissionType(e.target.value)}
          >
            <option value="online">Online</option>
            <option value="on-paper">On Paper</option>
          </select>

          {/* Online Entry Options */}
          {submissionType === "online" && (
            <div className="mt-3">
              <label className="form-label fs-5">Online Entry Options</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="textEntry" />
                <label className="form-check-label" htmlFor="textEntry">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="websiteUrl" />
                <label className="form-check-label" htmlFor="websiteUrl">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                <label className="form-check-label" htmlFor="mediaRecordings">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="fileUploads" />
                <label className="form-check-label" htmlFor="fileUploads">
                  File Uploads
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Assign Section */}
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label text-end">Assign</label>
        <div className="col-sm-10 fs-5">
          
          {/* Assign to */}
          <div className="mb-3">
            <label htmlFor="assignTo" className="col-sm-2 col-form-label">
              Assign to
            </label>
            <input 
              type="text"
              id="assignTo"
              className="form-control"
              value="Everyone"
            />
          </div>

          {/* Due Date */}        
          <div className="mb-3">
            <label htmlFor="wd-due-date">Due</label><br />
            <div className="col-sm-10 text-end">
                <input
                  type="datetime-local"
                  id="dueDate"
                  className="form-control"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}  // change the format
                />
            </div>
          </div>
        
          {/* Available from and Until */}
          <div className="row mb-3">
            <div className="col-sm-6 fs-5">
              <label htmlFor="availableFrom" className="form-label">Available from</label>
              <input
                type="datetime-local"
                id="availableFrom"
                className="form-control"
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)} // change the format
              />
            </div>

            <div className="col-sm-6">
              <label htmlFor="availableUntil" className="form-label">Until</label>
              <input
                type="datetime-local"
                id="availableUntil"
                className="form-control"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-success">Save</Link>
      </div>
    </div>
  );
}