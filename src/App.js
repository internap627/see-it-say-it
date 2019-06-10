import React from 'react';
import './App.css';

function App() {
  function hasGetUserMedia() {
    return !!(navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia);
  }
  if (hasGetUserMedia()) {
    console.log('good to go!!')
  } else {
    alert('getUserMedia() is not supported by your browser');
  }

  const handleChange = (e) => {
    return e.target.files
  }

  return (
    <div className="App">
      <input onChange={handleChange} type="file" accept="image/*" capture="environment"></input>
    </div>
  );
}

export default App;
