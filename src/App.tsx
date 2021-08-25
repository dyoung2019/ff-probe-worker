import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import logo from './logo.png';
import './App.css';

function App() {
  // Create the count state

  const workerRef = useRef<Worker>(null);
  useEffect(() => {
      const worker = new Worker(new URL('./worker.js', import.meta.url));

      console.log('index init')

      console.log('app postMessage 0')
      worker.postMessage({ a: 1 });
      console.log('app postMessage 1')

      worker.onmessage = (event:any) => {}

      // };

      worker.addEventListener("message", (event:any) => {
        console.log('app', event.data);
      });
      console.log('worker init');

      return () => {
        console.log('terminate');
        worker.terminate();
      }
  }, []);

  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://preactjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Preact
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
