import React from 'react';
import BookAppointment from './components/Forms/BookAppointment';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import HospitalQuery from './components/HospitalQuery';
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import AuthProvider, { useAuth } from './contexts/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom'
import PatientList from './components/PatientList';
import Query_Raise from './components/Forms/Query_Raise';
import PatientSignup from './components/PatientSignup';
import DoctorSignup from './components/DoctorSignup';
import HospitalSignup from './components/HospitalSignup';
import PatientGraphs from './components/PatientGraphs';
import DoctorProfile from './components/DoctorProfile';
import Lp from './components/Lp';


function App() {

  const PrivateRoute = ({ children }) => {
    const { currentUser, userRole } = useAuth()
    const path = children.type.name
    const patientAllow = ['Profile', 'BookAppointment']
    const doctorAllow = ['Profile', 'PatientList']
    const hospitalAllow = ['Profile', 'HospitalQuery']

    console.log(path)
    console.log(userRole)

    if(!currentUser){
      return <Navigate to="/login" />;
    }

    if(userRole === 'patient'){
      if(!patientAllow.includes(path)){
        return <Navigate to="/profile" />
      }
      else{
        return children
      }
    }
    else if(userRole === 'doctor'){
      if(!doctorAllow.includes(path)){
        return <Navigate to="/login" />
      }
      else{
        return children
      }
    }
    else if(userRole === 'hospital'){
      if(!hospitalAllow.includes(path)){
        return <Navigate to="/login" />
      }
      else{
        return children
      }
    }
    return <Navigate to="/login" />;
  }


  return (
    <div className="App">
      <AuthProvider>
        {/* <TopNavbar/>
      <Navbar/> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book-appointment/:docId" element={<BookAppointment />} />
          <Route path="/hospital-query" element={<HospitalQuery />}/>
          <Route path="/patient-list" element={<PatientList />} />
          <Route path="/query-raise" element={<Query_Raise/>} />
          <Route path="/patient-signup" element={<PatientSignup />} />
          <Route path="/patient-graphs" element={<PatientGraphs />} />
          <Route path="/doctor-profile" element={<DoctorProfile />} />
          <Route path="/doctor-signup" element={<DoctorSignup />} />
          <Route path="/hospital-signup" element={<HospitalSignup />} />
          <Route path="/home-page" element={<Lp />} />
          {/* <Route exact path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>} /> */}
        </Routes>
    </AuthProvider>
    </div >
  );
}

export default App;
