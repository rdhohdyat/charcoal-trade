import Navbar from "./components/Navbar";
import { Home } from "./section/Home";
import { ContactButton } from "./components/ContactButton";
import { About } from "./section/About";
import { Product } from "./section/Product";
import { Gallery } from "./section/Gallery";
import { Footer } from "./section/Footer";
import "./app.css";

function App() {
  return (
    <div className="overflow-hidden font-sans">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Product></Product>
      <Gallery></Gallery>
      <Footer></Footer>
      <ContactButton></ContactButton>
    </div>
  );
}

export default App;
