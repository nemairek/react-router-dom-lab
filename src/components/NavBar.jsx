import { Link } from 'react-router-dom';



const NavBar = () =>{
    return (
        <nav>
        <Link to="/">Home</Link>
        <br />     
        <Link to="/mailboxes">Mailboxes</Link>
        <br />
        <Link to="/new-mailbox">New Mailbox</Link>
        </nav>
    )
    }
    
    
    
    export default NavBar