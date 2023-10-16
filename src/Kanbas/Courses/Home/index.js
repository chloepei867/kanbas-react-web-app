import ModuleList from "../Modules/ModuleList";
import Status from "./Status";
import "./index.css";

function Home() {
    return (
      <div className="row">
        <div className="col-9">
          <div className="row">
            <div className="col">
              <div class="float-end">
                <button class="btn btn-secondary">Collapse All</button>
                <button class="btn btn-secondary">View Progress</button>
                <div class="dropdown wd-course-home-dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Publish All
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button class="btn btn-danger">
                    Module</button>
              </div>
            </div> 
          </div>
          <hr/>
        <ModuleList />
        </div>
        <div className="col-3">
        <Status/>
        </div> 
      </div>
    );
  }
  export default Home;
  