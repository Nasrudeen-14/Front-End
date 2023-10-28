import rest from './restaurant.jpg';
import './Main.css';
export default function Main(){
    return(
        <main>
        <section className="col1">
            <h1>Little Lemon<h2>Chicago</h2></h1>
            <p>We are family owned Mediterranean restaurant, focused on traditional recipies served with modern twist</p>
            <button>Reserve a Table</button>
        </section>
        <section className="col2">
            <img src={rest} alt="Restaurant image" width="350" height="auto"/>
        </section>
        </main>
    );
}

