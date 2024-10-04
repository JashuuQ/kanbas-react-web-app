import { BiSearch } from "react-icons/bi";
import { MdAddCircleOutline } from "react-icons/md";

export default function AssignmentsControls() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="position-relative" style={{ width: "300px" }}>
        {/* Search */}
        <input
            type="text"
            placeholder="Search for Assignments..."
            className="form-control"
            style={{ paddingLeft: "2rem" }}
        />
        <span
            className="position-absolute"
            style={{
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#999",
            }}
        >
            <BiSearch />
        </span>
        </div>
        
        {/* Add Group & Assignment */}
        <div className="d-flex">
        <button className="btn btn-secondary me-2">
            <MdAddCircleOutline /> Group
        </button>
        <button className="btn btn-danger">
            <MdAddCircleOutline /> Assignment
        </button>
        </div>
    </div>
  );
}
