import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul class="flex">
  <li class="mr-6">
    <Link to="/home" class="text-blue-500 hover:text-blue-800">Home</Link>
  </li>
  <li class="mr-6">
    <Link to="/shop" class="text-blue-500 hover:text-blue-800">Shop</Link>
  </li>
 
</ul>
        </nav>
    );
};

export default NavBar;