import PlanetImage from "./planet-image";
import PlanetInfo from "./planet-wrapper";
import PlanetCardInfo from "./planet-cardInfo";
import PlanetTabs from "./planet-tabs";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="text-white grid grid-cols-12 gap-4 gap-y-0 mt-[69px] md:gap-y-0 md:mt-0 md:mx-6 lg:gap-y-0 lg:gap-8 lg:mx-8">
      <PlanetTabs />
      <PlanetImage />
      <PlanetInfo />
      <PlanetCardInfo />
    </section>
  );
});
