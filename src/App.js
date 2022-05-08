import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import About from "./Containers/About/About";
import CalculRentaImmo from "./Containers/CalculRentaImmo/CalculRentaImmo";
import Legals from "./Containers/Legals/Legals";
import NotFound from "./Containers/NotFound/NotFound";
import Privacy from "./Containers/Privacy/Privacy";

function App() {
  return (
    <>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<CalculRentaImmo />} />
      <Route path="/mentions-legales" element={<Legals />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/politique-de-confidentialite" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
