import React from 'react';
import BookAppointment from './components/BookAppointment';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import HospitalQuery from './components/HospitalQuery';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import AuthProvider, { useAuth } from './contexts/AuthContext';
import {Routes, Route, Navigate} from 'react-router-dom'
import PatientList from './components/PatientList';
import Register_form_patient from './components/Register_form_patient';
function App() {

  const PrivateRoute = ({ children }) => {
    const {currentUser} = useAuth() 
    return currentUser ? children : <Navigate to="/login" />;
  }


  return (
    <div className="App">
      <AuthProvider>
      {/* <TopNavbar/>
      <Navbar/> */}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/book-appointment" element={<BookAppointment/>} />
          <Route path="/hospital-query" element={<HospitalQuery/>} />
          <Route path="/patient-list" element={<PatientList/>} />
          
          {/* <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} /> */}
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
