import Link from "next/link";
import { useState, useEffect } from "react";

const pages = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Videos",
    url: "/videos",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  const [active, setActive] = useState(false);

  const setNavbarActive = () => {
    window.scrollY > 0 ? setActive(!active) : setActive(active);
  };

  useEffect(() => {
    window.addEventListener("scroll", setNavbarActive);
    return () => {
      window.removeEventListener("scroll", setNavbarActive);
    };
  }, []);

  const currentUser = {
    active: true,
    id: "123",
    username: "Sujoykrhaldar",
    isSeller: true,
    profilePic: false,
  };

  return (
    <header
      className={` w-full h-fit inset-0 text-white z-50 ${
        active ? "bg-black-dark fixed py-4" : "bg-transparent absolute py-6"
      }`}
    >
      <div className="container w-full h-fit flex items-center justify-between gap-8">
        <Link href="/">
          <p>
            Thapa{" "}
            <span className="font-bold text-yellow-chrome">Technical</span>
          </p>
        </Link>

        <nav className="flex items-center gap-8">
          {pages.map((link, id) => (
            <Link key={id} className="hover:text-yellow-chrome" href={link.url}>
              {link.name}
            </Link>
          ))}

          <Link className="hover:text-yellow-chrome" href="/login">
            Login
          </Link>
          <Link
            className="bg-brown hover:bg-brown-dark rounded-xl py-3 px-6"
            href="/signup"
          >
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
