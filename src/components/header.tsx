import { useState } from "react";
import Nav from "./navbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between px-24 py-5 items-center max-md:px-0">
        <div className="flex justify-center items-center gap-2">
          <h1 className="sm:text-3xl font-bold">Theo</h1>
          <h1 className="sm:text-3xl font-bold bg-gradient-to-r from-ecru to-garnet bg-clip-text text-[transparent] inline-block">
            Cooper-Brown
          </h1>
        </div>
        <Nav />
        <img
          src={
            menuOpen ? "/assets/nav/closeIcon.svg" : "/assets/nav/menuIcon.svg"
          }
          alt="Menu Button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-5 h-5 sm:hidden"
        />
      </div>
    </>
  );
}
