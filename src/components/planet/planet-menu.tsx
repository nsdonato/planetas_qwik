import { component$, $, useContext } from "@builder.io/qwik";
import { NavBarButtons, NavHeader } from "../nav/index";
import Line from "../line";
import ImageIcon from "../image-icon";
import { planetContextNoe } from "../../context/PlanetContext";

export default component$(() => {
  const infoContext = useContext(planetContextNoe);
  const toggleMenu = $(() => {
    infoContext.showMenu = !infoContext.showMenu;
  });

  return (
    <section>
      <header class="flex top-0 w-full fixed justify-between items-center px-6 py-4 bg-darkBlue z-10 md:flex-col md:w-auto md:relative md:justify-center md:pt-8 md:pb-0 lg:flex-row lg:items-start lg:pt-0 lg:pb-5 lg:px-8 lg:justify-between">
        <h1 class="font-antonio text-white text-28 font-medium uppercase tracking-1.05 leading-normal lg:pt-[22px]">
          the planets
        </h1>
        <ImageIcon
          src={`/assets/icon-hamburger-${
            infoContext.showMenu ? "open" : "close"
          }.svg`}
          styles="cursor-pointer w-6 h-4 md:hidden"
          altImage="icono de menú para celulares"
          toggleMenu={toggleMenu}
        />
        <NavHeader styles="hidden md:flex md:mb-6 md:mt-[33px] lg:mb-0 lg:mt-0" />
      </header>
      <Line styles="fixed top-[68px] w-full z-10 md:static" />
      <NavBarButtons
        toggleMenu={toggleMenu}
        styles={`flex px-6 z-10 fixed bg-darkBlue pt-6 w-full ${
          infoContext.showMenu
            ? "ease-in duration-300 top-[69px]"
            : "ease-in duration-300 mt-[-547px] top-[-69px]"
        } md:hidden`}
      />
    </section>
  );
});
