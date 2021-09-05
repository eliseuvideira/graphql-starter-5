import { createModel } from "@ev-postgres/model";

export interface TeamPlayerProps {
  teamId: number;
  playerId: number;
}

export interface TeamPlayerPropsPrimary {
  teamId: number;
  playerId: number;
}

export const TeamPlayer = createModel<TeamPlayerProps, TeamPlayerPropsPrimary>(
  "owl.teamsPlayers",
  ({ teamId, playerId }) => ({ teamId, playerId })
);
