// student list is imported alongside its path
import StudentList from './components/StudentList';

function App() {
    return (
      <main>
        <h1>Attendance</h1>
        <StudentList></StudentList>
      </main>
  );
  // alternative
  // const studentList = <StudentList></StudentList>;
  // return (
  //   <main>
  //     <h1>Attendance</h1>
  //     {studentList}
  //   </main>
  // );
}

export default App;
