import { component$, useContext } from "@builder.io/qwik";
import CardInfo from "../card-info";
import { planetContextNoe } from "../../context/PlanetContext";

export default component$(() => {
  const planet = useContext(planetContextNoe).data;

  const info = {
    "ROTATION TIME": planet?.rotation,
    "REVOLUTION TIME": planet?.revolution,
    RADIUS: planet?.radius,
    "AVERAGE TEMP.": planet?.temperature
  };

  return (
    <section class="flex flex-col justify-center items-center gap-2 text-white col-span-12 mt-7 mb-12 md:flex-row md:mx-6 md:mb-9 md:gap-[11px] lg:gap-[30px] lg:mt-12 lg:mb-14 lg:mx-8 xl:mx-auto xl:w-3/4">
      {Object.entries(info).map(([title, value]) => {
        return <CardInfo key={title} title={title} value={value} />;
      })}
    </section>
  );
});
