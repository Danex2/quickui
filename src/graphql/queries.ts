/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUi = /* GraphQL */ `
  query GetUi($id: ID!) {
    getUI(id: $id) {
      id
      title
      characterClass
      roles
      code
      description
      images
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listUIs = /* GraphQL */ `
  query ListUIs($filter: ModelUIFilterInput, $limit: Int, $nextToken: String) {
    listUIs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        characterClass
        roles
        code
        description
        images
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const uiByClass = /* GraphQL */ `
  query UiByClass(
    $characterClass: String
    $sortDirection: ModelSortDirection
    $filter: ModelUIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uiByClass(
      characterClass: $characterClass
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        characterClass
        roles
        code
        description
        images
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const uiByRole = /* GraphQL */ `
  query UiByRole(
    $roles: Role
    $sortDirection: ModelSortDirection
    $filter: ModelUIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uiByRole(
      roles: $roles
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        characterClass
        roles
        code
        description
        images
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
