import { useState } from "react";

const Tasks = () => {
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
        <div>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </div>
     );
}
 
export default Tasks;