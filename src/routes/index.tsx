// import {
//   Resource,
//   component$,
//   useContext,
//   useResource$
// } from "@builder.io/qwik";
// import { ServicePlanets } from "../service/planet";
// import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
// import LoadingPlanet from "../components/loading-planet";
// import PlanetMain from "../components/planet/planet-main";
// import { planetContextNoe } from "../context/PlanetContext";

// export const useGetPlanet = routeLoader$(async (route) => {
//   const planetName = route.params?.planetName ?? "jupiter";
//   const planetResource = await ServicePlanets.get(planetName);
//   console.log("planetResource", planetResource);
//   return planetResource;
// });

// export default component$(() => {
//   const infoContext = useContext(planetContextNoe);
//   const planetName = infoContext.selectedPlanet;

//   const planetResource = useResource$(({ track }) => {
//     track(() => {
//       return () => {
//         infoContext.data, infoContext.selectedPlanet;
//       };
//     });

//     return ServicePlanets.get(planetName);
//   });

//   return (
//     <>
//       <Resource
//         value={planetResource}
//         onPending={() => <LoadingPlanet />}
//         onRejected={(error) => <>Error: {error.message}</>}
//         onResolved={(data) => {
//           infoContext.data = data;
//           return <PlanetMain />;
//         }}
//       />
//     </>
//   );
// });

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div>Hello World</div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Planets App",
  meta: [
    {
      name: "description",
      content: "Planets App - Qwik"
    }
  ]
};
