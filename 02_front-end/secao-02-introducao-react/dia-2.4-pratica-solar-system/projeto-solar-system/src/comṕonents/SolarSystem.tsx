import Title from "./Title";
import PlanetCard from "./PlanetCard";

import planets from "../data/planets";

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />

      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>
            <PlanetCard planetName={planet.name} planetImage={planet.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SolarSystem;
