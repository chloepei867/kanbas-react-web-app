import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";
import "./index.css";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = (module) => {
    client.updateModule(module).then((status) => {
      dispatch(updateModule(module));
    });
  };

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = () => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter((module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // };

  if (courseId === "") {
    courseId = "RS101";
  }
  // const modules = db.modules;
  return (
    <div className="list-group list-group-flush">
      <div className="mb-3">
        <li className="list-group-item">
          <h5>New Module</h5>
          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>
        <button
          className="btn btn-success float-end mt-1"
          onClick={handleAddModule}
        >
          Add
        </button>
        <button
          className="btn btn-primary float-end"
          onClick={() => handleUpdateModule(module)}
        >
          Update
        </button>
      </div>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index} className="wd-module-item">
            <div className="wd-module-item-name">{module.name}</div>
            <div className="wd-module-item-description">
              {module.description}
            </div>
            <button
              className="btn btn-primary float-end"
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>
            <button
              className="btn btn-danger float-end"
              onClick={() => handleDeleteModule(module._id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
export default ModuleList;
