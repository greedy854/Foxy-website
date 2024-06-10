import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;