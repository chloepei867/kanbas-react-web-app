import db from "../../Database";
import { useParams } from "react-router-dom";
import { LiaFileImportSolid, LiaFileExportSolid } from "react-icons/lia";
import { BiSolidCog } from "react-icons/bi";
import { BsFunnel } from "react-icons/bs";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="row">
        <div class="row">
          <div class="col">
            <div class="float-end">
                <button class="btn btn-secondary float-end mx-1">
                    <BiSolidCog className="wd-grade-icon"/>
                </button>
                <button class="btn btn-secondary float-end mx-1">
                    <LiaFileExportSolid className="wd-grade-icon"/>
                    Export
                </button>
                <button class="btn btn-secondary float-end mx-1">
                    <LiaFileImportSolid className="wd-grade-icon"/>
                    Import</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
              <div class="mb-3">
                  <label for="student-name" class="form-label fw-bold">Student Names</label>
                  <input type="text" class="form-control" id="student-name" placeholder="Search students"/>
              </div>
          </div>
          <div class="col mb-3">
              <label for="assignment-name" class="form-label fw-bold">Assignment Names</label>
              <input type="text" class="form-control" id="assignment-name"
                  placeholder="Search Assignments"/>
          </div>

        </div>
        <div class="row">
          <div class="col">
              <button class="btn btn-secondary mb-3">
                  <BsFunnel/>
                  Apply Filters</button>
          </div>
      </div>
      <div className="row table-responsive">
        <div className="col">
        <table className="table table-striped">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user.firstName} {user.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
           </tbody>
        </table>
        </div>
      </div>
    </div>
      );
}
export default Grades;

