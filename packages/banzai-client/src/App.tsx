import React from "react";
import * as R from "rebass";

import { BoardContainer } from "./components/Board/BoardContainer";

export const App: React.FC = () => (
  <R.Flex className="App" flexDirection="column" p={5}>
    <header>
      <R.Heading>Banzai: Kanban on Crack</R.Heading>
    </header>
    <BoardContainer />
  </R.Flex>
);
