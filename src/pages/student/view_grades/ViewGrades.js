import {Component} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Grid, Paper } from '@mui/material';

import Sidenav from '../../components/sidenav/Sidenav';

import '../../../resources/css/Design.css';
import '../../../resources/css/style.css';
import '../../../resources/css/dash-design.css';

class ViewGrades extends Component {
  constructor(props) {
    super (props);
  }
  render() {
    return(
    <div>
      <div className="sidebar close">
			<div className="logo-details">
				<i><img src="img/logo.png" height="45px;" width = "45px;"/></i>
				<span className="logo_name">BESTLINK GRADING SYSTEM</span>	
			</div>
			<ul className="nav-links">
				<li>
					<a href="index.html">
					<i className='bx bxs-dashboard'></i>
					<span className="link_name">Dashboard</span>
					</a>
				</li>
				<li>
					<a href="#">
					<i className='bx bxs-user-detail'></i>
					<span className="link_name">Stud. Highlights</span>
					</a>
				</li>
				<li>
					<div className="icon-link">
						<a href="#">
						<i className='bx bxs-data'></i>
						<span className="link_name">Grades</span>
						</a>
						<i className='bx bxs-chevron-down' ></i>
					</div>
					<ul className="sub-menu">
						<li><p className="link_name" href="#">Grade Per Year</p></li>
						<li><a href="course1.html">1st Year</a></li>
						<li><a href="course2.html">2nd Year</a></li>
						<li><a href="course3.html">3rd Year</a></li>
						<li><a href="course4.html">4th Year</a></li>
					</ul>
				</li>
				
				<li>
					<a href="login.html">
					<i className='bx bxs-log-out' ></i>
					<span className="link_name">Logout</span>
					</a>
				</li>
			</ul>
		</div>
		{/* <!-- homepage --> */}
		<section id="mhs" className="home-section">
			<nav>
    			<div className="sidebar-button">
      			<span className="dashboard">1st Year Subjects </span>
    			</div>
    			<div className="search-box">
      			<input type="text" placeholder="Search"/>
      				<i className='bx bx-search-alt-2' ></i>
    			</div>
    			<div className="profile-details">
					<i className='bx bxs-user' ></i>
  					<span className="admin-name"> <a href=""> My Profile</a> </span>
    			</div>
			</nav>
			<table id="customers">
  				<thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
              <th>Remarks</th>
            </tr>
          </thead>
  				<tbody>
          <tr>
    				<td>Math-tulog</td>
    				<td>1.25</td>
    				<td>Passed</td>
  				</tr>
  				<tr>
    				<td>Module-Legends</td>
    				<td>1</td>
    				<td>Passed</td>
  				</tr>
  				<tr>
    				<td>Java Rice</td>
    				<td>2.75</td>
    				<td>Passed</td>
  				</tr>
  				<tr>
    				<td>JAva Script</td>
    				<td>5</td>
    				<td>Failed</td>
  				</tr>
  				<tr>
    				<td>HTML</td>
    				<td>2</td>
    				<td>Passed</td>
  				</tr>
  				<tr>
    				<td>Cobra x Phyton</td>
    				<td>1.75</td>
    				<td>Passed</td>
  				</tr>
          </tbody>
			</table>
   		</section>
      </div>
    )
  }
}
export default ViewGrades;
