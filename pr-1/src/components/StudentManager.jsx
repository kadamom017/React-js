import React, { useEffect, useState } from 'react'

const StudentManager = () => {
  // State to store the student name entered in the input
  const [studentName, setStudentName] = useState('')

  // State to store all students
  const [students, setStudents] = useState([])

  // Retrieve students from Local Storage when the component loads
  useEffect(() => {
    const savedStudents = localStorage.getItem('students')

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents))
    }
  }, [])

  // Save students to Local Storage whenever the students list changes
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  // Add a new student
  const addStudent = () => {
    if (studentName.trim() === '') {
      return
    }

    const newStudent = {
      id: Date.now(),
      name: studentName,
    }

    setStudents([...students, newStudent])
    setStudentName('')
  }

  // Delete a student
  const deleteStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    )

    setStudents(updatedStudents)
  }

  return (
    <section className="manager-section">
      
      <div className="manager-card">
        <h2>Add Student</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter student name"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
          />

          <button onClick={addStudent}>
            Add Student
          </button>
        </div>

        <div className="student-list">
          <h2>Student List</h2>

          {students.length === 0 ? (
            <p>No students added yet.</p>
          ) : (
            <ul>
              {students.map((student) => (
                <li key={student.id}>
                  <span>{student.name}</span>

                  <button
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default StudentManager