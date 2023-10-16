import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { BsFillInboxFill } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import "./index.css";


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox","History",
  "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon wd-icon-account" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsFillInboxFill className="wd-icon" />,
    History: <BiTimeFive className="wd-icon" />,
    Studio: <FaDesktop className="wd-icon" />,
    Commons: <BsFillArrowRightCircleFill className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
  };
  

  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation">
     <img className="wd-kanbas-navigation-logo" src="/images/neu_logo.png" alt=""/>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "wd-active"}`}>
          <div>{linkToIconMap[link]} </div>
          <div>{link}</div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;

