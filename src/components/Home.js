import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState(0);
  const navigate = useNavigate();
  function handleSubmit(e) {
    setSearch(search);
    if(search.length != 6){
      alert("Please enter valid Pincode")
      return
    }
    navigate(`/` + search);
  }
  return (
    <div className="container">
      <h2>Enter Pincode</h2>
      <input
        type="number"
        placeholder="Pincode"
        onBlur={(e) => setSearch(e.target.value)}
      />
      <br />
      <button onClick={() => handleSubmit()}>Lookup</button>
    </div>
  );
};

export default Home;
