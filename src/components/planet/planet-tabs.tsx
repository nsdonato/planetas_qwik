import Line from "../line";
import Tab from "../Tab";
import { component$, useContext } from "@builder.io/qwik";
import { planetContextNoe } from "../../context/PlanetContext";

const dataTabs = {
  overview: "overview",
  "internal-structure": "structure",
  "surface-geology": "geology"
};

export default component$(() => {
  const infoContext = useContext(planetContextNoe);
  const charName = infoContext.selectedCharacteristic;
  const planetName = infoContext.selectedPlanet;

  const borderTab = Object.values(dataTabs).filter(
    (titleTab) => charName.includes(titleTab) && titleTab
  )[0];

  return (
    <div class="flex col-span-12 flex-col md:hidden">
      <div class="flex justify-between items-center px-6">
        {Object.entries(dataTabs).map(([characteristicPath, titleTab]) => {
          return (
            <Tab
              key={titleTab}
              borderTab={borderTab}
              titleTab={titleTab}
              namePlanet={planetName}
              characteristicPath={characteristicPath}
            />
          );
        })}
      </div>
      <Line />
    </div>
  );
});
