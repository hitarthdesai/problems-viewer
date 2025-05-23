/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CompaniesConnection = {
  __typename?: 'CompaniesConnection';
  aggregate: CompanyAggregate;
  edges: Array<CompanyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  problemCount: Scalars['Int']['output'];
  problems: Array<Problem>;
  problemsConnection: CompanyProblemsConnection;
};


export type CompanyProblemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemSort>>;
  where?: InputMaybe<ProblemWhere>;
};


export type CompanyProblemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompanyProblemsConnectionSort>>;
  where?: InputMaybe<CompanyProblemsConnectionWhere>;
};

export type CompanyAggregate = {
  __typename?: 'CompanyAggregate';
  count: Count;
  node: CompanyAggregateNode;
};

export type CompanyAggregateNode = {
  __typename?: 'CompanyAggregateNode';
  name: StringAggregateSelection;
};

export type CompanyConnectInput = {
  problems?: InputMaybe<Array<CompanyProblemsConnectFieldInput>>;
};

export type CompanyConnectWhere = {
  node: CompanyWhere;
};

export type CompanyCreateInput = {
  name: Scalars['String']['input'];
  problems?: InputMaybe<CompanyProblemsFieldInput>;
};

export type CompanyDeleteInput = {
  problems?: InputMaybe<Array<CompanyProblemsDeleteFieldInput>>;
};

export type CompanyDisconnectInput = {
  problems?: InputMaybe<Array<CompanyProblemsDisconnectFieldInput>>;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  cursor: Scalars['String']['output'];
  node: Company;
};

export type CompanyProblemProblemsAggregateSelection = {
  __typename?: 'CompanyProblemProblemsAggregateSelection';
  count: CountConnection;
  node?: Maybe<CompanyProblemProblemsNodeAggregateSelection>;
};

export type CompanyProblemProblemsNodeAggregateSelection = {
  __typename?: 'CompanyProblemProblemsNodeAggregateSelection';
  slug: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type CompanyProblemsAggregateInput = {
  AND?: InputMaybe<Array<CompanyProblemsAggregateInput>>;
  NOT?: InputMaybe<CompanyProblemsAggregateInput>;
  OR?: InputMaybe<Array<CompanyProblemsAggregateInput>>;
  count?: InputMaybe<IntScalarFilters>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompanyProblemsNodeAggregationWhereInput>;
};

export type CompanyProblemsConnectFieldInput = {
  connect?: InputMaybe<Array<ProblemConnectInput>>;
  where?: InputMaybe<ProblemConnectWhere>;
};

export type CompanyProblemsConnection = {
  __typename?: 'CompanyProblemsConnection';
  aggregate: CompanyProblemProblemsAggregateSelection;
  edges: Array<CompanyProblemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompanyProblemsConnectionAggregateInput = {
  AND?: InputMaybe<Array<CompanyProblemsConnectionAggregateInput>>;
  NOT?: InputMaybe<CompanyProblemsConnectionAggregateInput>;
  OR?: InputMaybe<Array<CompanyProblemsConnectionAggregateInput>>;
  count?: InputMaybe<ConnectionAggregationCountFilterInput>;
  node?: InputMaybe<CompanyProblemsNodeAggregationWhereInput>;
};

export type CompanyProblemsConnectionFilters = {
  /** Filter Companies by aggregating results on related CompanyProblemsConnections */
  aggregate?: InputMaybe<CompanyProblemsConnectionAggregateInput>;
  /** Return Companies where all of the related CompanyProblemsConnections match this filter */
  all?: InputMaybe<CompanyProblemsConnectionWhere>;
  /** Return Companies where none of the related CompanyProblemsConnections match this filter */
  none?: InputMaybe<CompanyProblemsConnectionWhere>;
  /** Return Companies where one of the related CompanyProblemsConnections match this filter */
  single?: InputMaybe<CompanyProblemsConnectionWhere>;
  /** Return Companies where some of the related CompanyProblemsConnections match this filter */
  some?: InputMaybe<CompanyProblemsConnectionWhere>;
};

export type CompanyProblemsConnectionSort = {
  node?: InputMaybe<ProblemSort>;
};

export type CompanyProblemsConnectionWhere = {
  AND?: InputMaybe<Array<CompanyProblemsConnectionWhere>>;
  NOT?: InputMaybe<CompanyProblemsConnectionWhere>;
  OR?: InputMaybe<Array<CompanyProblemsConnectionWhere>>;
  node?: InputMaybe<ProblemWhere>;
};

export type CompanyProblemsCreateFieldInput = {
  node: ProblemCreateInput;
};

export type CompanyProblemsDeleteFieldInput = {
  delete?: InputMaybe<ProblemDeleteInput>;
  where?: InputMaybe<CompanyProblemsConnectionWhere>;
};

export type CompanyProblemsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProblemDisconnectInput>;
  where?: InputMaybe<CompanyProblemsConnectionWhere>;
};

export type CompanyProblemsFieldInput = {
  connect?: InputMaybe<Array<CompanyProblemsConnectFieldInput>>;
  create?: InputMaybe<Array<CompanyProblemsCreateFieldInput>>;
};

export type CompanyProblemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanyProblemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompanyProblemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompanyProblemsNodeAggregationWhereInput>>;
  slug?: InputMaybe<StringScalarAggregationFilters>;
  title?: InputMaybe<StringScalarAggregationFilters>;
};

export type CompanyProblemsRelationship = {
  __typename?: 'CompanyProblemsRelationship';
  cursor: Scalars['String']['output'];
  node: Problem;
};

export type CompanyProblemsUpdateConnectionInput = {
  node?: InputMaybe<ProblemUpdateInput>;
  where?: InputMaybe<CompanyProblemsConnectionWhere>;
};

export type CompanyProblemsUpdateFieldInput = {
  connect?: InputMaybe<Array<CompanyProblemsConnectFieldInput>>;
  create?: InputMaybe<Array<CompanyProblemsCreateFieldInput>>;
  delete?: InputMaybe<Array<CompanyProblemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompanyProblemsDisconnectFieldInput>>;
  update?: InputMaybe<CompanyProblemsUpdateConnectionInput>;
};

