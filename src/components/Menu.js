import './Menu.css';
import burchetta from './bruchetta.svg';
import salad from './greek salad.jpg';
import desert from './lemon dessert.jpg';
export default function Menu(){
    return(
        <body>
        <div id='division'>
            <h1>This Week Specials  !</h1>
            <button>Online Menu</button>
        </div>
        <section class="section">
                <article class="article1">
                 <h2>Bruchetta<span>  $9.99</span></h2>
                 <img src={burchetta} class="image" width="200em" height="150em"/>
                 <p>Crispy bread topped with tangy tomatoes, garlic, and basil. A classic Italian appetizer that's perfect for any occasion.</p>
                 <button>Order Now!</button>
                </article>
                <article class="article2">
                    <h2>Greek Salad<span>  $12.99</span></h2>
                    <img src={salad} class="image" width="200em" height="150em"/>
                    <p>A refreshing salad made with tomatoes, cucumbers, onions, olives, feta cheese, and a vinaigrette dressing.</p>
                    <button>Order Now!</button>
                </article>
                <article class="article3">
                    <h2>Lemon Desert<span>  $5.00</span></h2>
                    <img src={desert} class="image" width="200em" height="150em"/>
                    <p>A sweet and tangy treat made with lemons, sugar, and eggs. A perfect way to end a meal on a light and refreshing note.</p>
                    <button>Order Now!</button>
                </article>
        </section>
        </body>
    );
}