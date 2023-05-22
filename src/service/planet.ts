import type { Planet } from "../types/planet";

const URL = "https://api-planets.onrender.com/api/planet";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const ServicePlanets = {
  get: async function (name: string): Promise<Planet> {
    try {
      const response = await fetch(`${URL}/${name}`);
      const data = await response.json();
      return data as Planet;
    } catch (e) {
      throw new Error(getErrorMessage(e));
    }
  }
};
