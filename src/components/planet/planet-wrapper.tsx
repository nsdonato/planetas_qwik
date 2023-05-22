import InfoContent from "./planet-info";
import PlanetButton from "./planet-button";
import { component$, useContext } from "@builder.io/qwik";
import { planetContextNoe } from "../../context/PlanetContext";

export default component$(() => {
  const infoContext = useContext(planetContextNoe);
  const planet = infoContext.data;
  const planetName = infoContext?.data?.name || infoContext.selectedPlanet;
  const charName = infoContext.selectedCharacteristic;

  const dataButtons = {
    overview: planet?.overview,
    "internal-structure": planet?.structure,
    "surface-geology": planet?.geology
  };

  const [characteristicName, dataCharacteristic] = Object.entries(
    dataButtons
  ).filter(([title, value]) => title === charName && value)[0];

  return (
    <div class="col-span-12 md:grid md:grid-cols-12 md:gap-4 lg:col-span-5 lg:gap-0 lg:py-8 lg:px-4">
      <InfoContent
        dataCharacteristic={dataCharacteristic}
        namePlanet={planetName}
      />
      <PlanetButton
        characteristicName={characteristicName}
        dataButtons={dataButtons}
        name={planet?.name}
      />
    </div>
  );
});
