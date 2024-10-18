import { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { assignmentID } = useParams();
  const assignment = db.assignments.find(a => a._id === assignmentID);
  const [submissionType, setSubmissionType] = useState("online");

  const cid = assignment ? assignment.course : null;

  
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
          defaultValue={assignment.title}
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
            defaultValue={assignment.points}
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
              defaultValue="Everyone"
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
                  defaultValue={assignment.dueDate}
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
                defaultValue={assignment.availableFrom}
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
        <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary me-2">Cancel</Link>
        <Link to={`/courses/${cid}/assignments`} className="btn btn-success">Save</Link>
      </div>
    </div>
  );
}