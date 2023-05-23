import {
  Resource,
  component$,
  useContext,
  useResource$
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { ServicePlanets } from "../../../service/planet";
import { planetContextNoe } from "../../../context/PlanetContext";
import { PlanetMain, LoadingPlanet } from "../../../components/planet";
import { verifyPath } from "../../../helper/routeHelper";

export const onGet: RequestHandler = async (requestEvent) => {
  verifyPath(requestEvent);
};

export default component$(() => {
  const infoContext = useContext(planetContextNoe);
  const loc = useLocation();

  const planetResource = useResource$(async ({ track }) => {
    const planetName = track(() => loc.params.planetName);
    const resp = await ServicePlanets.get(planetName);
    infoContext.data = resp;
    return infoContext.data;
  });

  return (
    <Resource
      value={planetResource}
      onPending={() => <LoadingPlanet />}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(resp) => {
        infoContext.data = resp;
        return <PlanetMain />;
      }}
    />
  );
});
