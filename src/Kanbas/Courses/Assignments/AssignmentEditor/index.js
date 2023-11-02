import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  //for edit mode
  const { assignmentId } = useParams();
  const assignmentOnEditMode = assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  //for add mode
  const assignmentOnAddMode = useSelector(
    (state) => state.assignmentsReducer.assignment
  );

  let isAddMode = false;
  if (assignmentId === "AssignmentEditor") {
    isAddMode = true;
  }

  const assignment = isAddMode ? assignmentOnAddMode : assignmentOnEditMode;

  const dispatch = useDispatch();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const routeChange = () => {
    let path = `/Kanbas/Courses/${courseId}/Assignments`;
    navigate(path);
  };

  return (
    <div className="row">
      <div>
        <h3>
          <label for="assignmentName">Assignment Name</label> <br />
        </h3>
        <input
          value={assignment.title}
          className="form-control mb-2"
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, title: e.target.value }))
          }
        />
      </div>
      <div class="mb-3">
        <textarea
          className="form-control"
          cols="30"
          rows="6"
          value={assignment.description}
          onChange={(e) =>
            dispatch(
              selectAssignment({ ...assignment, description: e.target.value })
            )
          }
        ></textarea>
      </div>
      <div>
        <div class="row mb-3">
          <div class="col-2 text-end">Points</div>
          <div class="col">
            <input
              type="text"
              className="form-control"
              value={assignment.points}
              onChange={(e) =>
                dispatch(
                  selectAssignment({
                    ...assignment,
                    points: e.target.value,
                  })
                )
              }
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2 text-end">Assignment Group</div>
          <div class="col">
            <select class="form-select" name="" id="assignment-group">
              <option value="">ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2 text-end">Display Grade as</div>
          <div class="col">
            <select class="form-select" name="" id="assignment-group">
              <option value="">Percentage</option>
            </select>
            <div class="mt-3">
              <input type="checkbox" id="scales" name="scales" checked />
              <label for="scales">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2 text-end">Submission Type</div>
          <div class="col">
            <div>
              <select class="form-select" name="" id="submission-type">
                <option value="">Online</option>
              </select>
            </div>
            <div>
              <h3>Online Entry Options</h3>
              <div class="mb-3">
                <input
                  type="checkbox"
                  value="text entry"
                  name="entry-options"
                  id="text-entry"
                />
                <label for="text-entry">Text Entry</label> <br />
                <input
                  type="checkbox"
                  value="website url"
                  name="entry-options"
                  id="website-url"
                />
                <label for="website-url">Website URL</label> <br />
                <input
                  type="checkbox"
                  value="website url"
                  name="entry-options"
                  id="media-recordings"
                />
                <label for="media-recordings">Media Recordings</label> <br />
                <input
                  type="checkbox"
                  value="student annotation"
                  name="entry-options"
                  id="student-annotation"
                />
                <label for="website-url">Student Annotation</label> <br />
                <input
                  type="checkbox"
                  value="file-uploads"
                  name="entry-options"
                  id="file-uploads"
                />
                <label for="chkbox-fantasy">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-2 text-end">Assign</div>
          <div class="col">
            <div class="mb-3">
              <label for="">Assign to</label> <br />
              <input class="form-control" type="text" value="Everyone" />
              <br />
              <br />
              <label for="due-date">Due</label>
              <br />
              <input
                className="form-control"
                value={assignment.dueDate}
                onChange={(e) =>
                  dispatch(
                    selectAssignment({
                      ...assignment,
                      dueDate: e.target.value,
                    })
                  )
                }
                id="due-date"
                type="date"
                //min="2020-09-04"
                //max="2020-09-23"
              />
              <div class="row">
                <div class="col-6">
                  <label for="available-date">Available from</label>
                  <br />
                  <input
                    className="form-control"
                    value={assignment.availableFromDate}
                    onChange={(e) =>
                      dispatch(
                        selectAssignment({
                          ...assignment,
                          availableFromDate: e.target.value,
                        })
                      )
                    }
                    id="due-date"
                    type="date"
                    //min="2020-09-04"
                    //max="2020-09-23"
                  />
                </div>
                <div class="col-6">
                  <label for="until-date">Until</label>
                  <br />
                  <input
                    className="form-control"
                    value={assignment.availableUntilDate}
                    onChange={(e) =>
                      dispatch(
                        selectAssignment({
                          ...assignment,
                          availableUntilDate: e.target.value,
                        })
                      )
                    }
                    id="until-date"
                    type="date"
                    //min="2020-09-04"
                    //max="2020-09-23"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger float-end"
        >
          Cancel
        </Link>
        <button
          onClick={() => {
            isAddMode &&
              dispatch(addAssignment({ ...assignment, course: courseId }));
            !isAddMode && dispatch(updateAssignment(assignment));
            routeChange();
          }}
          className="btn btn-success me-2 float-end"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
