import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTopButton from "./component/ScrollToTopButton";
import Home from "./images/Home";
import About from "./pages/About";
import Footer from "./Footer/Footer";
import ProductDetail from './pages/ProductDetails';
import Products from "./pages/Products";
import Vacancyjob from "./pages/VacancyJob";

function App() {
  const location = useLocation();

  // Define the path of the footer page
  const footerPagePath = "/Footer";

  // Check if the current route is not the footer page
  const showScrollToTop = location.pathname !== footerPagePath;

  return (
    <>
      <Navbar />
      {/* Render the scroll-to-top button only if not on the footer page */}
      {showScrollToTop && <ScrollToTopButton />}
      <div className="container">
        <Routes>
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/vacancyjob" element={<Vacancyjob />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
