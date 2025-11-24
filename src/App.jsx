import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import LoginBar from "./components/LoginBar";

function App() {
  return (
    <>
      <LoginBar />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
