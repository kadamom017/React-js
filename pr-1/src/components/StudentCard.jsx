import React from 'react'

const StudentCard = ({ name, city, state, country, course }) => {
  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>
        <strong>City:</strong> {city}
      </p>

      <p>
        <strong>State:</strong> {state}
      </p>

      <p>
        <strong>Country:</strong> {country}
      </p>

      <p>
        <strong>Course:</strong> {course}
      </p>
    </div>
  )
}

export default StudentCard