import React from "react";
import { Link } from "react-router-dom";
import Vocabulary from "./Vocabulary";

const Homepage = () => {
  return (
    <>
      <h1>Practice the Spanish verb tenses</h1>
      <Link to="/vocabulary" element={<Vocabulary />}>
        <h4>Practice your Spanish vocab</h4>
      </Link>
    </>
  );
};
export default Homepage;
