import type { Planet } from "./planet";

export interface PlanetContextProps {
  data: Planet | null;
  showMenu: boolean;
  selectedPlanet: string;
  selectedCharacteristic: string;
}
