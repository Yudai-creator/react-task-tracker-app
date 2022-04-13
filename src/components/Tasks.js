import TaskComp from "./TaskComp";

const Tasks = ({tasks}) => {
    return ( 
        <div>
            {tasks.map((task) => (
            <TaskComp key={task.id} task={task}/>
            ))}
        </div>
     );
}
 
export default Tasks;