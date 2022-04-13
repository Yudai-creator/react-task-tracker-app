import {FaTimes} from 'react-icons/fa'

const TaskComp = ({task, onDelete}) => {
    return ( 
        <div className="task">
            <h3>{task.text} <FaTimes style={{ color: 'orangered', cursor: 'pointer'}}
                onClick={() => onDelete(task.id)}
            /></h3>
            <p>{task.day}</p>
        </div>
     );
}
 
export default TaskComp;