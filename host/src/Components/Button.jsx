import React from 'react';

export default function ({ label, onClick })  {
  return (
    <button
      className="bg-blue-500 text-xl text-white px-4 py-2 rounded-md hover:bg-blue-600 "
      onClick={onClick}
    >
      {label}
    </button>
  );
};
