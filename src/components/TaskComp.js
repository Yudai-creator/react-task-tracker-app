import {FaTimes} from 'react-icons/fa'

const TaskComp = ({task, onDelete, onToggle}) => {
    return ( 
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'orangered', cursor: 'pointer'}}
                onClick={() => onDelete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
     );
}
 
export default TaskComp;