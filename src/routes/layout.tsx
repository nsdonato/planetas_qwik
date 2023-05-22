import {
  Resource,
  Slot,
  component$,
  useContextProvider,
  useResource$,
  useStore
} from "@builder.io/qwik";
import { type DocumentHead, useLocation } from "@builder.io/qwik-city";
import MenuPlanets from "../components/planet/planet-menu";
import { planetContextNoe } from "../context/PlanetContext";
import type { PlanetContextProps } from "../types/context";
import LoadingPlanet from "../components/loading-planet";
import PlanetMain from "../components/planet/planet-main";
import { ServicePlanets } from "../service/planet";

const initialValue: PlanetContextProps = {
  data: null,
  isError: false,
  showMenu: false,
  errorMessage: "",
  selectedPlanet: "jupiter",
  selectedCharacteristic: "overview"
};

export default component$(() => {
  const loc = useLocation();
  const signal = useStore({ ...initialValue });
  useContextProvider(planetContextNoe, signal);

  const planetResource = useResource$(async ({ track }) => {
    const planetName = track(() => signal.selectedPlanet);
    const resp = await ServicePlanets.get(planetName);
    signal.data = resp;
    signal.selectedPlanet = planetName;
    return signal.data;
  });

  return (
    <>
      <MenuPlanets />
      {!loc.params?.planetName ? (
        <Resource
          value={planetResource}
          onPending={() => <LoadingPlanet />}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(resp) => {
            signal.data = resp;
            return <PlanetMain />;
          }}
        />
      ) : (
        <Slot />
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik - Planets App",
  meta: [
    {
      name: "description",
      content: "Planetas App"
    }
  ]
};
