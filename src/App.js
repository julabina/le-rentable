import { Route, Routes } from "react-router-dom";
import CalculRentaImmo from "./Containers/CalculRentaImmo/CalculRentaImmo";
import NotFound from "./Containers/NotFound/NotFound";

function App() {
  return (
    <>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<CalculRentaImmo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
