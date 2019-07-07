import React from "react";
import * as R from "rebass";

import { BoardContainer } from "./components/Board/BoardContainer";
import { AppBar } from "./components/AppBar/AppBar";

export const App: React.FC = () => (
  <R.Flex className="App" flexDirection="column" p={5}>
    <AppBar title="Banzai" />
    <BoardContainer />
  </R.Flex>
);
