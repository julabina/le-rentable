import { Route, Routes } from "react-router-dom";
import About from "./Containers/About/About";
import CalculRentaImmo from "./Containers/CalculRentaImmo/CalculRentaImmo";
import Legals from "./Containers/Legals/Legals";
import NotFound from "./Containers/NotFound/NotFound";

function App() {
  return (
    <>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<CalculRentaImmo />} />
      <Route path="/mention" element={<Legals />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
