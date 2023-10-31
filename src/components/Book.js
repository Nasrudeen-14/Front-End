import './Booktable.css'
import { useState } from 'react';
export default function Book(){

    const[date,setDate]=useState();

    const handleSubmit= (e)=>{e.preventDefault();setDate();}
 return(
    <>
    <form className="form" onSubmit={handleSubmit}>
     <h1 className='book'>Book a Table</h1>
    <article >
     <label htmlFor="res-date">Choose date</label>
     <input type="date" id="res-date" onChange={(e)=>setDate(e.target.value)}/>
     <label htmlFor="res-time">Choose time</label>
     <select id="res-time" onChange={(e)=>setDate(e.target.value)}>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
     </select>
     <label htmlFor="guests">Number of guests</label>
     <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>setDate(e.target.value)}/>
     <label htmlFor="occasion">Occasion</label>
     <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Others</option>
     </select>
    <button type="submit" disabled={!date} value="Make Your reservation" onClick={()=>alert('Your form has been Successfully submitted')}>Make Your reservation</button>
    </article>
    </form>
    </>
    );
}