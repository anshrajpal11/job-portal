import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Alljobs from './pages/Alljobs'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import AppliedJobs from './pages/AppliedJobs'
import JobDescription from './pages/JobDescription'
import RegisterEmployee from './pages/RegisterEmployee'
import RegisterEmployer from './pages/RegisterEmployer'
import Addjob from './pages/Addjob'
import AddedJobs from './pages/Addedjob'
import Applicants from './pages/Applicants'
import LoginEmployee from './pages/LoginEmployee'
import LoginEmployer from './pages/LoginEmployer'
import Login from './pages/Login'
const Dashboard = () => {
  return ( <div>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/jobs' element={<Alljobs/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/appliedjobs/:id' element={<AppliedJobs/>} />
      <Route path='/job/:id' element={<JobDescription/>} />
      <Route path='/login/employee' element={<LoginEmployee/>} />
      <Route path='/login/employer' element={<LoginEmployer/>} />
      <Route path='/register/employee' element={<RegisterEmployee/>} />
      <Route path='/register/employer' element={<RegisterEmployer/>} />
      <Route path='/addjob' element={<Addjob/>} />
      <Route path='/addedjobs/:id' element={<AddedJobs/>} />
      <Route path='/applicants' element={<Applicants/>} />
      <Route path='/login' element={<Login/>} />


    </Routes>
    <Footer/>

    </div>

    
  )
}

export default Dashboard
