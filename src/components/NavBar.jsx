import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="navbar">
      <Link to="/home"><span> Home </span></Link>
      <Link to="/search"><span> Search </span></Link>
      <Link to="/favourites"><span> Favourites </span></Link>
    </div>
  )
}

export default NavBar