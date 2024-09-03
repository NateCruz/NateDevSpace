import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://www.puppies.com' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://www.stupid.com' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>
        Hi Dad, finally was able to sync my computer to github to firebase and
        have it deploy automatically. So, check back soon for updates.
      </h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>wahoo</p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to see something silly
      </p>
    </>
  );
}

export default App;
