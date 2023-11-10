import './Home.css';
import React, { useState } from 'react'; 

function Home() { 
  
  const [click, setClick] = useState(0); 

  return (
    <div className="Home">
      <header className="Home-header">
   
        <div> 
            <p>You clicked {click} times</p> 
            <button onClick={() => setClick(click + 1)}> 
            Click me 
            </button> 
        </div>   

      </header>
    </div>
  );
}

export default Home;
