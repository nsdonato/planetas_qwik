import {
  Slot,
  component$,
  useContextProvider,
  useStore
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import MenuPlanets from "../components/planet/planet-menu";
import { planetContextNoe } from "../context/PlanetContext";
import type { PlanetContextProps } from "../types/context";
import type { RequestHandler } from "@builder.io/qwik-city";

const initialValue: PlanetContextProps = {
  data: null,
  showMenu: false,
  selectedPlanet: "jupiter",
  selectedCharacteristic: "overview"
};

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5
  });
};

export default component$(() => {
  const signal = useStore({ ...initialValue });
  useContextProvider(planetContextNoe, signal);

  return (
    <>
      <MenuPlanets />
      <Slot />
    </>
  );
});

export const capitlize = (planetName: string) => {
  return planetName[0].toUpperCase() + planetName.slice(1);
};

export const head: DocumentHead = ({ params }) => {
  const planetName = capitlize(params.planetName);
  return {
    title: `${planetName}`,
    meta: [
      {
        name: "description",
        content: `Facts about planet ${planetName}`
      }
    ]
  };
};
