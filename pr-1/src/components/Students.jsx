import React from 'react'
import StudentCard from './StudentCard'

const Students = () => {
  return (
    <section className="students-section">

      <div className="students-container">
        <StudentCard
          name="Om Kadam"
          city="Surat"
          state="Gujarat"
          country="India"
          course="FSD"
        />

        <StudentCard
          name="Prayash Jena"
          city="Mumbai"
          state="Maharashtra"
          country="India"
          course="BCA"
        />

        <StudentCard
          name="Mann Shah"
          city="Ahmedabad"
          state="Gujarat"
          country="India"
          course="BSc IT"
        />

        <StudentCard
          name="Mohd Naved"
          city="Delhi"
          state="Delhi"
          country="India"
          course="BCA"
        />

        <StudentCard
          name="Richa Chouhan"
          city="Pune"
          state="Maharashtra"
          country="India"
          course="BSc IT"
        />
      </div>
    </section>
  )
}

export default Students