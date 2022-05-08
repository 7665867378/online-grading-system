import {Component} from 'react'
import '../../../resources/css/Design.css';
import logo from '../../../resources/img/logo.png'; 
import { Link } from 'react-router-dom';

class Sidenav extends Component{

    render(){
        return(
            <div>
                <div className="sidebar">
                    <div className="logo-details">
                        <img src={logo} className="bcplogo"  alt="bcp-logo"></img>
                        <span className="logo_name"> BCP Grading System </span>
                    </div>
                    {/* <!--code initiation for left  navigation bar-->
                </div>
                */}
                <ul className="nav-links">
                    <li>
                        <a href="">
                        <i className='bx bxs-dashboard'></i>
                        <span className="link_name"> Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-user-detail'></i>
                        <span className="link_name"> Student</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-edit-alt'></i>
                        <span className="link_name"> Student Highlight</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-food-menu'></i>
                        <span className="link_name"> Course</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-user-rectangle'></i>
                        <span className="link_name"> Teacher</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-book-content'></i>
                        <span className="link_name"> Subject</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                        <i className='bx bxs-notepad'></i>
                        <span className="link_name">Grading Scale</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/login">
                        <i className='bx bxs-log-out-circle'></i>
                        <span className="link_name">Log out</span>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        );
    }

}
export default Sidenav;