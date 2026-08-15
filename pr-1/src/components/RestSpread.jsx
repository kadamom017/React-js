import React from 'react'

const RestSpread = () => {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript']
  const backendSkills = ['Node.js', 'Bootstrap', 'React.js']

  const allSkills = [...frontendSkills, ...backendSkills]

  const student = {
    name: 'Om Kadam',
    course: 'Full Stack Development'
  }

  const location = {
    city: 'Surat',
    state: 'Gujarat'
  }

  const studentDetails = {
    ...student,
    ...location
  }

  const copiedStudent = {
    ...student
  }

  const addNumbers = (...numbers) => {
    return numbers.reduce((total, number) => total + number, 0)
  }

  const total = addNumbers(10, 20, 30, 40)

  return (
    <section className="rest-spread-section">

      <div className="output-card">
        <h2>1. Merge Two Arrays</h2>
        <p>{allSkills.join(', ')}</p>
      </div>

      <div className="output-card">
        <h2>2. Merge Two Objects</h2>
        <p>Name: {studentDetails.name}</p>
        <p>Course: {studentDetails.course}</p>
        <p>City: {studentDetails.city}</p>
        <p>State: {studentDetails.state}</p>
      </div>

      <div className="output-card">
        <h2>3. Copy an Object</h2>
        <p>Name: {copiedStudent.name}</p>
        <p>Course: {copiedStudent.course}</p>
      </div>

      <div className="output-card">
        <h2>4. Rest Operator Function</h2>
        <p>Numbers: 10, 20, 30, 40</p>
        <p>Total: {total}</p>
      </div>
    </section>
  )
}

export default RestSpread