import "./css/app.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AstuceAdd from "./pages/AstuceAdd";
import AstucesList from "./pages/AstucesList";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AstuceAdd />} />
        <Route path="/list" element={<AstucesList />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// Will be my dump component for children
