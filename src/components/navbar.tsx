const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "service", path: "/service" },
  { name: "portfolio", path: "/portfolio" },
  { name: "contact", path: "/contact" },
];

function Nav() {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <a href={link.path} key={index}>
            {link.name}
          </a>
        );
      })}
    </nav>
  );
}

export default Nav;
