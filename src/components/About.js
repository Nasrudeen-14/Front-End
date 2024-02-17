import chef from './Mario and Adrian A.jpg';
import "./About.css";
export default function About(){
    return(
        <section className="about">
         <article className="description">
         <h1 className='title'>About</h1>
         <h2 className='sub'>Little Lemon</h2>
         <h3 className='tub'>Chicago</h3>
         <p className='graph'> Little Lemon is a Mediterranean-inspired small plates restaurant founded by brothers Mario and Adrian. The restaurant is known for its fresh, seasonal ingredients, bold flavors, and modern twist on classic Mediterranean dishes.<br/>
             Mario and Adrian grew up in a Mediterranean household, where food was always a central part of family gatherings and celebrations. They developed a deep appreciation for the cuisine's complex flavors and fresh ingredients. When they opened Little Lemon, they wanted to create a restaurant that would share their love of Mediterranean food with others.<br/>
             Little Lemon's menu features a variety of small plates, perfect for sharing with friends and family. Dishes include grilled octopus with chorizo and romesco sauce, patatas bravas with smoked paprika aioli, and lamb meatballs with tzatziki sauce. The restaurant also offers a selection of Mediterranean-inspired cocktails and an extensive wine list.
             Little Lemon is a warm and inviting space, with a modern twist on traditional Mediterranean décor. The restaurant is located in the heart of the city, making it a convenient destination for a casual meal or a special occasion.</p>
         </article>
         <article className="chef">
            <img src={chef} name="chef" width="500px" height="auto" alt="Chef"/>
         </article>
        </section>
    );

}