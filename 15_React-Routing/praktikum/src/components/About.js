import './Index.css';
import {Link} from "react-router-dom";

function About() {
  return (
    <>
    <div className="wrapper">
        <input type="checkbox" id="btn" hidden/>
        <label for="btn" className="menu-btn">
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
        </label>
        <nav id="sidebar">
            <ul className="list-items">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/about-app">About App</Link></li> 
                <li><Link to="/about/about-author">About Author</Link></li>  
            </ul>
        </nav>
    </div>

    <div className="content">
        <h1>About The App</h1>
        <p>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit.
            This app will persist your data in the browser local storage. So, whether you reload, close your app or reopened it, you still have access to your todos items.
        </p>
    </div>
    </>
  );
}

export default About;