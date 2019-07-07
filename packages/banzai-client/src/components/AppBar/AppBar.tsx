import React from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { BoardQuery } from "../../generated/graphql";
import { Column } from "../Column/Column";

interface AppBarProps {
  title: string;
}

export const AppBar: React.FC<AppBarProps> = ({ title }) => (
  <R.Flex backgroundColor="#333" p={2} marginBottom={2}>
    <R.Box>
      <R.Heading>{title}</R.Heading>
    </R.Box>
    <R.Box flex={1}>{/* spacer */}</R.Box>
    <R.Box backgroundColor="#1A1A1A" p={2}>
      <input
        type="text"
        placeholder="search"
        style={{ display: "flex", border: "none" }}
      />
    </R.Box>
    <R.Flex p={2}>
      <FontAwesomeIcon size="lg" color="#8A8A8A" icon={faUser} />
      <R.Text>profile</R.Text>
    </R.Flex>
  </R.Flex>
);
