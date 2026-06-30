import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-pink-600 font-semibold"
      : "hover:text-pink-600";

  return (
    <nav className="bg-white shadow-md relative z-50">

      {/* NAVBAR TOP */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-pink-600">
          SHOP WITH ABA
        </h1>

        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/bags" className={linkClass}>Bags</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* Hamburger */}
        <button
  className="md:hidden text-3xl text-pink-600 p-1 relative z-50"
  onClick={() => setOpen(!open)}
>
  {open ? <HiOutlineX /> : <HiOutlineMenu />}
</button>
      </div>

      {/* 🔥 OVERLAY (click anywhere to close) */}
      {open && (
  <div
    className="fixed inset-0 bg-black/40 z-40"
    onClick={() => setOpen(false)}
  />
)}

      {/* MOBILE MENU */}
      <div
  className={`md:hidden fixed top-0 right-0 h-64 w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>

        {/* LINKS */}
        <div className="flex flex-col p-6 gap-6 text-lg font-medium">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/bags" onClick={() => setOpen(false)} className={linkClass}>
            Bags
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* SOCIAL ICONS */}
        <div className="absolute bottom-0 w-full p-6 border-t">
          <p className="text-sm font-semibold text-gray-500 mb-3">
            Follow Us
          </p>

          <div className="flex gap-5 text-pink-600 text-xl">
            <a
              href="https://www.instagram.com/shop.with.aba?igsh=OGlkOHZ1ODRqNnU2"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.tiktok.com/@shop.with.aba?_r=1&_t=ZS-97duUn4G5zR"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.facebook.com/shop.with.aba"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}