import "./index.css"
import { LiaFileImportSolid } from "react-icons/lia";
import { BsArrowDownLeftSquare } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { TbChartHistogram } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoIosNotificationsOutline } from "react-icons/io";


function Status() {
    return (
        <div className="wd-course-home-status">
                    <div className="col">
                        <div >Course Status</div>
                        <div className="d-flex">
                        <button className="btn btn-secondary">

                            Unpublish</button>
                        <button className="btn btn-success">
                            Published</button>
                        </div>
                        <div class="wd-course-home-status-button">
                            <button type="button" className="btn btn-secondary"><a href="#">
                                <LiaFileImportSolid className="wd-course-home-status-icon"/>
                                Import Existing Content</a></button>
                            <button type="button" className="btn btn-secondary"><a href="#">
                                <BsArrowDownLeftSquare className="wd-course-home-status-icon"/>
                                Import From Commons</a></button>
                            <button type="button" className="btn btn-secondary"><a href="#">
                                <BiTargetLock className="wd-course-home-status-icon"/>
                                Choose Home Page</a></button>
                            <button type="button" className="btn btn-secondary"><a href="#">
                                <TbChartHistogram className="wd-course-home-status-icon"/>
                                View Course Stream</a></button>
                            <button type="button" className="btn btn-secondary"><a href="#">
                                <TfiAnnouncement className="wd-course-home-status-icon"/>
                                New Announcement</a></button>
                            <button type="button" className="btn btn-secondary"><a href="#">
                                <TbChartHistogram className="wd-course-home-status-icon"/>
                                New Analvtics</a></button>
                            <button type="button" className="btn btn-secondary"><a href="#">
                                <IoIosNotificationsOutline className="wd-course-home-status-icon"/>
                                View Course Notifications</a></button>
                        </div>

                        <div>
                        Comming Up
                        <hr/>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item wd-course-home-status-link">
                                <i class="far fa-calendar-alt"></i>
                                <a class="wd-course-home-status-link" href="#">
                                    Lecture</a><br/>
                                CS4550.12631.202410 Sep 7 at
                                11:45am
                            </li>
                            <li class="list-group-item wd-course-home-status-link">
                                <i class="far fa-calendar-alt"></i>
                                <a href="#">Lecture </a><br/>
                                CS4550.12631.202410 Sep 11 at
                                11:45am
                            </li>
                            <li class="list-group-item wd-course-home-status-link">
                                <i class="far fa-calendar-alt"></i>
                                <a class="wd-course-home-status-link" href="#">CS5610 06 SP23 Lecture </a> <br/>
                                Sep 11 at 6pm
                            </li>
                        </ul>
                        </div>
                    </div>
        </div>
    )
};

export default Status;