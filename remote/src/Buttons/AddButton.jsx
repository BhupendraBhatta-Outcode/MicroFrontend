import React from "react";


export default function AddButton() {
  const handleClick = () => {
    alert("add button clicked");
  };
  return (
    <div className="container">
      <button className="p-4 btn bg-green-600 w-25" onClick={() => handleClick()}>
        Add 
      </button>
    </div>
  );
}