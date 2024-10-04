import { FaPlus, FaEdit, FaTrash } from "react-icons/fa"; 

export default function ModuleControlButtons() {
  return (
    <div className="float-end">

      {/* Add */}
      <button className="btn btn-light btn-sm me-2" title="Add Lesson">
        <FaPlus />
      </button>
      
      {/* Edit */}
      <button className="btn btn-light btn-sm me-2" title="Edit Module">
        <FaEdit />
      </button>
      
      {/* Delete */}
      <button className="btn btn-light btn-sm" title="Delete Module">
        <FaTrash />
      </button>
    </div>
  );
}