export type CompanyRelationshipFilters = {
  /** Filter type where all of the related Companies match this filter */
  all?: InputMaybe<CompanyWhere>;
  /** Filter type where none of the related Companies match this filter */
  none?: InputMaybe<CompanyWhere>;
  /** Filter type where one of the related Companies match this filter */
  single?: InputMaybe<CompanyWhere>;
  /** Filter type where some of the related Companies match this filter */
  some?: InputMaybe<CompanyWhere>;
};

/** Fields to sort Companies by. The order in which sorts are applied is not guaranteed when specifying many fields in one CompanySort object. */
export type CompanySort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  problemCount?: InputMaybe<SortDirection>;
};

export type CompanyUpdateInput = {
  name?: InputMaybe<StringScalarMutations>;
  problems?: InputMaybe<Array<CompanyProblemsUpdateFieldInput>>;
};

export type CompanyWhere = {
  AND?: InputMaybe<Array<CompanyWhere>>;
  NOT?: InputMaybe<CompanyWhere>;
  OR?: InputMaybe<Array<CompanyWhere>>;
  id?: InputMaybe<IdScalarFilters>;
  name?: InputMaybe<StringScalarFilters>;
  problemCount?: InputMaybe<IntScalarFilters>;
  problems?: InputMaybe<ProblemRelationshipFilters>;
  problemsConnection?: InputMaybe<CompanyProblemsConnectionFilters>;
};

export type ConnectionAggregationCountFilterInput = {
  edges?: InputMaybe<IntScalarFilters>;
  nodes?: InputMaybe<IntScalarFilters>;
};

export type Count = {
  __typename?: 'Count';
  nodes: Scalars['Int']['output'];
};

export type CountConnection = {
  __typename?: 'CountConnection';
  edges: Scalars['Int']['output'];
  nodes: Scalars['Int']['output'];
};

export type CreateCompaniesMutationResponse = {
  __typename?: 'CreateCompaniesMutationResponse';
  companies: Array<Company>;
  info: CreateInfo;
};

