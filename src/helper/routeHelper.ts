import type { RequestEvent } from "@builder.io/qwik-city";
import { planets } from "../models";

export const verifyPath = (requestEvent: RequestEvent) => {
  const planetsNames = planets.map((planet) => `/planet/${planet.name}/`);
  const pathToCheck = [...planetsNames];
  let route = requestEvent.url.pathname;

  if (requestEvent.url.pathname.includes("json")) {
    const planetName = requestEvent.url.pathname.split("/")[2];
    route = `/planet/${planetName}/`;
  }

  const wrongPath = !pathToCheck.includes(route);

  if (wrongPath) {
    throw requestEvent.redirect(302, "/planet/jupiter");
  }
};
