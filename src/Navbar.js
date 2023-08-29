import React from 'react';
import './Navbar.css';
function Navbar(){
    
    return(
        <>   
            <div className='NavBar'>
            <h2 className='Input'>Sign up for daily insider</h2>
            <input className='input_Hold' type='search' placeholder='Search' />
            <button className='butn'>Subscribe</button>
        </div>
        </>
    )
}
export default Navbar;