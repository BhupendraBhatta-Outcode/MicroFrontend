import React from "react";

export default function DeleteButton() {
  const handleClick = () => {
    alert("delete button clicked");
  };
  return (
    <div className="container">
      <button className="btn bg-red-600 p-4" onClick={() => handleClick()}>
        Delete 
      </button>
    </div>
  );
}
