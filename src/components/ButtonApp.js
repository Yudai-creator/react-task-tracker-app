const Button = ({color, text}) => {
    return ( 
        <button style={{backgoundColor: color}} className="btn">{text}</button>
     );
}
 
export default Button;