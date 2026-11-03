
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./layout.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "For Brands", href: "/for-brands" },
  { name: "For Creators", href: "/for-creators" },
  { name: "About", href: "/about" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="container">
      <div className="nav-left">
        <Link className="logo" to="/">
                <img src="./public/logo.png" alt="" />
          <span>NexVance</span>
        </Link>
      </div>

      <div className={menuOpen ? "nav-mobile" : "nav-middle"}>
        {navLinks.map((lnk) => (
          <NavLink
            key={lnk.href}
            to={lnk.href}
            end={lnk.href === "/"}
            className={({ isActive }) =>
              isActive ? "active-link" : "link"
            }
            onClick={closeMenu}
          >
            {lnk.name}
          </NavLink>
        ))}
      </div>

      <div className="nav-right">
        <Link className="nav-btn btn--primary nav-a" to="/contact">
          Contact
        </Link>

        <button
          type="button"
          className="nav-btn2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="menu" />
          ) : (
            <Menu className="menu" />
          )}
        </button>
      </div>
    </nav>
  );
};

const Col = ({ heading, links }) => (
  <div className="footer-col">
    <span className="footer-heading">{heading}</span>

    {links.map(([to, label]) =>
      to.startsWith("/") ? (
        <Link key={label} className="footer-link" to={to}>
          {label}
        </Link>
      ) : (
        <a key={label} className="footer-link" href={to}>
          {label}
        </a>
      )
    )}
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
              <h2>NexVance</h2>
            <p>
              Premium creator partnerships for global brands, managed
              from pitch to payout.
            </p>
          </div>

          <div className="footer-cols">
            <Col
              heading="Explore"
              links={navLinks.slice(0, 4).map(({ href, name }) => [
                href,
                name,
              ])}
            />

            <Col
              heading="Company"
              links={[
                ["/about", "About"],
                ["/contact", "Contact"],
              ]}
            />

            <Col
              heading="Connect"
              links={[
                ["#", "LinkedIn"],
                ["#", "Instagram"],
                ["#", "X"],
              ]}
            />
          </div>
        </div>

        <p className="t-small">
          © 2026 NexVance. All rights reserved.
        </p>
        <p className="t-small">
          Developed By Uzair Shaikh. <br />
          Linkdin : <a className="uzair-link" href="https://www.linkedin.com/in/uzair-shaikh-376305394/">Uzair Shaikh</a> <br />
          +92 3093253595
        </p>
      </div>
    </footer>
  );
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
