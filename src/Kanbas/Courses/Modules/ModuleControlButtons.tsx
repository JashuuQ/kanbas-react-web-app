import { FaPlus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">

      <button className="btn btn-light btn-sm me-2" title="Module Complete">
        <FaCheckCircle style={{ color: "green" }} />
      </button>

      <button className="btn btn-light btn-sm me-2" title="Add Lesson">
        <FaPlus />
      </button>
      
      <button className="btn btn-light btn-sm" title="More Options">
        <BsThreeDotsVertical />
      </button>

    </div>
      
  );
}

