import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/header";
import { Home } from "./components/HomePage/home";
import { Footer } from "./components/Footer/footer";
import { Cookie } from "./components/Cookie/cookie";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
      <Cookie />
    </Router>
  );
}

export default App;
