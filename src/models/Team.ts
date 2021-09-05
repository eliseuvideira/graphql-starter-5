import { createModel } from "@ev-postgres/model";

export interface TeamProps {
  teamId?: number;
  name: string;
  city: string;
  location: string;
  region: string;
  colors: string[];
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TeamPropsPrimary {
  teamId: number;
}

export const Team = createModel<TeamProps, TeamPropsPrimary>(
  "owl.teams",
  ({ teamId }) => ({ teamId })
);
