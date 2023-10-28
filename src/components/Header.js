import logo from './Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
export default function Header(){

    return(
        <header>
           <section className='logo'>
            <img src={logo} width="160px" height="110px"alt="logo"/>
            </section>
            <nav>
             <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Menu</li>
                 <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                 <li>Order Online</li>
                 <li>Login</li>
             </ul>
            </nav>
         </header>
        );
}
