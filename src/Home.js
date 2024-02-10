import './Home.css';
import React, { useState } from 'react'; 

function Home() { 
  
  const [click, setClick] = useState(0); 

  return (
    <div className="Home">
     
            <p>Welcome!</p>
            <p>You clicked {click} times</p> 
            <button onClick={() => setClick(click + 1)}> 
            Click me 
            </button> 
            <br/>
            <p>Currently under construction!</p>
         
    </div>
  );
}

export default Home;
