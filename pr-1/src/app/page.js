import StudentCard from '../components/StudentCard'

export default function Home() {
  const students = [
    {
      name: 'Om Kadam',
      city: 'Surat',
      state: 'Gujarat',
      country: 'India',
      course: 'BCA',
    },
    {
      name:'Prayash Jena',
      city: 'Mumbai',
      state:'Maharashtra',
      country:'India',
      course:'BCA',
    },
    {
      name:'Mann Shah',
      city:'Ahmedabad',
      state:'Gujarat',
      country:'India',
      course:'BSc IT',
    },
    {
      name: 'Mohd Naved',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      course: 'BCA',
    },
    {
      name: 'Richa Chouhan',
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
      course: 'BSc Computer Science',
    },
  ]

  return (
    <main className="main-container">
      <h1>Student Information System</h1>

      <p className="description">
        Welcome to my Next.js project.
      </p>

      <div className="students-grid">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            city={student.city}
            state={student.state}
            country={student.country}
            course={student.course}
          />
        ))}
      </div>
    </main>
  )
}