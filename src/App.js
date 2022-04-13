import Header from "./components/HeaderApp";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
        [
    {
        id: 1,
        text: 'Photo shoot',
        day: 'May 1st at 2:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Shopping',
        day: 'April 15th at 8:30am',
        reminder: true
    },
    {
        id: 3,
        text: 'Twitter Space',
        day: 'April 16th at 9:30am',
        reminder: true
    }
]
    )
  return (
    <div className="container">
      <Header title="Cool task tracker"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
