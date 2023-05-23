import { component$, useContext } from "@builder.io/qwik";
import { planetContextNoe } from "../context/PlanetContext";

interface ButtonProp {
  title: string;
  name: string;
  characteristicName: string;
  index: number;
}

export default component$<ButtonProp>(
  ({ title, name, characteristicName, index }) => {
    const infoContext = useContext(planetContextNoe);

    return (
      <button
        class={`text-white ${
          characteristicName === title
            ? `bg-${name?.toLowerCase()} hover:bg-${name?.toLowerCase()}`
            : "hover:bg-darkGray/20"
        } uppercase flex items-center border border-gray py-2 px-5 md:w-[261px] lg:w-10/12 lg:py-3 lg:px-7 xl:w-7/12`}
        onClick$={() => {
          infoContext.selectedCharacteristic = title;
        }}
      >
        <span class="font-spartan font-bold mr-4 text-white/50 tracking-1.93 text-9 leading-25 lg:mr-7 lg:text-12 lg:tracking-2.57">
          {`0${index + 1}`}
        </span>
        <h3 class="font-spartan font-bold text-9 leading-25 tracking-1.93 lg:text-12 lg:tracking-2.57">
          {title?.replace("-", " ")}
        </h3>
      </button>
    );
  }
);