export type CreateDifficultiesMutationResponse = {
  __typename?: 'CreateDifficultiesMutationResponse';
  difficulties: Array<Difficulty>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateProblemsMutationResponse = {
  __typename?: 'CreateProblemsMutationResponse';
  info: CreateInfo;
  problems: Array<Problem>;
};

export type CreateTopicsMutationResponse = {
  __typename?: 'CreateTopicsMutationResponse';
  info: CreateInfo;
  topics: Array<Topic>;
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type DifficultiesConnection = {
  __typename?: 'DifficultiesConnection';
  aggregate: DifficultyAggregate;
  edges: Array<DifficultyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Difficulty = {
  __typename?: 'Difficulty';
  id: Scalars['ID']['output'];
  name: ProblemDifficulty;
  problems: Array<Problem>;
  problemsConnection: DifficultyProblemsConnection;
};


export type DifficultyProblemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemSort>>;
  where?: InputMaybe<ProblemWhere>;
};


export type DifficultyProblemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DifficultyProblemsConnectionSort>>;
  where?: InputMaybe<DifficultyProblemsConnectionWhere>;
};

export type DifficultyAggregate = {
  __typename?: 'DifficultyAggregate';
  count: Count;
};

export type DifficultyConnectInput = {
  problems?: InputMaybe<Array<DifficultyProblemsConnectFieldInput>>;
};

export type DifficultyConnectWhere = {
  node: DifficultyWhere;
};

export type DifficultyCreateInput = {
  name: ProblemDifficulty;
  problems?: InputMaybe<DifficultyProblemsFieldInput>;
};

export type DifficultyDeleteInput = {
  problems?: InputMaybe<Array<DifficultyProblemsDeleteFieldInput>>;
};

export type DifficultyDisconnectInput = {
  problems?: InputMaybe<Array<DifficultyProblemsDisconnectFieldInput>>;
};

export type DifficultyEdge = {
  __typename?: 'DifficultyEdge';
  cursor: Scalars['String']['output'];
  node: Difficulty;
};

export type DifficultyProblemProblemsAggregateSelection = {
  __typename?: 'DifficultyProblemProblemsAggregateSelection';
  count: CountConnection;
  node?: Maybe<DifficultyProblemProblemsNodeAggregateSelection>;
};

export type DifficultyProblemProblemsNodeAggregateSelection = {
  __typename?: 'DifficultyProblemProblemsNodeAggregateSelection';
  slug: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type DifficultyProblemsAggregateInput = {
  AND?: InputMaybe<Array<DifficultyProblemsAggregateInput>>;
  NOT?: InputMaybe<DifficultyProblemsAggregateInput>;
  OR?: InputMaybe<Array<DifficultyProblemsAggregateInput>>;
  count?: InputMaybe<IntScalarFilters>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DifficultyProblemsNodeAggregationWhereInput>;
};

export type DifficultyProblemsConnectFieldInput = {
  connect?: InputMaybe<Array<ProblemConnectInput>>;
  where?: InputMaybe<ProblemConnectWhere>;
};

export type DifficultyProblemsConnection = {
  __typename?: 'DifficultyProblemsConnection';
  aggregate: DifficultyProblemProblemsAggregateSelection;
  edges: Array<DifficultyProblemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DifficultyProblemsConnectionAggregateInput = {
  AND?: InputMaybe<Array<DifficultyProblemsConnectionAggregateInput>>;
  NOT?: InputMaybe<DifficultyProblemsConnectionAggregateInput>;
  OR?: InputMaybe<Array<DifficultyProblemsConnectionAggregateInput>>;
  count?: InputMaybe<ConnectionAggregationCountFilterInput>;
  node?: InputMaybe<DifficultyProblemsNodeAggregationWhereInput>;
};

export type DifficultyProblemsConnectionFilters = {
  /** Filter Difficulties by aggregating results on related DifficultyProblemsConnections */
  aggregate?: InputMaybe<DifficultyProblemsConnectionAggregateInput>;
  /** Return Difficulties where all of the related DifficultyProblemsConnections match this filter */
  all?: InputMaybe<DifficultyProblemsConnectionWhere>;
  /** Return Difficulties where none of the related DifficultyProblemsConnections match this filter */
  none?: InputMaybe<DifficultyProblemsConnectionWhere>;
  /** Return Difficulties where one of the related DifficultyProblemsConnections match this filter */
  single?: InputMaybe<DifficultyProblemsConnectionWhere>;
  /** Return Difficulties where some of the related DifficultyProblemsConnections match this filter */
  some?: InputMaybe<DifficultyProblemsConnectionWhere>;
};

export type DifficultyProblemsConnectionSort = {
  node?: InputMaybe<ProblemSort>;
};

export type DifficultyProblemsConnectionWhere = {
  AND?: InputMaybe<Array<DifficultyProblemsConnectionWhere>>;
  NOT?: InputMaybe<DifficultyProblemsConnectionWhere>;
  OR?: InputMaybe<Array<DifficultyProblemsConnectionWhere>>;
  node?: InputMaybe<ProblemWhere>;
};

export type DifficultyProblemsCreateFieldInput = {
  node: ProblemCreateInput;
};

export type DifficultyProblemsDeleteFieldInput = {
  delete?: InputMaybe<ProblemDeleteInput>;
  where?: InputMaybe<DifficultyProblemsConnectionWhere>;
};

export type DifficultyProblemsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProblemDisconnectInput>;
  where?: InputMaybe<DifficultyProblemsConnectionWhere>;
};

export type DifficultyProblemsFieldInput = {
  connect?: InputMaybe<Array<DifficultyProblemsConnectFieldInput>>;
  create?: InputMaybe<Array<DifficultyProblemsCreateFieldInput>>;
};

export type DifficultyProblemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DifficultyProblemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DifficultyProblemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DifficultyProblemsNodeAggregationWhereInput>>;
  slug?: InputMaybe<StringScalarAggregationFilters>;
  title?: InputMaybe<StringScalarAggregationFilters>;
};

export type DifficultyProblemsRelationship = {
  __typename?: 'DifficultyProblemsRelationship';
  cursor: Scalars['String']['output'];
  node: Problem;
};

export type DifficultyProblemsUpdateConnectionInput = {
  node?: InputMaybe<ProblemUpdateInput>;
  where?: InputMaybe<DifficultyProblemsConnectionWhere>;
};

export type DifficultyProblemsUpdateFieldInput = {
  connect?: InputMaybe<Array<DifficultyProblemsConnectFieldInput>>;
  create?: InputMaybe<Array<DifficultyProblemsCreateFieldInput>>;
  delete?: InputMaybe<Array<DifficultyProblemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DifficultyProblemsDisconnectFieldInput>>;
  update?: InputMaybe<DifficultyProblemsUpdateConnectionInput>;
};

export type DifficultyRelationshipFilters = {
  /** Filter type where all of the related Difficulties match this filter */
  all?: InputMaybe<DifficultyWhere>;
  /** Filter type where none of the related Difficulties match this filter */
  none?: InputMaybe<DifficultyWhere>;
  /** Filter type where one of the related Difficulties match this filter */
  single?: InputMaybe<DifficultyWhere>;
  /** Filter type where some of the related Difficulties match this filter */
  some?: InputMaybe<DifficultyWhere>;
};

/** Fields to sort Difficulties by. The order in which sorts are applied is not guaranteed when specifying many fields in one DifficultySort object. */
export type DifficultySort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type DifficultyUpdateInput = {
  name?: InputMaybe<ProblemDifficultyEnumScalarMutations>;
  problems?: InputMaybe<Array<DifficultyProblemsUpdateFieldInput>>;
};

export type DifficultyWhere = {
  AND?: InputMaybe<Array<DifficultyWhere>>;
  NOT?: InputMaybe<DifficultyWhere>;
  OR?: InputMaybe<Array<DifficultyWhere>>;
  id?: InputMaybe<IdScalarFilters>;
  name?: InputMaybe<ProblemDifficultyEnumScalarFilters>;
  problems?: InputMaybe<ProblemRelationshipFilters>;
  problemsConnection?: InputMaybe<DifficultyProblemsConnectionFilters>;
};

/** Float filters */
export type FloatScalarFilters = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

/** ID filters */
export type IdScalarFilters = {
  contains?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

/** Int filters */
export type IntScalarFilters = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompanies: CreateCompaniesMutationResponse;
  createDifficulties: CreateDifficultiesMutationResponse;
  createProblems: CreateProblemsMutationResponse;
  createTopics: CreateTopicsMutationResponse;
  deleteCompanies: DeleteInfo;
  deleteDifficulties: DeleteInfo;
  deleteProblems: DeleteInfo;
  deleteTopics: DeleteInfo;
  updateCompanies: UpdateCompaniesMutationResponse;
  updateDifficulties: UpdateDifficultiesMutationResponse;
  updateProblems: UpdateProblemsMutationResponse;
  updateTopics: UpdateTopicsMutationResponse;
};


export type MutationCreateCompaniesArgs = {
  input: Array<CompanyCreateInput>;
};


export type MutationCreateDifficultiesArgs = {
  input: Array<DifficultyCreateInput>;
};


export type MutationCreateProblemsArgs = {
  input: Array<ProblemCreateInput>;
};


export type MutationCreateTopicsArgs = {
  input: Array<TopicCreateInput>;
};


export type MutationDeleteCompaniesArgs = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<CompanyWhere>;
};


export type MutationDeleteDifficultiesArgs = {
  delete?: InputMaybe<DifficultyDeleteInput>;
  where?: InputMaybe<DifficultyWhere>;
};


export type MutationDeleteProblemsArgs = {
  delete?: InputMaybe<ProblemDeleteInput>;
  where?: InputMaybe<ProblemWhere>;
};


