import React from 'react';
import { Link } from 'react-router-dom'

import './header-style.scss'

function Header() {
   return (
       <header>
          <h1>TodoList</h1>
          <ul>
             <li><Link to="/">Home</Link></li>|
             <li><Link to="/about">About</Link></li> 
          </ul> 
       </header>      
   ) 
}

export default Header;