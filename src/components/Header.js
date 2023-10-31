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
                 <li><Link to="/" className="nav-item">Home</Link></li>
                 <li><Link to="/about" className="nav-item">About</Link></li>
                 <li><Link to="/menu" className="nav-item">Menu</Link></li>
                 <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                 <li>Login</li>
             </ul>
            </nav>
         </header>
        );
}
