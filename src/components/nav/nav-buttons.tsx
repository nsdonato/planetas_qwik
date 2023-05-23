import ImageIcon from "../image-icon";
import Line from "../line";
import { planets } from "../../models";
import {
  Fragment,
  component$,
  useContext,
  useVisibleTask$
} from "@builder.io/qwik";
import { planetContextNoe } from "../../context/PlanetContext";
import type { MenuPlanetItem } from "../../types";
import { useNavigate } from "@builder.io/qwik-city";

interface NavButtonsProps {
  styles: string;
  toggleMenu: () => {};
}
export default component$<NavButtonsProps>(({ styles }) => {
  const infoContext = useContext(planetContextNoe);
  const nav = useNavigate();

  useVisibleTask$(({ track }) => {
    track(() => infoContext.selectedPlanet);
  });

  return (
    <nav class={styles}>
      <ul class="w-full mr-2">
        {planets.map((p: MenuPlanetItem) => {
          return (
            <Fragment key={p.name}>
              <li class="hover:bg-darkGray/20">
                <button
                  onClick$={async () => {
                    infoContext.selectedPlanet = p.name;
                    await nav(`/planet/${p.name}`);
                    infoContext.showMenu = false;
                  }}
                  class="w-full py-5 flex items-center uppercase justify-between text-white"
                >
                  <div class="flex items-center">
                    <ImageIcon
                      src={`/assets/oval-${p.name}.svg`}
                      styles="h-5 w-5 rounded-full mr-6"
                      altImage={p.name}
                    />
                    <h4 class="font-spartan text-white font-bold text-15 leading-25 tracking-1.36">
                      {p.name}
                    </h4>
                  </div>
                  <ImageIcon
                    src="/assets/arrow-right.svg"
                    styles="h-3 w-3"
                    altImage="arrow-menu"
                  />
                </button>
              </li>
              <Line styles="last:hidden" />
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
});