export type MutationDeleteTopicsArgs = {
  delete?: InputMaybe<TopicDeleteInput>;
  where?: InputMaybe<TopicWhere>;
};


export type MutationUpdateCompaniesArgs = {
  update?: InputMaybe<CompanyUpdateInput>;
  where?: InputMaybe<CompanyWhere>;
};


export type MutationUpdateDifficultiesArgs = {
  update?: InputMaybe<DifficultyUpdateInput>;
  where?: InputMaybe<DifficultyWhere>;
};


export type MutationUpdateProblemsArgs = {
  update?: InputMaybe<ProblemUpdateInput>;
  where?: InputMaybe<ProblemWhere>;
};


export type MutationUpdateTopicsArgs = {
  update?: InputMaybe<TopicUpdateInput>;
  where?: InputMaybe<TopicWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Problem = {
  __typename?: 'Problem';
  companies: Array<Company>;
  companiesConnection: ProblemCompaniesConnection;
  difficulty: Array<Difficulty>;
  difficultyConnection: ProblemDifficultyConnection;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  topics: Array<Topic>;
  topicsConnection: ProblemTopicsConnection;
};


export type ProblemCompaniesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompanySort>>;
  where?: InputMaybe<CompanyWhere>;
};


export type ProblemCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemCompaniesConnectionSort>>;
  where?: InputMaybe<ProblemCompaniesConnectionWhere>;
};


export type ProblemDifficultyArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DifficultySort>>;
  where?: InputMaybe<DifficultyWhere>;
};


export type ProblemDifficultyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemDifficultyConnectionSort>>;
  where?: InputMaybe<ProblemDifficultyConnectionWhere>;
};


export type ProblemTopicsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TopicSort>>;
  where?: InputMaybe<TopicWhere>;
};


export type ProblemTopicsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemTopicsConnectionSort>>;
  where?: InputMaybe<ProblemTopicsConnectionWhere>;
};

export type ProblemAggregate = {
  __typename?: 'ProblemAggregate';
  count: Count;
  node: ProblemAggregateNode;
};

export type ProblemAggregateNode = {
  __typename?: 'ProblemAggregateNode';
  slug: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type ProblemCompaniesAggregateInput = {
  AND?: InputMaybe<Array<ProblemCompaniesAggregateInput>>;
  NOT?: InputMaybe<ProblemCompaniesAggregateInput>;
  OR?: InputMaybe<Array<ProblemCompaniesAggregateInput>>;
  count?: InputMaybe<IntScalarFilters>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProblemCompaniesNodeAggregationWhereInput>;
};

export type ProblemCompaniesConnectFieldInput = {
  connect?: InputMaybe<Array<CompanyConnectInput>>;
  where?: InputMaybe<CompanyConnectWhere>;
};

export type ProblemCompaniesConnection = {
  __typename?: 'ProblemCompaniesConnection';
  aggregate: ProblemCompanyCompaniesAggregateSelection;
  edges: Array<ProblemCompaniesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProblemCompaniesConnectionAggregateInput = {
  AND?: InputMaybe<Array<ProblemCompaniesConnectionAggregateInput>>;
  NOT?: InputMaybe<ProblemCompaniesConnectionAggregateInput>;
  OR?: InputMaybe<Array<ProblemCompaniesConnectionAggregateInput>>;
  count?: InputMaybe<ConnectionAggregationCountFilterInput>;
  node?: InputMaybe<ProblemCompaniesNodeAggregationWhereInput>;
};

export type ProblemCompaniesConnectionFilters = {
  /** Filter Problems by aggregating results on related ProblemCompaniesConnections */
  aggregate?: InputMaybe<ProblemCompaniesConnectionAggregateInput>;
  /** Return Problems where all of the related ProblemCompaniesConnections match this filter */
  all?: InputMaybe<ProblemCompaniesConnectionWhere>;
  /** Return Problems where none of the related ProblemCompaniesConnections match this filter */
  none?: InputMaybe<ProblemCompaniesConnectionWhere>;
  /** Return Problems where one of the related ProblemCompaniesConnections match this filter */
  single?: InputMaybe<ProblemCompaniesConnectionWhere>;
  /** Return Problems where some of the related ProblemCompaniesConnections match this filter */
  some?: InputMaybe<ProblemCompaniesConnectionWhere>;
};

export type ProblemCompaniesConnectionSort = {
  node?: InputMaybe<CompanySort>;
};

export type ProblemCompaniesConnectionWhere = {
  AND?: InputMaybe<Array<ProblemCompaniesConnectionWhere>>;
  NOT?: InputMaybe<ProblemCompaniesConnectionWhere>;
  OR?: InputMaybe<Array<ProblemCompaniesConnectionWhere>>;
  node?: InputMaybe<CompanyWhere>;
};

export type ProblemCompaniesCreateFieldInput = {
  node: CompanyCreateInput;
};

export type ProblemCompaniesDeleteFieldInput = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<ProblemCompaniesConnectionWhere>;
};

export type ProblemCompaniesDisconnectFieldInput = {
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  where?: InputMaybe<ProblemCompaniesConnectionWhere>;
};

export type ProblemCompaniesFieldInput = {
  connect?: InputMaybe<Array<ProblemCompaniesConnectFieldInput>>;
  create?: InputMaybe<Array<ProblemCompaniesCreateFieldInput>>;
};

export type ProblemCompaniesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProblemCompaniesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProblemCompaniesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProblemCompaniesNodeAggregationWhereInput>>;
  name?: InputMaybe<StringScalarAggregationFilters>;
};

export type ProblemCompaniesRelationship = {
  __typename?: 'ProblemCompaniesRelationship';
  cursor: Scalars['String']['output'];
  node: Company;
};

export type ProblemCompaniesUpdateConnectionInput = {
  node?: InputMaybe<CompanyUpdateInput>;
  where?: InputMaybe<ProblemCompaniesConnectionWhere>;
};

