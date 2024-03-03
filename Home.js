import "../css/Home.css";
import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap';

function Home() { 
  
  const [click, setClick] = useState(0); 

  return (
    <div className="Home">

            <p>Welcome!</p>
            <p>You clicked {click} times</p> 
            <Button onClick={() => setClick(click + 1)}> 
            Click me 
            </Button> 
            <br/>
            <p>Currently under construction!</p>
            
    </div>
        
    
  );
}

export default Home;
