import styles from "./Drawer.module.css";
import closeIcon from "../../assets/nav/closeIcon.svg";
import { IMenuStateProps } from "../../App";
const links = [
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "work", path: "#work" },
  { name: "experience", path: "#experience" },
  { name: "contact", path: "#contact" },
];

function Drawer({ menuOpen, setMenuOpen }: IMenuStateProps) {
  return (
    <div
      className={`${styles.drawer} ${
        menuOpen ? styles.drawerOpen : ""
      } bg-ecru rounded-tr-lg rounded-br-lg z-10 w-72`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-6">
          <img
            src={closeIcon}
            alt="Close Menu"
            onClick={() => setMenuOpen(false)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <nav className="flex flex-col">
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              onClick={() => setMenuOpen(false)}
              className="px-5 py-2 text-lg hover:bg-celadon w-fit rounded-xl"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
export default Drawer;
