import {
  Resource,
  component$,
  useContext,
  useResource$
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { ServicePlanets } from "../../../service/planet";
import LoadingPlanet from "../../../components/loading-planet";
import { planetContextNoe } from "../../../context/PlanetContext";
import PlanetMain from "../../../components/planet/planet-main";

export default component$(() => {
  const loc = useLocation();
  const infoContext = useContext(planetContextNoe);

  const planetResource = useResource$(async ({ track }) => {
    const planetName = track(() => loc.params.planetName);
    const resp = await ServicePlanets.get(planetName);
    infoContext.data = resp;
    infoContext.selectedPlanet = planetName;
    return infoContext.data;
  });

  return (
    <Resource
      value={planetResource}
      onPending={() => <LoadingPlanet />}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(resp) => {
        console.log("resp", resp);
        infoContext.data = resp;
        return <PlanetMain />;
      }}
    />
  );
});
