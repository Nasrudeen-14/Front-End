import './Footer.css';
import footerlogo from './footer-logo.png';
import {Link} from 'react-router-dom';
export default function Footer(){
    return(
        <footer>
        <img src={footerlogo} id="image" alt="logo" height="150px" width="100px"/>
         <div className="doormat-nav">
            <ul className='footerlink'>
                 <h4>Doormat Nav</h4>
                 <li><Link to="/" className="nav-item">Home</Link></li>
                 <li><Link to="/about" className="nav-item">About</Link></li>
                 <li><Link to="/menu" className="nav-item">Menu</Link></li>
                 <li><Link to="/reservation" className="nav-item">Reservations</Link></li>
                 <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>
         </div>
         <div className="contact">
            <ul>
                <h4>Contact</h4>
                <li>Address</li>
                <li>Phone Number</li>
                <li>email</li>
            </ul>
         </div>
         <div className="social-media">
            <ul>
                <h4>Social Media</h4>
                <li>whatsapp</li>
                <li>facebook</li>
                <li>twitter</li>
                <li>insta</li>
            </ul>
         </div>
         <h6>Copyright Little Lemon</h6>
        </footer>
    );
}
