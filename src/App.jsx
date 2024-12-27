import './App.css'
import React from 'react'
import Admin from './service/admin/admin'
import FacultyService from './service/faculty/FacultyService'
import StudentService from './service/student/StudentService'

const App = () => {
  return (
    <div className="app">
      {/* <Admin/> */}
      <StudentService/>
      {/* <FacultyService/> */}

    </div>
  )
}

export default App