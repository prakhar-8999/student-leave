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
function App() {
  return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="*" element={<Page404/>}/>
                    <Route path="/Login" element={<Login />} />
                    {/* <Route path="/AoDashboard" element={<AoDashboard />}>
                        <Route path="" element={<Dashhome />}/>
                        <Route path="Addhall" element={<Addhall />}/>
                        <Route path="Booking" element={<Booking />}/>
                        <Route path="Userprofile" element={<Userprofile />}/>
                        <Route path="BookHall" element={<BookHall />}/>
                        <Route path="Viewhalls" element={<Viewhalls/>}/>
                        <Route path="Rejected" element={<Rejected/>}/>
                        <Route path="Approved" element={<Approved/>}/>
                        <Route path="Action" element={<Action/>}/>
                        <Route path="Report" element={<Report/>}/>
                        <Route path="Issues" element={<Issues/>}/>
                        <Route path="Aostatus" element={<Aostatus/>}/>
                        <Route path="previousbookings" element={<Previousbookings/>}/>
                    </Route> */}
                </Routes>
            </Router>

  );
}

export default App;
