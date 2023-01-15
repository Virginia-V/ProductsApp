import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