export type ProblemCompaniesUpdateFieldInput = {
  connect?: InputMaybe<Array<ProblemCompaniesConnectFieldInput>>;
  create?: InputMaybe<Array<ProblemCompaniesCreateFieldInput>>;
  delete?: InputMaybe<Array<ProblemCompaniesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProblemCompaniesDisconnectFieldInput>>;
  update?: InputMaybe<ProblemCompaniesUpdateConnectionInput>;
};

export type ProblemCompanyCompaniesAggregateSelection = {
  __typename?: 'ProblemCompanyCompaniesAggregateSelection';
  count: CountConnection;
  node?: Maybe<ProblemCompanyCompaniesNodeAggregateSelection>;
};

export type ProblemCompanyCompaniesNodeAggregateSelection = {
  __typename?: 'ProblemCompanyCompaniesNodeAggregateSelection';
  name: StringAggregateSelection;
};

export type ProblemConnectInput = {
  companies?: InputMaybe<Array<ProblemCompaniesConnectFieldInput>>;
  difficulty?: InputMaybe<Array<ProblemDifficultyConnectFieldInput>>;
  topics?: InputMaybe<Array<ProblemTopicsConnectFieldInput>>;
};

export type ProblemConnectWhere = {
  node: ProblemWhere;
};

export type ProblemCreateInput = {
  companies?: InputMaybe<ProblemCompaniesFieldInput>;
  difficulty?: InputMaybe<ProblemDifficultyFieldInput>;
  slug: Scalars['String']['input'];
  title: Scalars['String']['input'];
  topics?: InputMaybe<ProblemTopicsFieldInput>;
};

export type ProblemDeleteInput = {
  companies?: InputMaybe<Array<ProblemCompaniesDeleteFieldInput>>;
  difficulty?: InputMaybe<Array<ProblemDifficultyDeleteFieldInput>>;
  topics?: InputMaybe<Array<ProblemTopicsDeleteFieldInput>>;
};

export enum ProblemDifficulty {
  Easy = 'EASY',
  Hard = 'HARD',
  Medium = 'MEDIUM'
}

