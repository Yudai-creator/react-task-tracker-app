import TaskComp from "./TaskComp";

const Tasks = ({tasks, onDelete, onToggle}) => {
    return ( 
        <div>
            {tasks.map((task) => (
            <TaskComp key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </div>
     );
}
 
export default Tasks;