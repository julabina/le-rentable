import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import CalculRentaImmo from "./Containers/CalculRentaImmo/CalculRentaImmo";
import Cgu from "./Containers/Cgu/Cgu";
import Contact from "./Containers/Contact/Contact";
import NotFound from "./Containers/NotFound/NotFound";
import ReactGA from "react-ga4";
ReactGA.initialize("G-W3CTME9QYY");
ReactGA.send('pageview');

function App() {
  return (
    <>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<CalculRentaImmo />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cgu" element={<Cgu />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
