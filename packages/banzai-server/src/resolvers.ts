import { values } from "ramda";
import { generate as id } from "shortid";

const labels = {
  dev: {
    id: id(),
    title: "Development",
    color: "#0019FF",
  },
  design: {
    id: id(),
    title: "Design",
    color: "#DB00FF",
  },
  planning: {
    id: id(),
    title: "Planning",
    color: "#00E168",
  },
};

const columns = [
  {
    title: "Todo",
    id: id(),
    cards: [
      {
        id: id(),
        title: "create persistence layer",
        labels: [labels.dev],
      },
      {
        id: id(),
        title: "find styled-components ui kit",
        labels: [labels.dev, labels.design],
      },
      {
        id: id(),
        title: "configure lerna",
        labels: [labels.dev],
      },
      {
        id: id(),
        title: "configure linting/formatting",
        labels: [labels.dev],
      },
      {
        id: id(),
        title: "plan features",
        labels: [labels.planning],
      },
    ],
  },
  {
    title: "Doing",
    id: id(),
    cards: [
      {
        id: id(),
        title: "create basic components",
        labels: [labels.dev],
      },
      {
        id: id(),
        title: "create mock data",
        labels: [labels.dev],
      },
    ],
  },
  {
    title: "Done",
    id: id(),
    cards: [
      {
        id: id(),
        title: "create schema",
        labels: [labels.dev],
      },
      {
        id: id(),
        title: "create wireframes",
        labels: [labels.design],
      },
      {
        id: id(),
        title: "create monorepo",
        labels: [labels.dev],
      },
    ],
  },
];

const user = {
  id: id(),
  name: "Charlie",
  email: "cpoliver@gmail.com",
  boards: [],
  memberOf: [],
};

const org = {
  id: id(),
  name: "cloudThing",
  owner: user,
  boards: [],
  members: [user],
};

const board = {
  id: id(),
  title: "Trello Replacement for Power-Users",
  columns,
  owner: user,
  org,
  permissions: [],
};

export const resolvers = {
  Query: {
    board: (): any => board,
    // boards: (): any => [board],
    labels: (): any[] => values(labels),
    users: (): any[] => [user],
  },
};
