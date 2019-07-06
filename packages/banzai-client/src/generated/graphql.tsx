import gql from "graphql-tag";
export type Maybe<T> = T | null;
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
  testMessage: Scalars["String"];
  boards: Array<Board>;
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
