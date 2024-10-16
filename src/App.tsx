import { useState } from "react";
import About from "./components/about";
import ContactMe from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Drawer from "./components/drawer/drawer";

export interface IMenuOpen {
  menuOpen: boolean;
}

export interface IMenuStateProps {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col">
      <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="flex flex-col">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Hero />
      </div>
      <main>
        <About />
        <Skills />
        <Portfolio />
      </main>
      <footer>
        <ContactMe />
      </footer>
    </div>
  );
}

export default App;
