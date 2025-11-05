import React, { useState } from "react";

const Name = () => {

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div id="main">
      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
      
      <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  );
};

export default Name;
