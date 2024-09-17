import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AstuceAdd from "./pages/AstuceAdd";
import AstuceList from "./pages/AstucesList";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import "./css/app.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AstuceAdd />} />
        <Route path="/list" element={<AstuceList />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// Will be my dump component for children
