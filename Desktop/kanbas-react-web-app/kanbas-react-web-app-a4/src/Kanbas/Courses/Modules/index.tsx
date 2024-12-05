import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import React, { useState } from "react";

export default function Modules() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);

  const handleAddModule = () => {
    dispatch(addModule({ name: moduleName, course: cid }));
    setModuleName("");
  };

  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAddModule}
      />
      <br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  <span>{module.name}</span>
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    defaultValue={module.name}
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => dispatch(deleteModule(module._id))}
                  editModule={() => dispatch(editModule(module._id))}
                />
              </div>

              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}

            </li>
          ))}
      </ul>
    </div>
  );
}
