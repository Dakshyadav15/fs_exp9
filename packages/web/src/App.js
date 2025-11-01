import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Docker is Running Successfully!</h1>
        <p>This React app is served through an Nginx container.</p>
        <p>Containerized Build: <strong>my-react-multistage</strong></p>
        <p>Visit: <code>http://localhost:8080</code></p>
      </header>
    </div>
  );
}

export default App;
