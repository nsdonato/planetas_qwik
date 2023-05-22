import type { Planet } from "./planet";

export interface PlanetContextProps {
  data: Planet | null;
  isError: boolean;
  showMenu: boolean;
  errorMessage: string;
  selectedPlanet: string;
  selectedCharacteristic: string;
}
