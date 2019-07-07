import { values } from "ramda";

import { boards } from "./__mocks__/boards.mock";
import { labels } from "./__mocks__/labels.mock";
import { orgs } from "./__mocks__/orgs.mock";
import { users } from "./__mocks__/users.mock";

export const resolvers = {
  Query: {
    board: (): any => boards.banzai,
    boards: (): any => values(boards),
    labels: (): any => values(labels),
    orgs: (): any => values(orgs),
    users: (): any => values(users),
  },
};
