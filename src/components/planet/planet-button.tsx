import type { ContentPlanet } from "../../types/planet";
import Button from "../button";
import { component$ } from "@builder.io/qwik";

interface PlanetButtonProps {
  name: string;
  dataButtons: {
    [key: string]: ContentPlanet;
  };
  characteristicName: string;
}

export default component$<PlanetButtonProps>(
  ({ name, dataButtons, characteristicName }) => (
    <div class="hidden px-6 md:flex md:col-span-5 md:px-0 md:flex-col md:justify-center md:gap-4 md:items-start lg:col-span-12 lg:justify-start lg:mt-10">
      {Object.keys(dataButtons).map((title, index) => {
        return (
          <Button
            key={title}
            title={title}
            index={index}
            name={name}
            characteristicName={characteristicName}
          />
        );
      })}
    </div>
  )
);
