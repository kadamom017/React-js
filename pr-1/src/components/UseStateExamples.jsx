import React, { useState } from 'react'

const UseStateExamples = () => {

  const [name, setName] = useState('Om Kadam')


  const [count, setCount] = useState(0)

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const [skills, setSkills] = useState(['HTML', 'CSS'])


  const [student, setStudent] = useState({
    name: 'Om Kadam',
    course: 'FSD',
  })

  const updateName = () => {
    setName('Om.S.Kadam')
  }

  const resetName = () => {
    setName('Om Kadam')
  }


  const increaseCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  const resetLogin = () => {
    setIsLoggedIn(false)
  }

  const addSkill = () => {
    setSkills([...skills, 'JavaScript'])
  }

  const resetSkills = () => {
    setSkills(['HTML', 'CSS'])
  }

  const updateStudent = () => {
    setStudent({
      ...student,
      course: 'FSD',
    })
  }

  const resetStudent = () => {
    setStudent({
      name: 'Om Kadam',
      course: 'FSD',
    })
  }

  return (
    <section className="state-section">
      {}
      <div className="state-card">
        <h2>1. String State</h2>
        <p>Name: {name}</p>

        <button onClick={updateName}>Update Name</button>
        <button onClick={resetName}>Reset Name</button>
      </div>

      {}
      <div className="state-card">
        <h2>2. Number State</h2>
        <p>Count: {count}</p>

        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={resetCount}>Reset Count</button>
      </div>

      {}
      <div className="state-card">
        <h2>3. Boolean State</h2>
        <p>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>

        <button onClick={toggleLogin}>Toggle Status</button>
        <button onClick={resetLogin}>Reset Status</button>
      </div>

      {}
      <div className="state-card">
        <h2>4. Array State</h2>
        <p>Skills: {skills.join(', ')}</p>

        <button onClick={addSkill}>Add JavaScript</button>
        <button onClick={resetSkills}>Reset Skills</button>
      </div>

      {}
      <div className="state-card">
        <h2>5. Object State</h2>
        <p>Name: {student.name}</p>
        <p>Course: {student.course}</p>

        <button onClick={updateStudent}>Update Course</button>
        <button onClick={resetStudent}>Reset Student</button>
      </div>
    </section>
  )
}

export default UseStateExamples