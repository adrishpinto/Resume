import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams,
} from "react-router-dom";
import About from "./pages/About.jsx";
import Technical from "./pages/Technical.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Education from "./pages/Education.jsx";
import TypingEffect from "./components/TypingEffect.jsx";

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const [searchParams] = useSearchParams();
  const nav = searchParams.get("nav") || "About";

  return (
    <div className="bg-black min-h-screen">
      <div className="pt-10 px-40">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-6xl font-semibold text-white">Joshua</h1>
          <h1 className="text-6xl font-semibold text-cyan-500">Pinto</h1>
          <TypingEffect />
        </div>
      </div>
      <Navbar />
      <div className="sm:mx-40 mt- text-xl text-center sm:text-left bg-black  transition opacity-100  min-h-[50vh] ">
        {nav == "About" && <About />}
        {nav == "Technical" && <Technical />}
        {nav == "Education" && <Education />}
        {nav == "Contacts" && <Contact />}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default App;
