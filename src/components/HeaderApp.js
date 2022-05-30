import Button from "./ButtonApp";


const Header = ({title}) => {
    const clickEvent = (e) => {
        console.log(e)
    }
    return ( 
        <header className="header">
            <h1>{title}</h1>
            <Button text='Add task!' clickEvent={clickEvent}/>
        </header>
     );
}
 
export default Header;