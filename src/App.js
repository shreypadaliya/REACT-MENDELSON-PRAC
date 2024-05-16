import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "../src/pages/Intro";
import Aboutus from "../src/pages/Aboutus";
import Service from "../src/pages/Service";
import Communication from "../src/pages/Communications";
import Facilitation from "../src/pages/Facilitation";
import Consultation from "../src/pages/Consultation";
import Traning from "../src/pages/Traning";
import Ourteam from "../src/pages/Ourteam";
import Ourprojects from "../src/pages/Ourprojects";
import Ourclients from "../src/pages/Ourclients";
import Footer from "../src/components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <Aboutus></Aboutus>
      <Service></Service>
      <Communication></Communication>
      <Facilitation></Facilitation>
      <Consultation></Consultation>
      <Traning></Traning>
      <Ourteam></Ourteam>
      <Ourprojects></Ourprojects>
      <Ourclients></Ourclients>
      <Footer></Footer>
    </>
  );
}

export default App;
