import * as React from "react";
import { useBoardQuery } from "../../generated/graphql";
import { Board } from "./Board";
import { BoardBar } from "./BoardBar";

export const BoardContainer = () => {
  const { data, error, loading } = useBoardQuery({
    variables: { id: "banzai" },
  });

  if (loading) {
    return <div>Loading&hellip;</div>;
  }

  if (error || !data || !data.board) {
    return <div>Error!</div>;
  }

  return (
    <>
      <Board data={data} />
      <BoardBar data={data} />
    </>
  );
};