export type ProblemDifficultyAggregateInput = {
  AND?: InputMaybe<Array<ProblemDifficultyAggregateInput>>;
  NOT?: InputMaybe<ProblemDifficultyAggregateInput>;
  OR?: InputMaybe<Array<ProblemDifficultyAggregateInput>>;
  count?: InputMaybe<IntScalarFilters>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProblemDifficultyConnectFieldInput = {
  connect?: InputMaybe<Array<DifficultyConnectInput>>;
  where?: InputMaybe<DifficultyConnectWhere>;
};

export type ProblemDifficultyConnection = {
  __typename?: 'ProblemDifficultyConnection';
  aggregate: ProblemDifficultyDifficultyAggregateSelection;
  edges: Array<ProblemDifficultyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProblemDifficultyConnectionAggregateInput = {
  AND?: InputMaybe<Array<ProblemDifficultyConnectionAggregateInput>>;
  NOT?: InputMaybe<ProblemDifficultyConnectionAggregateInput>;
  OR?: InputMaybe<Array<ProblemDifficultyConnectionAggregateInput>>;
  count?: InputMaybe<ConnectionAggregationCountFilterInput>;
};

export type ProblemDifficultyConnectionFilters = {
  /** Filter Problems by aggregating results on related ProblemDifficultyConnections */
  aggregate?: InputMaybe<ProblemDifficultyConnectionAggregateInput>;
  /** Return Problems where all of the related ProblemDifficultyConnections match this filter */
  all?: InputMaybe<ProblemDifficultyConnectionWhere>;
  /** Return Problems where none of the related ProblemDifficultyConnections match this filter */
  none?: InputMaybe<ProblemDifficultyConnectionWhere>;
  /** Return Problems where one of the related ProblemDifficultyConnections match this filter */
  single?: InputMaybe<ProblemDifficultyConnectionWhere>;
  /** Return Problems where some of the related ProblemDifficultyConnections match this filter */
  some?: InputMaybe<ProblemDifficultyConnectionWhere>;
};

export type ProblemDifficultyConnectionSort = {
  node?: InputMaybe<DifficultySort>;
};

export type ProblemDifficultyConnectionWhere = {
  AND?: InputMaybe<Array<ProblemDifficultyConnectionWhere>>;
  NOT?: InputMaybe<ProblemDifficultyConnectionWhere>;
  OR?: InputMaybe<Array<ProblemDifficultyConnectionWhere>>;
  node?: InputMaybe<DifficultyWhere>;
};

export type ProblemDifficultyCreateFieldInput = {
  node: DifficultyCreateInput;
};

export type ProblemDifficultyDeleteFieldInput = {
  delete?: InputMaybe<DifficultyDeleteInput>;
  where?: InputMaybe<ProblemDifficultyConnectionWhere>;
};

export type ProblemDifficultyDifficultyAggregateSelection = {
  __typename?: 'ProblemDifficultyDifficultyAggregateSelection';
  count: CountConnection;
};

export type ProblemDifficultyDisconnectFieldInput = {
  disconnect?: InputMaybe<DifficultyDisconnectInput>;
  where?: InputMaybe<ProblemDifficultyConnectionWhere>;
};

/** ProblemDifficulty filters */
export type ProblemDifficultyEnumScalarFilters = {
  eq?: InputMaybe<ProblemDifficulty>;
  in?: InputMaybe<Array<ProblemDifficulty>>;
};

/** ProblemDifficulty mutations */
export type ProblemDifficultyEnumScalarMutations = {
  set?: InputMaybe<ProblemDifficulty>;
};

export type ProblemDifficultyFieldInput = {
  connect?: InputMaybe<Array<ProblemDifficultyConnectFieldInput>>;
  create?: InputMaybe<Array<ProblemDifficultyCreateFieldInput>>;
};

export type ProblemDifficultyRelationship = {
  __typename?: 'ProblemDifficultyRelationship';
  cursor: Scalars['String']['output'];
  node: Difficulty;
};

export type ProblemDifficultyUpdateConnectionInput = {
  node?: InputMaybe<DifficultyUpdateInput>;
  where?: InputMaybe<ProblemDifficultyConnectionWhere>;
};

export type ProblemDifficultyUpdateFieldInput = {
  connect?: InputMaybe<Array<ProblemDifficultyConnectFieldInput>>;
  create?: InputMaybe<Array<ProblemDifficultyCreateFieldInput>>;
  delete?: InputMaybe<Array<ProblemDifficultyDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProblemDifficultyDisconnectFieldInput>>;
  update?: InputMaybe<ProblemDifficultyUpdateConnectionInput>;
};

export type ProblemDisconnectInput = {
  companies?: InputMaybe<Array<ProblemCompaniesDisconnectFieldInput>>;
  difficulty?: InputMaybe<Array<ProblemDifficultyDisconnectFieldInput>>;
  topics?: InputMaybe<Array<ProblemTopicsDisconnectFieldInput>>;
};

export type ProblemEdge = {
  __typename?: 'ProblemEdge';
  cursor: Scalars['String']['output'];
  node: Problem;
};

export type ProblemRelationshipFilters = {
  /** Filter type where all of the related Problems match this filter */
  all?: InputMaybe<ProblemWhere>;
  /** Filter type where none of the related Problems match this filter */
  none?: InputMaybe<ProblemWhere>;
  /** Filter type where one of the related Problems match this filter */
  single?: InputMaybe<ProblemWhere>;
  /** Filter type where some of the related Problems match this filter */
  some?: InputMaybe<ProblemWhere>;
};

/** Fields to sort Problems by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProblemSort object. */
export type ProblemSort = {
  id?: InputMaybe<SortDirection>;
  slug?: InputMaybe<SortDirection>;
  title?: InputMaybe<SortDirection>;
};

export type ProblemTopicTopicsAggregateSelection = {
  __typename?: 'ProblemTopicTopicsAggregateSelection';
  count: CountConnection;
  node?: Maybe<ProblemTopicTopicsNodeAggregateSelection>;
};

export type ProblemTopicTopicsNodeAggregateSelection = {
  __typename?: 'ProblemTopicTopicsNodeAggregateSelection';
  name: StringAggregateSelection;
};

export type ProblemTopicsAggregateInput = {
  AND?: InputMaybe<Array<ProblemTopicsAggregateInput>>;
  NOT?: InputMaybe<ProblemTopicsAggregateInput>;
  OR?: InputMaybe<Array<ProblemTopicsAggregateInput>>;
  count?: InputMaybe<IntScalarFilters>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProblemTopicsNodeAggregationWhereInput>;
};

export type ProblemTopicsConnectFieldInput = {
  connect?: InputMaybe<Array<TopicConnectInput>>;
  where?: InputMaybe<TopicConnectWhere>;
};

export type ProblemTopicsConnection = {
  __typename?: 'ProblemTopicsConnection';
  aggregate: ProblemTopicTopicsAggregateSelection;
  edges: Array<ProblemTopicsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProblemTopicsConnectionAggregateInput = {
  AND?: InputMaybe<Array<ProblemTopicsConnectionAggregateInput>>;
  NOT?: InputMaybe<ProblemTopicsConnectionAggregateInput>;
  OR?: InputMaybe<Array<ProblemTopicsConnectionAggregateInput>>;
  count?: InputMaybe<ConnectionAggregationCountFilterInput>;
  node?: InputMaybe<ProblemTopicsNodeAggregationWhereInput>;
};

export type ProblemTopicsConnectionFilters = {
  /** Filter Problems by aggregating results on related ProblemTopicsConnections */
  aggregate?: InputMaybe<ProblemTopicsConnectionAggregateInput>;
  /** Return Problems where all of the related ProblemTopicsConnections match this filter */
  all?: InputMaybe<ProblemTopicsConnectionWhere>;
  /** Return Problems where none of the related ProblemTopicsConnections match this filter */
  none?: InputMaybe<ProblemTopicsConnectionWhere>;
  /** Return Problems where one of the related ProblemTopicsConnections match this filter */
  single?: InputMaybe<ProblemTopicsConnectionWhere>;
  /** Return Problems where some of the related ProblemTopicsConnections match this filter */
  some?: InputMaybe<ProblemTopicsConnectionWhere>;
};

export type ProblemTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>;
};

export type ProblemTopicsConnectionWhere = {
  AND?: InputMaybe<Array<ProblemTopicsConnectionWhere>>;
  NOT?: InputMaybe<ProblemTopicsConnectionWhere>;
  OR?: InputMaybe<Array<ProblemTopicsConnectionWhere>>;
  node?: InputMaybe<TopicWhere>;
};

export type ProblemTopicsCreateFieldInput = {
  node: TopicCreateInput;
};

export type ProblemTopicsDeleteFieldInput = {
  delete?: InputMaybe<TopicDeleteInput>;
  where?: InputMaybe<ProblemTopicsConnectionWhere>;
};

export type ProblemTopicsDisconnectFieldInput = {
  disconnect?: InputMaybe<TopicDisconnectInput>;
  where?: InputMaybe<ProblemTopicsConnectionWhere>;
};

export type ProblemTopicsFieldInput = {
  connect?: InputMaybe<Array<ProblemTopicsConnectFieldInput>>;
  create?: InputMaybe<Array<ProblemTopicsCreateFieldInput>>;
};

export type ProblemTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProblemTopicsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProblemTopicsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProblemTopicsNodeAggregationWhereInput>>;
  name?: InputMaybe<StringScalarAggregationFilters>;
};

export type ProblemTopicsRelationship = {
  __typename?: 'ProblemTopicsRelationship';
  cursor: Scalars['String']['output'];
  node: Topic;
};

export type ProblemTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>;
  where?: InputMaybe<ProblemTopicsConnectionWhere>;
};

