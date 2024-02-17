import {FaStar} from 'react-icons/fa';
import user1 from './userone.jpg';
import user2 from './usertwo.jpg';
import user3 from './userthree.jpg';
import './Testimonial.css';
export default function Testimonial(){
    return(
        <>
            <h1 className='head'>Testimonials</h1>
    <section className='test'>
        <section>
            <article className="user1">
            <label htmlFor="rating">Ratings </label>
            <FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar/><br/>
            <img src={user1} alt="user" className='user-image' width="150px" height="150px"/>
            <figcaption>Emma Stone</figcaption>
            <p className='para'>"The chicken pot pie at Little Lemon is a must-try! It's filled with tender chicken, flaky vegetables, and a rich and creamy gravy.</p>
            </article>
        </section>
        <section>
            <article className="user2">
            <label htmlFor="rating">Ratings </label>
            <FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><br/>
            <img src={user2} alt="user" className='user-image' width="150px" height="150px"/>
            <figcaption>Rolex</figcaption>
            <p className='para'>"Little Lemon is my go-to spot for delicious comfort food and a cozy atmosphere. The staff is always friendly and attentive, and the food is consistently delicious.</p>
            </article>
        </section>
        <section>
            <article className="user3">
            <label htmlFor="rating">Ratings </label>
            <FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar/><br/>
            <img src={user3} alt="user" className='user-image' width="150px" height="150px"/>
            <figcaption>Katherine</figcaption>
            <p className='para'>"I had the best burger of my life at Little Lemon! The meat was perfectly cooked and juicy, and the toppings were fresh and flavorful.</p>
            </article>
        </section>
    </section>
        </>
    );

}