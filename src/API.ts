/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUIInput = {
  id?: string | null,
  title: string,
  class: string,
  role: Array< Role >,
  code: string,
  description: string,
  createdOn: string,
};

export enum Role {
  TANK = "TANK",
  HEALER = "HEALER",
  DPS = "DPS",
}


export type ModelUIConditionInput = {
  title?: ModelStringInput | null,
  class?: ModelStringInput | null,
  role?: ModelRoleListInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  and?: Array< ModelUIConditionInput | null > | null,
  or?: Array< ModelUIConditionInput | null > | null,
  not?: ModelUIConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelRoleListInput = {
  eq?: Array< Role | null > | null,
  ne?: Array< Role | null > | null,
  contains?: Role | null,
  notContains?: Role | null,
};

export type UpdateUIInput = {
  id: string,
  title?: string | null,
  class?: string | null,
  role?: Array< Role > | null,
  code?: string | null,
  description?: string | null,
  createdOn?: string | null,
};

export type DeleteUIInput = {
  id?: string | null,
};

export type ModelUIFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  class?: ModelStringInput | null,
  role?: ModelRoleListInput | null,
  code?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdOn?: ModelStringInput | null,
  and?: Array< ModelUIFilterInput | null > | null,
  or?: Array< ModelUIFilterInput | null > | null,
  not?: ModelUIFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUiMutationVariables = {
  input: CreateUIInput,
  condition?: ModelUIConditionInput | null,
};

export type CreateUiMutation = {
  createUI:  {
    __typename: "UI",
    id: string,
    title: string,
    class: string,
    role: Array< Role >,
    code: string,
    description: string,
    createdOn: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUiMutationVariables = {
  input: UpdateUIInput,
  condition?: ModelUIConditionInput | null,
};

export type UpdateUiMutation = {
  updateUI:  {
    __typename: "UI",
    id: string,
    title: string,
    class: string,
    role: Array< Role >,
    code: string,
    description: string,
    createdOn: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUiMutationVariables = {
  input: DeleteUIInput,
  condition?: ModelUIConditionInput | null,
};

export type DeleteUiMutation = {
  deleteUI:  {
    __typename: "UI",
    id: string,
    title: string,
    class: string,
    role: Array< Role >,
    code: string,
    description: string,
    createdOn: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUiQueryVariables = {
  id: string,
};

export type GetUiQuery = {
  getUI:  {
    __typename: "UI",
    id: string,
    title: string,
    class: string,
    role: Array< Role >,
    code: string,
    description: string,
    createdOn: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUIsQueryVariables = {
  filter?: ModelUIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUIsQuery = {
  listUIs:  {
    __typename: "ModelUIConnection",
    items:  Array< {
      __typename: "UI",
      id: string,
      title: string,
      class: string,
      role: Array< Role >,
      code: string,
      description: string,
      createdOn: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type UiByClassByRoleQueryVariables = {
  class?: string | null,
  role?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UiByClassByRoleQuery = {
  uiByClassByRole:  {
    __typename: "ModelUIConnection",
    items:  Array< {
      __typename: "UI",
      id: string,
      title: string,
      class: string,
      role: Array< Role >,
      code: string,
      description: string,
      createdOn: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type UiByDateQueryVariables = {
  createdOn?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUIFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UiByDateQuery = {
  uiByDate:  {
    __typename: "ModelUIConnection",
    items:  Array< {
      __typename: "UI",
      id: string,
      title: string,
      class: string,
      role: Array< Role >,
      code: string,
      description: string,
      createdOn: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUiSubscription = {
  onCreateUI:  {
    __typename: "UI",
    id: string,
    title: string,
    class: string,
    role: Array< Role >,
    code: string,
    description: string,
    createdOn: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUiSubscription = {
  onUpdateUI:  {
    __typename: "UI",
    id: string,
    title: string,
    class: string,
    role: Array< Role >,
    code: string,
    description: string,
    createdOn: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUiSubscription = {
  onDeleteUI:  {
    __typename: "UI",
    id: string,
    title: string,
    class: string,
    role: Array< Role >,
    code: string,
    description: string,
    createdOn: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
