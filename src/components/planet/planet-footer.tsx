import { component$, useContext } from "@builder.io/qwik";
import { planetContextNoe } from "../../context/PlanetContext";
import PlanetFooterInfo from "./planet-footer-info";

export default component$(() => {
  const planet = useContext(planetContextNoe).data;

  const info = {
    "ROTATION TIME": planet?.rotation,
    "REVOLUTION TIME": planet?.revolution,
    RADIUS: planet?.radius,
    "AVERAGE TEMP.": planet?.temperature
  };

  return (
    <footer class="flex flex-col justify-center items-center gap-2 text-white col-span-12 mt-7 mb-12 md:flex-row md:mx-6 md:mb-9 md:gap-[11px] lg:gap-[30px] lg:mt-8 lg:mb-6 lg:mx-8 xl:mx-auto xl:w-3/4">
      {Object.entries(info).map(([title, value]) => {
        return <PlanetFooterInfo key={title} title={title} value={value} />;
      })}
    </footer>
  );
});
