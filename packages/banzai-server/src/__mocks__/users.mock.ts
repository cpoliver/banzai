import { generate as id } from "shortid";

// @ts-ignore
export const users = {
  charlie: {
    id: id(),
    name: "Charlie",
    email: "charlie@cpoliver.com",
    boards: [],
    memberOf: [],
  },
  jason: {
    id: id(),
    name: "Jason",
    email: "jason@cloudthing.com",
    boards: [],
    memberOf: [],
  },
  phoebe: {
    id: id(),
    name: "Phoebe",
    email: "phoebe@cpoliver.com",
    boards: [],
    memberOf: [],
  },
};
