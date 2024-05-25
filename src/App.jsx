import Navbar from "./components/Navbar";
import { ContactButton } from "./components/ContactButton";
import Home from "./section/Home";
import About from "./section/About";
import Product from "./section/Product";
import Gallery from "./section/Gallery";
import { Footer } from "./section/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Product></Product>
      <Gallery></Gallery>
      <Footer></Footer>
      <ContactButton></ContactButton>
    </>
  );
}

export default App;
