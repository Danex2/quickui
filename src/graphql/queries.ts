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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
