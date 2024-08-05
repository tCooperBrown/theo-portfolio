import About from "./components/about";
import ContactMe from "./components/contact";
import Cv from "./components/cv";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Cv />
      <ContactMe />
    </div>
  );
}

export default App;
