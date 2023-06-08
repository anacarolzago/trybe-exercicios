import Title from "./Title";
import MissionCard from "./MissionCard";

import missions from "../data/missions";

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <ul>
        {missions.map((mission) => (
          <MissionCard
            name={mission.name}
            year={mission.year}
            country={mission.country}
            destination={mission.destination}
            key={mission.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default Missions;
