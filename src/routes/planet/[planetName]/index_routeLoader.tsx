import { component$, useContext } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { ServicePlanets } from "../../../service/planet";
import { planetContextNoe } from "../../../context/PlanetContext";
import { PlanetMain, LoadingPlanet } from "../../../components/planet";
import { verifyPath } from "../../../helper/routeHelper";

export const onGet: RequestHandler = async (requestEvent) => {
  verifyPath(requestEvent);
};

export const useProductDetails = routeLoader$(async (requestEvent) => {
  return await ServicePlanets.get(requestEvent.params.planetName);
});

export default component$(() => {
  const infoContext = useContext(planetContextNoe);
  const planetResource = useProductDetails();
  infoContext.data = planetResource.value;

  return planetResource.value ? <PlanetMain /> : <LoadingPlanet />;
});
