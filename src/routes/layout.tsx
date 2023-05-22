import {
  Resource,
  component$,
  useContextProvider,
  useResource$,
  useStore
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
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
  const signal = useStore({ ...initialValue });
  useContextProvider(planetContextNoe, signal);

  const planetResource = useResource$(({ track }) => {
    track(() => signal);
    return ServicePlanets.get(signal.selectedPlanet);
  });

  return (
    <>
      <MenuPlanets />
      <Resource
        value={planetResource}
        onPending={() => <LoadingPlanet />}
        onRejected={(error) => <>Error: {error.message}</>}
        onResolved={(data) => {
          signal.data = data;
          return <PlanetMain />;
        }}
      />
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
