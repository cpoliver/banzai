import * as React from "react";
import { useBoardsQuery } from "../../generated/graphql";
import { BoardPicker } from "./BoardPicker";

export const BoardPickerContainer = () => {
  const { data, error, loading } = useBoardsQuery();

  if (loading) {
    return <div>Loading&hellip;</div>;
  }

  if (error || !data) {
    return <div>Error!</div>;
  }

  return <BoardPicker data={data} />;
};
