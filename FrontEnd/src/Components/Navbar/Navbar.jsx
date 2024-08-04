import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/Services", name: "Services" },
    { path: "/About", name: "About" },
    { path: "/Blogs", name: "Blogs" },
    { path: "/Contact", name: "Contact" },
  ];

  return (
    <header className="bg-black fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-7xl mx-auto  flex justify-between items-center">
        <a className="text-xl font-bold text-white" href="">
          Design <span className="text-orange-500">DK</span>
        </a>
        <ul className="hidden gap-12 text-lg md:flex">
          {navItems.map((Item, link) => {
            return (
              <li key={link} className="inline-block text-white mx-4">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to={Item.path}
                >
                  {Item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex text-white gap-4 items-center">
          <a href="facebook" className="hover:text-orange-500 text-xl">
            <FaFacebook />
          </a>
          <a href="facebook" className="hover:text-orange-500 text-xl">
            <FaTwitter />
          </a>
          <a href="facebook" className="hover:text-orange-500 text-xl">
            <FaInstagram />
          </a>
          <button className="bg-orange-500 px-6 py-2  font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
            Login
          </button>
        </div>
        <div className="flex md:hidden">
          <button>
            {menu ? (
              <IoClose onClick={toggleMenu} className="text-white text-3xl" />
            ) : (
              <IoMenu onClick={toggleMenu} className="text-white text-3xl" />
            )}
          </button>
        </div>
      </nav>
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block space-y-4  px-4 py-6 mt-14 bg-white ${
            menu
              ? "fixed top-0 left-0 w-full transition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map((Item, link) => {
            return (
              <li key={link} className="mx-4">
                <NavLink
                  onClick={toggleMenu}
                  className="text-black"
                  to={Item.path}
                >
                  {Item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
