import { gql } from "apollo-server";

export default gql`
  type Query {
    board: Board
    boards: [Board!]!
    labels: [Label!]!
    orgs: [Org!]!
    users: [User!]!
  }

  type Board {
    id: ID!
    title: String!
    columns: [Column!]!
    permissions: [Permission!]!
    owner: User!
    org: Org
  }

  type Column {
    id: ID!
    title: String!
    cards: [Card!]!
  }

  type Card {
    id: ID!
    title: String!
    description: String!
    labels: [Label!]!
    checklists: [Checklist!]!
  }

  type Label {
    id: ID!
    title: String!
    description: String!
    color: String!
  }

  type Checklist {
    id: ID!
    title: String
    items: [ChecklistItem!]!
  }

  type ChecklistItem {
    id: ID!
    title: String!
    isComplete: Boolean!
  }

  type Permission {
    id: ID!
    board: Board!
    user: User
    org: Org
    view: Boolean!
    edit: Boolean!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    boards: [Board!]!
    memberOf: [Org!]!
  }

  type Org {
    id: ID!
    name: String!
    owner: User!
    members: [User!]!
    boards: [Board!]!
  }
`;
