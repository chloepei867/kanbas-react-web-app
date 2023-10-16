import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaBook } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="row wd-course-assignment">
      <div class="col-6">
        <input type="text" className="form-control" placeholder="Search for Assignment"/>
      </div>
      <div class="col-6">
        <div class="float-end">
          <button class="btn btn-secondary float-end">
              <LiaEllipsisVSolid/>
          </button>
          <button class="btn btn-danger float-end">
              <AiOutlinePlus/>
              Assignment</button>
          <button class="btn btn-secondary float-end">
              <AiOutlinePlus/>
              Group</button>
        </div>
      </div>
      <div className="list-group wd-assignment-item">
        <h2>ASSIGNMENTS</h2>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
              <div>

            <FaBook className="wd-course-assignment-icon"/>
              {assignment.title} 
              <IoIosCheckmarkCircle className="wd-course-assignment-icon float-end"/>
              <LiaEllipsisVSolid className="wd-course-assignment-icon-ellipsis float-end"/>
              </div>
          </Link>
        ))} 
      </div>
    </div>
     
  );
}

export default Assignments;


