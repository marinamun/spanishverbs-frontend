import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <h1>Practice the Spanish verb tenses</h1>
      <Link to="/">
        <h4>Presente</h4>
        <h4>Pretérito Indefinido</h4> 
        
      </Link>
    </>
  );
};
export default Homepage;
