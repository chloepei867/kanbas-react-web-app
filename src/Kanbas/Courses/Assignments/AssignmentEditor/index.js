import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="row">
        <div>
      <h3><label for="assignmentName">Assignment Name</label> <br /></h3>
      <input value={assignment.title}
             className="form-control mb-2" />
        </div>
      <div class="mb-3">
                            <textarea class="form-control" name="" id="" cols="30" rows="6">This assignment describes how to install the development environment for creating and working with Web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
                            </textarea>
                        </div>
                        <div>
                            <div class="row mb-3">
                                <div class="col-2 text-end">
                                    Points
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" value="100"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-2 text-end">
                                    Assignment Group
                                </div>
                                <div class="col">
                                    <select class="form-select" name="" id="assignment-group">
                                        <option value="">ASSIGNMENTS</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-2 text-end">
                                    Display Grade as
                                </div>
                                <div class="col">
                                    <select class="form-select" name="" id="assignment-group">
                                        <option value="">Percentage</option>
                                    </select>
                                    <div class="mt-3">
                                        <input type="checkbox" id="scales" name="scales" checked />
                                        <label for="scales">Do not count this assignment towards the final grade</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-2 text-end">
                                    Submission Type
                                </div>
                                <div class="col">
                                    <div>
                                        <select class="form-select" name="" id="submission-type">
                                            <option value="">Online</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3>Online Entry Options</h3>
                                        <div class="mb-3">
                                            <input type="checkbox" value="text entry" name="entry-options"
                                                id="text-entry" />
                                            <label for="text-entry">Text Entry</label> <br />

                                            <input type="checkbox" value="website url" name="entry-options"
                                                id="website-url" />
                                            <label for="website-url">Website URL</label> <br />

                                            <input type="checkbox" value="website url" name="entry-options"
                                                id="media-recordings" />
                                            <label for="media-recordings">Media Recordings</label> <br />

                                            <input type="checkbox" value="student annotation" name="entry-options"
                                                id="student-annotation" />
                                            <label for="website-url">Student Annotation</label> <br />

                                            <input type="checkbox" value="file-uploads" name="entry-options"
                                                id="file-uploads" />
                                            <label for="chkbox-fantasy">File Uploads</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-2 text-end">
                                    Assign
                                </div>
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="">Assign to</label> <br/>
                                        <input class="form-control" type="text" value="Everyone"/><br/>
                                        <br/>

                                        <label for="due-date">Due</label><br/>
                                        <input class="form-control" id="due-date" type="date" value="2020-09-16"
                                            min="2020-09-04" max="2020-09-23" />

                                        <div class="row">
                                            <div class="col-6">
                                                <label for="available-date">Available from</label><br/>
                                                <input class="form-control" id="due-date" type="date" value="2020-09-16"
                                                    min="2020-09-04" max="2020-09-23" />
                                            </div>
                                            <div class="col-6">
                                                <label for="until-date">Until</label><br/>
                                                <input class="form-control" id="until-date" type="date"
                                                    value="2020-09-16" min="2020-09-04" max="2020-09-23" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
        <div>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2 float-end">
        Save
      </button>
      </div>
    </div>
  );
}


export default AssignmentEditor;