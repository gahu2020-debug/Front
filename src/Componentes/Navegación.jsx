import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Navegación({ path, setPath }) {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRriNEN15uNJORZL7eZxCHntHe2T-1w-M-eNWStuZDXw&s=10"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ChronoReact
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          href="#"
          active={path === "inicio" ? true : false}
          onClick={() => setPath("inicio")}
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="#"
          active={path === "about" ? true : false}
          onClick={() => setPath("about")}
        >
          About
        </NavbarLink>
        <NavbarLink
          href="#"
          active={path === "services" ? true : false}
          onClick={() => setPath("services")}
        >
          Services
        </NavbarLink>
        <NavbarLink
          href="#"
          active={path === "pricing" ? true : false}
          onClick={() => setPath("pricing")}
        >
          Pricing
        </NavbarLink>

        <NavbarLink
          href="#"
          active={path === "contact" ? true : false}
          onClick={() => setPath("contact")}
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
