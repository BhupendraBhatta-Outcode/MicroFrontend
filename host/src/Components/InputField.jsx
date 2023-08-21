import React from 'react'

const InputField = ({placeholder, value, onChange}) => {
  return (
    <div className="container">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder={placeholder}
        value={value }
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
