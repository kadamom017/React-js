import React from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import RestSpread from './components/RestSpread'
import Students from './components/Students'
import UseStateExamples from './components/UseStateExamples'
import StudentManager from './components/StudentManager'
import './App.css'

const App = () => {
  const studentName = 'Om Kadam'
  const course = 'Full Stack Development'
  const instituteName = 'Red & White Multimedia Institute '
  const currentDate = new Date().toLocaleDateString()

  return (
    <div className="app">
      <Header />

      <Welcome />
      <main id="home">

        <section id="student-info" className="student-info">
          <h2>Student Information</h2>

          <p>
            <strong>Student Name:</strong> {studentName}
          </p>

          <p>
            <strong>Course:</strong> {course}
          </p>

          <p>
            <strong>Institute Name:</strong> {instituteName}
          </p>

          <p>
            <strong>Current Date:</strong> {currentDate}
          </p>

        </section>

        <RestSpread />

        <Students />

        <UseStateExamples />

        <StudentManager />
      </main>

      <Footer />
    </div>
  )
}

export default App

