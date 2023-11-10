import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { NavBar } from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { SearchProvider } from "./context/SearchFiltersContext";

function App() {
  return (
    <ShoppingCartProvider>
    <SearchProvider>
    <NavBar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </SearchProvider>
    </ShoppingCartProvider>
  )
}

export default App
