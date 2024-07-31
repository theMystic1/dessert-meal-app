function Header({ children, clasName }) {
  return <h1 className={` font-bold text-xl ${clasName}`}>{children}</h1>;
}

export default Header;
