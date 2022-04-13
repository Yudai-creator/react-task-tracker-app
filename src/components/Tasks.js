import TaskComp from "./TaskComp";

const Tasks = ({tasks, onDelete}) => {
    return ( 
        <div>
            {tasks.map((task) => (
            <TaskComp key={task.id} task={task} onDelete={onDelete}/>
            ))}
        </div>
     );
}
 
export default Tasks;