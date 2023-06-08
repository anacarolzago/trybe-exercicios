type PlanetCardProps = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div data-testid="planet-card">
      <img src={planetImage} alt={`Planeta ${planetName}`} />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
