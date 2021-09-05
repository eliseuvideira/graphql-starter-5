import { createModel } from "@ev-postgres/model";

export interface PlayerProps {
  playerId?: number;
  name: string;
  country: string;
  signatureHeroes: string[];
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PlayerPropsPrimary {
  playerId: number;
}

export const Player = createModel<PlayerProps, PlayerPropsPrimary>(
  "owl.players",
  ({ playerId }) => ({ playerId })
);