export type ProblemTopicsUpdateFieldInput = {
  connect?: InputMaybe<Array<ProblemTopicsConnectFieldInput>>;
  create?: InputMaybe<Array<ProblemTopicsCreateFieldInput>>;
  delete?: InputMaybe<Array<ProblemTopicsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProblemTopicsDisconnectFieldInput>>;
  update?: InputMaybe<ProblemTopicsUpdateConnectionInput>;
};

export type ProblemUpdateInput = {
  companies?: InputMaybe<Array<ProblemCompaniesUpdateFieldInput>>;
  difficulty?: InputMaybe<Array<ProblemDifficultyUpdateFieldInput>>;
  slug?: InputMaybe<StringScalarMutations>;
  title?: InputMaybe<StringScalarMutations>;
  topics?: InputMaybe<Array<ProblemTopicsUpdateFieldInput>>;
};

export type ProblemWhere = {
  AND?: InputMaybe<Array<ProblemWhere>>;
  NOT?: InputMaybe<ProblemWhere>;
  OR?: InputMaybe<Array<ProblemWhere>>;
  companies?: InputMaybe<CompanyRelationshipFilters>;
  companiesConnection?: InputMaybe<ProblemCompaniesConnectionFilters>;
  difficulty?: InputMaybe<DifficultyRelationshipFilters>;
  difficultyConnection?: InputMaybe<ProblemDifficultyConnectionFilters>;
  id?: InputMaybe<IdScalarFilters>;
  slug?: InputMaybe<StringScalarFilters>;
  title?: InputMaybe<StringScalarFilters>;
  topics?: InputMaybe<TopicRelationshipFilters>;
  topicsConnection?: InputMaybe<ProblemTopicsConnectionFilters>;
};

export type ProblemsConnection = {
  __typename?: 'ProblemsConnection';
  aggregate: ProblemAggregate;
  edges: Array<ProblemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  companiesConnection: CompaniesConnection;
  difficulties: Array<Difficulty>;
  difficultiesConnection: DifficultiesConnection;
  problems: Array<Problem>;
  problemsConnection: ProblemsConnection;
  topics: Array<Topic>;
  topicsConnection: TopicsConnection;
};


export type QueryCompaniesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompanySort>>;
  where?: InputMaybe<CompanyWhere>;
};


export type QueryCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompanySort>>;
  where?: InputMaybe<CompanyWhere>;
};


export type QueryDifficultiesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DifficultySort>>;
  where?: InputMaybe<DifficultyWhere>;
};


export type QueryDifficultiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DifficultySort>>;
  where?: InputMaybe<DifficultyWhere>;
};


export type QueryProblemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemSort>>;
  where?: InputMaybe<ProblemWhere>;
};


export type QueryProblemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemSort>>;
  where?: InputMaybe<ProblemWhere>;
};


export type QueryTopicsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TopicSort>>;
  where?: InputMaybe<TopicWhere>;
};


export type QueryTopicsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TopicSort>>;
  where?: InputMaybe<TopicWhere>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

/** Filters for an aggregation of a string field */
export type StringScalarAggregationFilters = {
  averageLength?: InputMaybe<FloatScalarFilters>;
  longestLength?: InputMaybe<IntScalarFilters>;
  shortestLength?: InputMaybe<IntScalarFilters>;
};

/** String filters */
export type StringScalarFilters = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** String mutations */
export type StringScalarMutations = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type Topic = {
  __typename?: 'Topic';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  problems: Array<Problem>;
  problemsConnection: TopicProblemsConnection;
};


export type TopicProblemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProblemSort>>;
  where?: InputMaybe<ProblemWhere>;
};


export type TopicProblemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TopicProblemsConnectionSort>>;
  where?: InputMaybe<TopicProblemsConnectionWhere>;
};

export type TopicAggregate = {
  __typename?: 'TopicAggregate';
  count: Count;
  node: TopicAggregateNode;
};

export type TopicAggregateNode = {
  __typename?: 'TopicAggregateNode';
  name: StringAggregateSelection;
};

export type TopicConnectInput = {
  problems?: InputMaybe<Array<TopicProblemsConnectFieldInput>>;
};

export type TopicConnectWhere = {
  node: TopicWhere;
};

export type TopicCreateInput = {
  name: Scalars['String']['input'];
  problems?: InputMaybe<TopicProblemsFieldInput>;
};

export type TopicDeleteInput = {
  problems?: InputMaybe<Array<TopicProblemsDeleteFieldInput>>;
};

export type TopicDisconnectInput = {
  problems?: InputMaybe<Array<TopicProblemsDisconnectFieldInput>>;
};

export type TopicEdge = {
  __typename?: 'TopicEdge';
  cursor: Scalars['String']['output'];
  node: Topic;
};

export type TopicProblemProblemsAggregateSelection = {
  __typename?: 'TopicProblemProblemsAggregateSelection';
  count: CountConnection;
  node?: Maybe<TopicProblemProblemsNodeAggregateSelection>;
};

export type TopicProblemProblemsNodeAggregateSelection = {
  __typename?: 'TopicProblemProblemsNodeAggregateSelection';
  slug: StringAggregateSelection;
  title: StringAggregateSelection;
};

export type TopicProblemsAggregateInput = {
  AND?: InputMaybe<Array<TopicProblemsAggregateInput>>;
  NOT?: InputMaybe<TopicProblemsAggregateInput>;
  OR?: InputMaybe<Array<TopicProblemsAggregateInput>>;
  count?: InputMaybe<IntScalarFilters>;
  count_EQ?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<TopicProblemsNodeAggregationWhereInput>;
};

export type TopicProblemsConnectFieldInput = {
  connect?: InputMaybe<Array<ProblemConnectInput>>;
  where?: InputMaybe<ProblemConnectWhere>;
};

