import Assignment3 from "./a3";
import JavaScript from "./a3/JavaScript";
import {Link} from "react-router-dom";
import Nav from "../Nav";

function Labs() {
    return (
        <div className="container">
            <Nav/>
            <Assignment3 />
            {/* <JavaScript /> */}
            {/* <h1>Assignment 3</h1> */}
        </div >
    );
}
export default Labs;