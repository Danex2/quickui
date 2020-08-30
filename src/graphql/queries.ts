/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUi = /* GraphQL */ `
  query GetUi($id: ID!) {
    getUI(id: $id) {
      id
      title
      class
      role
      code
      description
      createdOn
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
        class
        role
        code
        description
        createdOn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const uiByClassByRole = /* GraphQL */ `
  query UiByClassByRole(
    $class: String
    $role: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uiByClassByRole(
      class: $class
      role: $role
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        class
        role
        code
        description
        createdOn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const uiByDate = /* GraphQL */ `
  query UiByDate(
    $createdOn: AWSDateTime
    $sortDirection: ModelSortDirection
    $filter: ModelUIFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uiByDate(
      createdOn: $createdOn
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        class
        role
        code
        description
        createdOn
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
