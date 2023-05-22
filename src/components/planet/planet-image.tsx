import { component$, useContext } from "@builder.io/qwik";
import { planetContextNoe } from "../../context/PlanetContext";

export default component$(() => {
  const infoContext = useContext(planetContextNoe);
  const planet = infoContext?.data;

  const charName = infoContext.selectedCharacteristic;

  const planetImages = planet?.images;
  const planetGeologyImages = planetImages?.geology;

  const dataImages = {
    overview: planetImages?.planet,
    "internal-structure": planetImages?.internal,
    "surface-geology": planetImages?.planet
  };

  const [characteristicName, images] = Object.entries(dataImages).filter(
    ([title, value]) => charName.includes(title) && value
  )[0];

  return (
    <div class="grid col-span-12 h-[260px] md:h-[426px] lg:col-span-7 lg:h-[670px] relative">
      <picture class="flex items-center justify-center">
        <source srcSet={images?.large} media="(min-width: 1024px)"></source>
        <source srcSet={images?.medium} media="(min-width: 768px)"></source>
        <img src={images?.small} alt={planet?.name} />
      </picture>
      {characteristicName === "surface-geology" && (
        <picture class="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <source
            srcSet={planetGeologyImages?.large}
            media="(min-width: 1024px)"
          ></source>
          <source
            srcSet={planetGeologyImages?.medium}
            media="(min-width: 768px)"
          ></source>
          <img src={planetGeologyImages?.small} alt={charName} />
        </picture>
      )}
    </div>
  );
});
