import { PlanetImage, PlanetWrapper, PlanetFooter, PlanetTabs } from "./index";
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="text-white grid grid-cols-12 gap-4 gap-y-0 mt-[69px] md:gap-y-0 md:mt-0 md:mx-6 lg:gap-y-0 lg:gap-8 lg:mx-8">
      <PlanetTabs />
      <PlanetImage />
      <PlanetWrapper />
      <PlanetFooter />
    </main>
  );
});
