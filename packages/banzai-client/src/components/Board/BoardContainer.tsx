import * as React from "react";
import { useBoardsQuery } from "../../generated/graphql";
import { Board } from "./Board";

export const BoardContainer = () => {
  const { data, error, loading } = useBoardsQuery();

  if (loading) {
    return <div>Loading&hellip;</div>;
  }

  if (error || !data) {
    return <div>Error!</div>;
  }

  return <Board data={data} />;
};
