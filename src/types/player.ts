export enum Roles {
  Goalkeeper,
  'Centre-Backs',
  'Full-Backs',
  'Wing-Backs',
  'Defensive Midfielders',
  'Central Midfielders',
  'Attacking Midfielders',
  Wingers,
  'Inside Forwards',
  'Strikers',
}

export type player = {
  _id: string;
  name: string;
  surname: string;
  age: number;
  role: Roles;
  club: string;
  image: string;
};
