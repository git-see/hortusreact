import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AstuceAdd from "./pages/AstuceAdd";
import AstuceList from "./pages/AstucesList";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import './css/app.css';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <AstuceAdd />
      <AstuceList />
      <Connexion />
      <Inscription />
      </>
  );
}

export default App;

// Will be my dump component for children
