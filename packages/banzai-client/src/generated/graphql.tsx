import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Board = {
  __typename?: "Board";
  id: Scalars["ID"];
  title: Scalars["String"];
  columns: Array<Column>;
  permissions: Array<Permission>;
  owner: User;
  org?: Maybe<Org>;
};

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

export type Card = {
  __typename?: "Card";
  id: Scalars["ID"];
  title: Scalars["String"];
  description: Scalars["String"];
  labels: Array<Label>;
  checklists: Array<Checklist>;
};

export type Checklist = {
  __typename?: "Checklist";
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  items: Array<ChecklistItem>;
};

export type ChecklistItem = {
  __typename?: "ChecklistItem";
  id: Scalars["ID"];
  title: Scalars["String"];
  isComplete: Scalars["Boolean"];
};

export type Column = {
  __typename?: "Column";
  id: Scalars["ID"];
  title: Scalars["String"];
  cards: Array<Card>;
};

export type Label = {
  __typename?: "Label";
  id: Scalars["ID"];
  title: Scalars["String"];
  description: Scalars["String"];
  color: Scalars["String"];
};

export type Org = {
  __typename?: "Org";
  id: Scalars["ID"];
  name: Scalars["String"];
  owner: User;
  members: Array<User>;
  boards: Array<Board>;
};

export type Permission = {
  __typename?: "Permission";
  id: Scalars["ID"];
  board: Board;
  user?: Maybe<User>;
  org?: Maybe<Org>;
  view: Scalars["Boolean"];
  edit: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  board?: Maybe<Board>;
  labels: Array<Label>;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  name: Scalars["String"];
  boards: Array<Board>;
  memberOf: Array<Org>;
};
export type CardFragment = { __typename?: "Card" } & Pick<Card, "id" | "title">;

export type ColumnFragment = { __typename?: "Column" } & Pick<
  Column,
  "id" | "title"
> & { cards: Array<{ __typename?: "Card" } & CardFragment> };

export type BoardFragment = { __typename?: "Board" } & Pick<Board, "title"> & {
    columns: Array<{ __typename?: "Column" } & ColumnFragment>;
  };

export type BoardQueryVariables = {};

export type BoardQuery = { __typename?: "Query" } & {
  board: Maybe<{ __typename?: "Board" } & BoardFragment>;
};
export const CardFragmentDoc = gql`
  fragment Card on Card {
    id
    title
  }
`;
export const ColumnFragmentDoc = gql`
  fragment Column on Column {
    id
    title
    cards {
      ...Card
    }
  }
  ${CardFragmentDoc}
`;
export const BoardFragmentDoc = gql`
  fragment Board on Board {
    title
    columns {
      ...Column
    }
  }
  ${ColumnFragmentDoc}
`;
export const BoardDocument = gql`
  query Board {
    board {
      ...Board
    }
  }
  ${BoardFragmentDoc}
`;
export type BoardComponentProps = Omit<
  ReactApollo.QueryProps<BoardQuery, BoardQueryVariables>,
  "query"
>;

export const BoardComponent = (props: BoardComponentProps) => (
  <ReactApollo.Query<BoardQuery, BoardQueryVariables>
    query={BoardDocument}
    {...props}
  />
);

export type BoardProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<BoardQuery, BoardQueryVariables>
> &
  TChildProps;
export function withBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    BoardQuery,
    BoardQueryVariables,
    BoardProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    BoardQuery,
    BoardQueryVariables,
    BoardProps<TChildProps>
  >(BoardDocument, {
    alias: "withBoard",
    ...operationOptions
  });
}

export function useBoardQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<BoardQueryVariables>
) {
  return ReactApolloHooks.useQuery<BoardQuery, BoardQueryVariables>(
    BoardDocument,
    baseOptions
  );
}
