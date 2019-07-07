import { generate as id } from "shortid";

import { users } from "./users.mock";

// @ts-ignore
export const orgs = {
  cloudThing: {
    id: id(),
    name: "cloudThing",
    owner: users.jason,
    boards: [],
    members: [users.charlie, users.jason],
  },
  cocoa: {
    id: id(),
    name: "Cocoa Consulting",
    owner: users.charlie,
    boards: [],
    members: [users.charlie, users.phoebe],
  },
  teachFirst: {
    id: id(),
    name: "TeachFirst",
    owner: users.phoebe,
    boards: [],
    members: [users.phoebe],
  },
};
