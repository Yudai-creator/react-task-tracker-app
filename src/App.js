import Header from "./components/HeaderApp";
import Tasks from "./components/Tasks";
import Button from "./components/ButtonApp";
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


  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)) 
  }

  return (
    <div className="container">
      <Header title="Cool task tracker"/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 
      (<div>
        <h3>No taks left, create a new one</h3>
        <Button color='orangered' text='New Task'/>
      </div>)
      }
    </div>
  );
}

export default App;
