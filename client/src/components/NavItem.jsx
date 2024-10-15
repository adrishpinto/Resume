function NavItem({ name, onClick, isActive }) {
  return (
    <li
      className={`custom-hover-effect cursor-pointer font ${
        isActive ? "text-cyan-500" : "text-white"
      }`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}
export default NavItem;