export type TopicProblemsConnection = {
  __typename?: 'TopicProblemsConnection';
  aggregate: TopicProblemProblemsAggregateSelection;
  edges: Array<TopicProblemsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TopicProblemsConnectionAggregateInput = {
  AND?: InputMaybe<Array<TopicProblemsConnectionAggregateInput>>;
  NOT?: InputMaybe<TopicProblemsConnectionAggregateInput>;
  OR?: InputMaybe<Array<TopicProblemsConnectionAggregateInput>>;
  count?: InputMaybe<ConnectionAggregationCountFilterInput>;
  node?: InputMaybe<TopicProblemsNodeAggregationWhereInput>;
};

export type TopicProblemsConnectionFilters = {
  /** Filter Topics by aggregating results on related TopicProblemsConnections */
  aggregate?: InputMaybe<TopicProblemsConnectionAggregateInput>;
  /** Return Topics where all of the related TopicProblemsConnections match this filter */
  all?: InputMaybe<TopicProblemsConnectionWhere>;
  /** Return Topics where none of the related TopicProblemsConnections match this filter */
  none?: InputMaybe<TopicProblemsConnectionWhere>;
  /** Return Topics where one of the related TopicProblemsConnections match this filter */
  single?: InputMaybe<TopicProblemsConnectionWhere>;
  /** Return Topics where some of the related TopicProblemsConnections match this filter */
  some?: InputMaybe<TopicProblemsConnectionWhere>;
};

export type TopicProblemsConnectionSort = {
  node?: InputMaybe<ProblemSort>;
};

export type TopicProblemsConnectionWhere = {
  AND?: InputMaybe<Array<TopicProblemsConnectionWhere>>;
  NOT?: InputMaybe<TopicProblemsConnectionWhere>;
  OR?: InputMaybe<Array<TopicProblemsConnectionWhere>>;
  node?: InputMaybe<ProblemWhere>;
};

export type TopicProblemsCreateFieldInput = {
  node: ProblemCreateInput;
};

export type TopicProblemsDeleteFieldInput = {
  delete?: InputMaybe<ProblemDeleteInput>;
  where?: InputMaybe<TopicProblemsConnectionWhere>;
};

export type TopicProblemsDisconnectFieldInput = {
  disconnect?: InputMaybe<ProblemDisconnectInput>;
  where?: InputMaybe<TopicProblemsConnectionWhere>;
};

export type TopicProblemsFieldInput = {
  connect?: InputMaybe<Array<TopicProblemsConnectFieldInput>>;
  create?: InputMaybe<Array<TopicProblemsCreateFieldInput>>;
};

export type TopicProblemsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicProblemsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TopicProblemsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<TopicProblemsNodeAggregationWhereInput>>;
  slug?: InputMaybe<StringScalarAggregationFilters>;
  title?: InputMaybe<StringScalarAggregationFilters>;
};

export type TopicProblemsRelationship = {
  __typename?: 'TopicProblemsRelationship';
  cursor: Scalars['String']['output'];
  node: Problem;
};

export type TopicProblemsUpdateConnectionInput = {
  node?: InputMaybe<ProblemUpdateInput>;
  where?: InputMaybe<TopicProblemsConnectionWhere>;
};

export type TopicProblemsUpdateFieldInput = {
  connect?: InputMaybe<Array<TopicProblemsConnectFieldInput>>;
  create?: InputMaybe<Array<TopicProblemsCreateFieldInput>>;
  delete?: InputMaybe<Array<TopicProblemsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TopicProblemsDisconnectFieldInput>>;
  update?: InputMaybe<TopicProblemsUpdateConnectionInput>;
};

export type TopicRelationshipFilters = {
  /** Filter type where all of the related Topics match this filter */
  all?: InputMaybe<TopicWhere>;
  /** Filter type where none of the related Topics match this filter */
  none?: InputMaybe<TopicWhere>;
  /** Filter type where one of the related Topics match this filter */
  single?: InputMaybe<TopicWhere>;
  /** Filter type where some of the related Topics match this filter */
  some?: InputMaybe<TopicWhere>;
};

/** Fields to sort Topics by. The order in which sorts are applied is not guaranteed when specifying many fields in one TopicSort object. */
export type TopicSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type TopicUpdateInput = {
  name?: InputMaybe<StringScalarMutations>;
  problems?: InputMaybe<Array<TopicProblemsUpdateFieldInput>>;
};

export type TopicWhere = {
  AND?: InputMaybe<Array<TopicWhere>>;
  NOT?: InputMaybe<TopicWhere>;
  OR?: InputMaybe<Array<TopicWhere>>;
  id?: InputMaybe<IdScalarFilters>;
  name?: InputMaybe<StringScalarFilters>;
  problems?: InputMaybe<ProblemRelationshipFilters>;
  problemsConnection?: InputMaybe<TopicProblemsConnectionFilters>;
};

export type TopicsConnection = {
  __typename?: 'TopicsConnection';
  aggregate: TopicAggregate;
  edges: Array<TopicEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UpdateCompaniesMutationResponse = {
  __typename?: 'UpdateCompaniesMutationResponse';
  companies: Array<Company>;
  info: UpdateInfo;
};

export type UpdateDifficultiesMutationResponse = {
  __typename?: 'UpdateDifficultiesMutationResponse';
  difficulties: Array<Difficulty>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateProblemsMutationResponse = {
  __typename?: 'UpdateProblemsMutationResponse';
  info: UpdateInfo;
  problems: Array<Problem>;
};

export type UpdateTopicsMutationResponse = {
  __typename?: 'UpdateTopicsMutationResponse';
  info: UpdateInfo;
  topics: Array<Topic>;
};

export type GetCompaniesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string, problemCount: number }> };

export type GetProblemsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetProblemsQuery = { __typename?: 'Query', problems: Array<{ __typename?: 'Problem', slug: string, title: string, difficulty: Array<{ __typename?: 'Difficulty', name: ProblemDifficulty }> }> };

export type GetTopicsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetTopicsQuery = { __typename?: 'Query', topics: Array<{ __typename?: 'Topic', name: string }> };


export const GetCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"problemCount"}}]}}]}}]} as unknown as DocumentNode<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetProblemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProblems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"problems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProblemsQuery, GetProblemsQueryVariables>;
export const GetTopicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetTopicsQuery, GetTopicsQueryVariables>;