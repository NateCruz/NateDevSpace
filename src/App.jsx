import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <a href='https://www.hackertyper.com' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='http://www.minagahet.blogspot.com' target='_blank'>
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
        Click on the Vite and React logos for a suprise.
      </p>
      <Footer />
    </>
  );
}

export default App;
