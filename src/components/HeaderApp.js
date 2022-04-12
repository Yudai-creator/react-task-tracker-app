import Button from "./ButtonApp";


const Header = ({title}) => {
    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button color='red' text='Add task'/>
        </header>
     );
}
 
export default Header;