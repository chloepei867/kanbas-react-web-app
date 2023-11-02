import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FaBook } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignments,
} from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const dispatch = useDispatch();
  return (
    <div className="row wd-course-assignment">
      <div class="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search for Assignment"
        />
      </div>
      <div class="col-6">
        <div class="float-end">
          <button class="btn btn-secondary float-end">
            <LiaEllipsisVSolid />
          </button>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`}
            class="btn btn-danger float-end"
          >
            <AiOutlinePlus />
            Assignment
          </Link>

          <button class="btn btn-secondary float-end">
            <AiOutlinePlus />
            Group
          </button>
        </div>
      </div>
      <div className="list-group wd-assignment-item">
        <h2>ASSIGNMENTS</h2>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <div>
              <FaBook className="wd-course-assignment-icon" />
              {assignment.title}

              <IoIosCheckmarkCircle className="wd-course-assignment-icon float-end" />
              <LiaEllipsisVSolid className="wd-course-assignment-icon-ellipsis float-end" />
            </div>
          </Link>
          /* <button
              className="btn btn-danger float-end"
              onClick={() => dispatch(deleteAssignment(assignment._id))}
            >
              Delete
            </button> */
        ))}
      </div>
    </div>
  );
}

export default Assignments;
