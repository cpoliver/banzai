import { generate as id } from "shortid";

import { labels } from "./labels.mock";
import { orgs } from "./orgs.mock";
import { users } from "./users.mock";

const banzaiColumns = [
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
    title: "Blocked",
    id: id(),
    cards: [
      {
        id: id(),
        title: "deploy mvp to cloud",
        labels: [labels.dev],
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

const englishColumns = [
  {
    title: "Todo",
    id: id(),
    cards: [
      {
        id: id(),
        title: "next term lesson plan",
        labels: [],
      },
      {
        id: id(),
        title: "email tutor",
        labels: [],
      },
    ],
  },
  {
    title: "Doing",
    id: id(),
    cards: [
      {
        id: id(),
        title: "upload evidence",
        labels: [],
      },
    ],
  },
  {
    title: "Done",
    id: id(),
    cards: [
      {
        id: id(),
        title: "read kafka's metamorphosis",
        labels: [],
      },
      {
        id: id(),
        title: "compile bibliography",
        labels: [],
      },
    ],
  },
];

// @ts-ignore
export const boards = {
  banzai: {
    id: id(),
    title: "Trello Replacement for Power-Users",
    columns: banzaiColumns,
    owner: users.charlie,
    org: orgs.cocoa,
    permissions: [],
  },
  english: {
    id: id(),
    title: "TeachFirst English Assignment",
    columns: englishColumns,
    owner: users.phoebe,
    org: null,
    permissions: [],
  },
};
