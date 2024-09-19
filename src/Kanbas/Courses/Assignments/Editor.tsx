export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        {/* Assignment Name */}
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />

        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>

            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          {/* Complete on your own */}

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
              <option value="assignments">ASSIGNMENTS1</option>
              <option value="assignments">ASSIGNMENTS2</option>
              <option value="assignments">ASSIGNMENTS3</option>
              {/* Other groups can be added here */}
            </select>
          </td>
        </tr>


          {/* Display Grade */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
                {/* Other grade display options */}
              </select>
            </td>
          </tr>

  
          {/* Submission Type */}
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="on-paper">On Paper</option>
                <option value="no-submission">No Submission</option>
              </select>
            </td>
          </tr>
        </table>


          
          
        {/* Online Entry Options */}
        <fieldset>
          <legend>Online Entry Options</legend>
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="text-entry">Text Entry</label><br />
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="website-url">Website URL</label><br />
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="media-recordings">Media Recordings</label><br />
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="student-annotation">Student Annotation</label><br />
          <input type="checkbox" id="wd-file-upload" />
          <label htmlFor="file-uploads">File Uploads</label><br />
        </fieldset>

        {/* Assign To */}
        <label htmlFor="wd-assign-to">Assign to</label><br />
        <input id="wd-assign-to" value="Everyone" /><br /><br />

        {/* Due Date */}
        <label htmlFor="wd-due-date">Due</label><br />
        <input id="wd-due-date" type="date" value="2024-05-13" /><br /><br />

        {/* Available from and Until */}
        <label htmlFor="wd-available-from">Available from</label>
        <input id="wd-available-from" type="date" value="2024-05-06" /> 
        <label htmlFor="wd-available-until">Until</label>
        <input id="wd-available-until" type="date" value="2024-05-20" /><br /><br />

        {/* Save and Cancel Buttons */}
        <button>Cancel</button>
        <button>Save</button>

      </div>
  );}
  