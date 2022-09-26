import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Page404 from './components/Page404';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Dashhome from './pages/Dashhome';
import Register from './pages/Register';
import Addfaculty from './pages/Addfaculty';
import Addstudents from './pages/Addstudents';
import Applyleave from './pages/Applyleave';
import Preleaves from './pages/Preleaves';
import Uploaddata from './pages/Uploaddata';
import Action from './pages/Action';
import Event from './pages/Event';
import Medical from './pages/Medical';
import Documents from './pages/Documents';
// import Upload from './pages/Upload';
function App() {
  return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<Page404/>}/>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Dashboard" element={<Dashboard/>}>
                      <Route path="" element={<Dashhome />}/>
                      <Route path="addfaculty" element={<Addfaculty />}/>
                      <Route path="addstudents" element={<Addstudents />}/>
                      <Route path="applyleave" element={<Applyleave />}/>
                      <Route path="prevleave" element={<Preleaves />} />
                      <Route path="upload-data" element={<Uploaddata />}/>
                      <Route path="action" element={<Action />}/>
                      <Route path="event-leave" element={<Event />}/>
                      <Route path="medical-leave" element={<Medical />}/>
                      <Route path="documents-required" element={<Documents />}/>
                    </Route>
                </Routes>
            </Router>

  );
}

export default App;
