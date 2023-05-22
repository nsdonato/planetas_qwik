import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { planetContextNoe } from "../../context/PlanetContext";
import { planets } from "../../models";
import type { ClassProps, MenuPlanetItem } from "../../types";
import { useNavigate } from "@builder.io/qwik-city";

type NavHeaderProps = ClassProps;

export default component$<NavHeaderProps>(({ styles = "" }) => {
  const infoContext = useContext(planetContextNoe);
  const nav = useNavigate();

  useVisibleTask$(async ({ track }) => {
    track(() => infoContext);

    await nav("/");
  });

  return (
    <>
      {infoContext.selectedPlanet && (
        <nav class={styles}>
          <ul class="flex">
            {planets.map((p: MenuPlanetItem) => {
              return (
                <li
                  key={p.name}
                  class={`${
                    p.name === infoContext.selectedPlanet?.toLowerCase()
                      ? `border-t-4 border-${p.name} md:pt-1 lg:pt-[29px]`
                      : "md:pt-2 lg:pt-[33px]"
                  } mx-4 first:ml-0 last:mr-0 font-spartan font-bold leading-25 tracking-1 lg:pb-[7px]`}
                >
                  <button
                    onClick$={() => {
                      infoContext.selectedPlanet = p.name;
                      infoContext.selectedCharacteristic = "overview";
                    }}
                    class="text-11 text-white/75 uppercase hover:text-white cursor-pointer"
                  >
                    {p.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
});
