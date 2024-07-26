import { NavLink} from 'react-router-dom';
import  './Header.css';
import {elements} from '../../App.js';

const Header = ()  => {
    const isLogedIn = window.localStorage.getItem("email");


return (
    <header className="container">
    <nav className="container__list">
        <NavLink to={elements.path} className="list__link">Main</NavLink>
        <NavLink to={elements.contacts}  className="list__link">Contacts</NavLink>
        <NavLink to={elements.posts} className="list__link">Posts</NavLink>
        <NavLink to={elements.photoalbum}  className="list__link">Photoalbum</NavLink>
        
        <NavLink to={elements.signin} className="list__link">{!isLogedIn? "Sign In" : "Log Out"}</NavLink>
       
    </nav>


    </header>
)

}

export default Header;