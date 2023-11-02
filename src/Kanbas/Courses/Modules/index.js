import ModuleList from "./ModuleList";
import "./index.css";

function Modules() {
  return (
    <div className="row">
      <div className="col">
        <div class="float-end wd-course-module">
          <button class="btn btn-secondary ">Collapse All</button>
          <button class="btn btn-secondary">View Progress</button>
          <div class="dropdown wd-course-home-dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Publish All
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <button class="btn btn-danger"> + Module</button>
        </div>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;
