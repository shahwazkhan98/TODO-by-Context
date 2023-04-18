import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Navbar() {
 
  const {resetTodo} = useContext(GlobalContext)
 
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 todo">Todo App</span>
        <span className="navbar-brand mb-0 h1">
          <button className="btn btn-danger  rounded-5" onClick={resetTodo}>Reset</button>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
