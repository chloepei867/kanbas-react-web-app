import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";


function ModuleList() {
  const { courseId } = useParams();
  if (courseId === "") {
    courseId = "RS101"
  }
  const modules = db.modules;
  return (
    <div className="list-group list-group-flush">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <div key={index} className="wd-module-item">
             <div className="wd-module-item-name">{module.name}</div>
             <div className="wd-module-item-description">{module.description}</div>
           </div>
      ))
      }
    </div>
  );
}
export default ModuleList;