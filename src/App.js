import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Admin from './pages/admin/Admin';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import ViewGrades from './pages/student/view_grades/ViewGrades';
import GradingPage from './pages/teacher/grading_page/GradingPage';

function App() {
  // TODO: Need to have a login function
  // const [token, setToken] = useState();

  // if(!token){
    // return <Login setToken={setToken}/>
  // }
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/student/viewgrades" element={<ViewGrades/>}/>
          <Route path="/teacher/grading-page" element={<GradingPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
