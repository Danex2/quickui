/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUi = /* GraphQL */ `
  mutation CreateUi($input: CreateUIInput!, $condition: ModelUIConditionInput) {
    createUI(input: $input, condition: $condition) {
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
export const updateUi = /* GraphQL */ `
  mutation UpdateUi($input: UpdateUIInput!, $condition: ModelUIConditionInput) {
    updateUI(input: $input, condition: $condition) {
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
export const deleteUi = /* GraphQL */ `
  mutation DeleteUi($input: DeleteUIInput!, $condition: ModelUIConditionInput) {
    deleteUI(input: $input, condition: $condition) {
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
