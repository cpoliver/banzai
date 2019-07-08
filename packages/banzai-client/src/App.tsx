import React from "react";
import { Helmet } from "react-helmet";
import * as R from "rebass";

import { BoardContainer } from "./components/Board/BoardContainer";
import { AppBar } from "./components/AppBar/AppBar";

export const App: React.FC = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans|Oxygen:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <R.Flex flexDirection="column" p={3}>
      <AppBar title="Banzai" />
      <BoardContainer />
    </R.Flex>
  </>
);
