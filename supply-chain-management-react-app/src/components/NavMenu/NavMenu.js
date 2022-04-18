import './NavMenu.css';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <div>
            <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	        <label for="menu-icon"></label>
            <nav class="nav"> 		
                <ul class="pt-5">
                    <li><Link to="/">CRUD Operations</Link></li>
                    <li><Link to="/">Query</Link></li>
                    <li><Link to="/">Power BI Dashboard</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu;