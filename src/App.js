// StudentList and ClassInfo are imported alongside their relative paths
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
// moving studentData here allows here to display student infor for multiple classes
function App() {
  const studentData = [
    {
      nameData: "Ada",
      emailData: "ada@dev.org",
    },
    {
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
    },
    {
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
    },
  ];

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numberOfStudents={studentData.length}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
