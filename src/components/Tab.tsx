import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { planetContextNoe } from "../context/PlanetContext";

interface TabProp {
  titleTab: string;
  namePlanet: string;
  characteristicPath: string;
  borderTab: string;
}

export default component$<TabProp>(
  ({ titleTab, namePlanet, characteristicPath, borderTab }) => {
    const infoContext = useContext(planetContextNoe);

    useVisibleTask$(async ({ track }) => {
      track(() => infoContext.selectedCharacteristic);
    });

    return (
      <button
        onClick$={() => {
          infoContext.selectedCharacteristic = titleTab;
        }}
        class={`uppercase font-spartan text-9 tracking-1.93 leading-normal font-bold py-5 ${
          characteristicPath.includes(borderTab)
            ? `border-b-4 border-${namePlanet.toLowerCase()}`
            : "text-gray-light hover:text-white"
        }`}
      >
        {titleTab}
      </button>
    );
  }
);
