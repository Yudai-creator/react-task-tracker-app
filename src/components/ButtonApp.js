const Button = ({color, text, clickEvent}) => {
    return ( 
        <button onClick={clickEvent} style={{backgroundColor: color}} className="btn">{text}</button>
     );
}
 
export default Button;