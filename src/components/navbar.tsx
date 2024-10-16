import { IMenuStateProps } from "../App";
import menuIcon from "../assets/nav/menuIcon.svg";

const links = [
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

function Nav({ setMenuOpen, menuOpen }: IMenuStateProps) {
  return (
    <div className="max-sm:order-first">
      <img
        src={menuIcon}
        alt="Menu Button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-8 h-8 sm:hidden"
      />
      <nav className="flex gap-8 max-sm:hidden">
        {links.map((link, index) => {
          return (
            <a href={link.path} key={index} className="hover:text-garnet">
              {link.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default Nav;
