// StudentList and ClassInfo are imported alongside their relative paths
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
    return (
      <main>
        <StudentList></StudentList>
        <h1>Attendance</h1>
        <ClassInfo></ClassInfo>
      </main>
  );
}

export default App;
