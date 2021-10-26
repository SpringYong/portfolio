import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
