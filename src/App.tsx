import About from "./components/about";
import ContactMe from "./components/contact";
import Cv from "./components/cv";
import Header from "./components/header";
import Hero from "./components/hero/hero";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <div>
      <div className="h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <div className="flex flex-col gap-24">
        <About />
        <Portfolio />
        <Cv />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
