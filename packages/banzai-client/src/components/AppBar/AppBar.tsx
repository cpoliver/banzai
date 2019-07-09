import React from "react";
import * as R from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

interface AppBarProps {
  title: string;
}

export const AppBar: React.FC<AppBarProps> = ({ title }) => (
  <R.Flex backgroundColor="#151515" p={2} marginBottom={2} alignItems="center">
    <R.Box p={2} flex={1}>
      <R.Heading>{title}</R.Heading>
    </R.Box>
    <R.Box flex={1}>{/* spacer */}</R.Box>
    <R.Box flex={2} backgroundColor="#1A1A1A" p={2}>
      <R.Flex alignItems="center">
        <R.Box paddingRight={2} paddingLeft={1}>
          <FontAwesomeIcon size="1x" color="#8A8A8A" icon={faSearch} />
        </R.Box>
        <R.Box paddingRight={2}>
          <input
            type="text"
            placeholder="search"
            style={{ display: "flex", border: "none" }}
          />
        </R.Box>
      </R.Flex>
    </R.Box>
    <R.Box flex={1}>{/* spacer */}</R.Box>
    <R.Flex p={2} flex={1}>
      <FontAwesomeIcon size="lg" color="#8A8A8A" icon={faUser} />
      <R.Text fontWeight="bold" fontSize={1} paddingLeft={2} paddingRight={4}>
        Charles
      </R.Text>
    </R.Flex>
  </R.Flex>
);
