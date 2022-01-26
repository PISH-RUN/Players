import * as Types from './types';

import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Ability = {
  __typename?: 'Ability';
  Question: Array<Question>;
  QuestionGroup: Array<QuestionGroup>;
  Topic: Array<Topic>;
  _count?: Maybe<AbilityCount>;
  abilityInfo: Array<AbilityInfo>;
  ability_category: Array<Ability_Category>;
  easyMinimum?: Maybe<Scalars['Int']>;
  examTime?: Maybe<Scalars['Int']>;
  hardMinimum?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: Maybe<Scalars['Int']>;
  user_ability: Array<User_Ability>;
  year?: Maybe<Scalars['String']>;
};


export type AbilityQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type AbilityQuestionGroupArgs = {
  cursor?: InputMaybe<QuestionGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionGroupWhereInput>;
};


export type AbilityTopicArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<TopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type AbilityAbilityInfoArgs = {
  cursor?: InputMaybe<AbilityInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AbilityInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AbilityInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityInfoWhereInput>;
};


export type AbilityAbility_CategoryArgs = {
  cursor?: InputMaybe<Ability_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Ability_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Ability_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type AbilityUser_AbilityArgs = {
  cursor?: InputMaybe<User_AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<User_AbilityWhereInput>;
};

export type AbilityAvgAggregate = {
  __typename?: 'AbilityAvgAggregate';
  easyMinimum?: Maybe<Scalars['Float']>;
  examTime?: Maybe<Scalars['Float']>;
  hardMinimum?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  questionCount?: Maybe<Scalars['Float']>;
};

export type AbilityAvgOrderByAggregateInput = {
  easyMinimum?: InputMaybe<SortOrder>;
  examTime?: InputMaybe<SortOrder>;
  hardMinimum?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionCount?: InputMaybe<SortOrder>;
};

export type AbilityCount = {
  __typename?: 'AbilityCount';
  Question: Scalars['Int'];
  QuestionGroup: Scalars['Int'];
  Topic: Scalars['Int'];
  abilityInfo: Scalars['Int'];
  ability_category: Scalars['Int'];
  user_ability: Scalars['Int'];
};

export type AbilityCountAggregate = {
  __typename?: 'AbilityCountAggregate';
  _all: Scalars['Int'];
  easyMinimum: Scalars['Int'];
  examTime: Scalars['Int'];
  hardMinimum: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  questionCount: Scalars['Int'];
  year: Scalars['Int'];
};

export type AbilityCountOrderByAggregateInput = {
  easyMinimum?: InputMaybe<SortOrder>;
  examTime?: InputMaybe<SortOrder>;
  hardMinimum?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  questionCount?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type AbilityCreateInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicCreateNestedManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoCreateNestedManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutAbilityInput>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityCreateManyInput = {
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityCreateNestedOneWithoutAbilityInfoInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutAbilityInfoInput>;
  create?: InputMaybe<AbilityCreateWithoutAbilityInfoInput>;
};

export type AbilityCreateNestedOneWithoutAbility_CategoryInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutAbility_CategoryInput>;
  create?: InputMaybe<AbilityCreateWithoutAbility_CategoryInput>;
};

export type AbilityCreateNestedOneWithoutQuestionGroupInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutQuestionGroupInput>;
  create?: InputMaybe<AbilityCreateWithoutQuestionGroupInput>;
};

export type AbilityCreateNestedOneWithoutQuestionInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<AbilityCreateWithoutQuestionInput>;
};

export type AbilityCreateNestedOneWithoutTopicInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutTopicInput>;
  create?: InputMaybe<AbilityCreateWithoutTopicInput>;
};

export type AbilityCreateNestedOneWithoutUser_AbilityInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutUser_AbilityInput>;
  create?: InputMaybe<AbilityCreateWithoutUser_AbilityInput>;
};

export type AbilityCreateOrConnectWithoutAbilityInfoInput = {
  create: AbilityCreateWithoutAbilityInfoInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityCreateOrConnectWithoutAbility_CategoryInput = {
  create: AbilityCreateWithoutAbility_CategoryInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityCreateOrConnectWithoutQuestionGroupInput = {
  create: AbilityCreateWithoutQuestionGroupInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityCreateOrConnectWithoutQuestionInput = {
  create: AbilityCreateWithoutQuestionInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityCreateOrConnectWithoutTopicInput = {
  create: AbilityCreateWithoutTopicInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityCreateOrConnectWithoutUser_AbilityInput = {
  create: AbilityCreateWithoutUser_AbilityInput;
  where: AbilityWhereUniqueInput;
};

export type AbilityCreateWithoutAbilityInfoInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicCreateNestedManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutAbilityInput>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityCreateWithoutAbility_CategoryInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicCreateNestedManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoCreateNestedManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutAbilityInput>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityCreateWithoutQuestionGroupInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicCreateNestedManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoCreateNestedManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutAbilityInput>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityCreateWithoutQuestionInput = {
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicCreateNestedManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoCreateNestedManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutAbilityInput>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityCreateWithoutTopicInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoCreateNestedManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutAbilityInput>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityCreateWithoutUser_AbilityInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicCreateNestedManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoCreateNestedManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<Scalars['Int']>;
  examTime?: InputMaybe<Scalars['Int']>;
  hardMinimum?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['String']>;
};

export type AbilityGroupBy = {
  __typename?: 'AbilityGroupBy';
  _avg?: Maybe<AbilityAvgAggregate>;
  _count?: Maybe<AbilityCountAggregate>;
  _max?: Maybe<AbilityMaxAggregate>;
  _min?: Maybe<AbilityMinAggregate>;
  _sum?: Maybe<AbilitySumAggregate>;
  easyMinimum?: Maybe<Scalars['Int']>;
  examTime?: Maybe<Scalars['Int']>;
  hardMinimum?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  questionCount?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['String']>;
};

export type AbilityInfo = {
  __typename?: 'AbilityInfo';
  Ability?: Maybe<Ability>;
  abilityId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AbilityInfoAvgAggregate = {
  __typename?: 'AbilityInfoAvgAggregate';
  abilityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type AbilityInfoAvgOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AbilityInfoCountAggregate = {
  __typename?: 'AbilityInfoCountAggregate';
  _all: Scalars['Int'];
  abilityId: Scalars['Int'];
  id: Scalars['Int'];
  key: Scalars['Int'];
  value: Scalars['Int'];
};

export type AbilityInfoCountOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type AbilityInfoCreateInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutAbilityInfoInput>;
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type AbilityInfoCreateManyAbilityInput = {
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type AbilityInfoCreateManyAbilityInputEnvelope = {
  data: Array<AbilityInfoCreateManyAbilityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AbilityInfoCreateManyInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type AbilityInfoCreateNestedManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<AbilityInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AbilityInfoCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<AbilityInfoCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<AbilityInfoCreateManyAbilityInputEnvelope>;
};

export type AbilityInfoCreateOrConnectWithoutAbilityInput = {
  create: AbilityInfoCreateWithoutAbilityInput;
  where: AbilityInfoWhereUniqueInput;
};

export type AbilityInfoCreateWithoutAbilityInput = {
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type AbilityInfoGroupBy = {
  __typename?: 'AbilityInfoGroupBy';
  _avg?: Maybe<AbilityInfoAvgAggregate>;
  _count?: Maybe<AbilityInfoCountAggregate>;
  _max?: Maybe<AbilityInfoMaxAggregate>;
  _min?: Maybe<AbilityInfoMinAggregate>;
  _sum?: Maybe<AbilityInfoSumAggregate>;
  abilityId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AbilityInfoListRelationFilter = {
  every?: InputMaybe<AbilityInfoWhereInput>;
  none?: InputMaybe<AbilityInfoWhereInput>;
  some?: InputMaybe<AbilityInfoWhereInput>;
};

export type AbilityInfoMaxAggregate = {
  __typename?: 'AbilityInfoMaxAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AbilityInfoMaxOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type AbilityInfoMinAggregate = {
  __typename?: 'AbilityInfoMinAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AbilityInfoMinOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type AbilityInfoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AbilityInfoOrderByWithAggregationInput = {
  _avg?: InputMaybe<AbilityInfoAvgOrderByAggregateInput>;
  _count?: InputMaybe<AbilityInfoCountOrderByAggregateInput>;
  _max?: InputMaybe<AbilityInfoMaxOrderByAggregateInput>;
  _min?: InputMaybe<AbilityInfoMinOrderByAggregateInput>;
  _sum?: InputMaybe<AbilityInfoSumOrderByAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type AbilityInfoOrderByWithRelationInput = {
  Ability?: InputMaybe<AbilityOrderByWithRelationInput>;
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum AbilityInfoScalarFieldEnum {
  AbilityId = 'abilityId',
  Id = 'id',
  Key = 'key',
  Value = 'value'
}

export type AbilityInfoScalarWhereInput = {
  AND?: InputMaybe<Array<AbilityInfoScalarWhereInput>>;
  NOT?: InputMaybe<Array<AbilityInfoScalarWhereInput>>;
  OR?: InputMaybe<Array<AbilityInfoScalarWhereInput>>;
  abilityId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringNullableFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type AbilityInfoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AbilityInfoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AbilityInfoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AbilityInfoScalarWhereWithAggregatesInput>>;
  abilityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  key?: InputMaybe<StringNullableWithAggregatesFilter>;
  value?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type AbilityInfoSumAggregate = {
  __typename?: 'AbilityInfoSumAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type AbilityInfoSumOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AbilityInfoUpdateInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutAbilityInfoInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityInfoUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityInfoUpdateManyWithWhereWithoutAbilityInput = {
  data: AbilityInfoUpdateManyMutationInput;
  where: AbilityInfoScalarWhereInput;
};

export type AbilityInfoUpdateManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<AbilityInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AbilityInfoCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<AbilityInfoCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<AbilityInfoCreateManyAbilityInputEnvelope>;
  delete?: InputMaybe<Array<AbilityInfoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AbilityInfoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AbilityInfoWhereUniqueInput>>;
  set?: InputMaybe<Array<AbilityInfoWhereUniqueInput>>;
  update?: InputMaybe<Array<AbilityInfoUpdateWithWhereUniqueWithoutAbilityInput>>;
  updateMany?: InputMaybe<Array<AbilityInfoUpdateManyWithWhereWithoutAbilityInput>>;
  upsert?: InputMaybe<Array<AbilityInfoUpsertWithWhereUniqueWithoutAbilityInput>>;
};

export type AbilityInfoUpdateWithWhereUniqueWithoutAbilityInput = {
  data: AbilityInfoUpdateWithoutAbilityInput;
  where: AbilityInfoWhereUniqueInput;
};

export type AbilityInfoUpdateWithoutAbilityInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityInfoUpsertWithWhereUniqueWithoutAbilityInput = {
  create: AbilityInfoCreateWithoutAbilityInput;
  update: AbilityInfoUpdateWithoutAbilityInput;
  where: AbilityInfoWhereUniqueInput;
};

export type AbilityInfoWhereInput = {
  AND?: InputMaybe<Array<AbilityInfoWhereInput>>;
  Ability?: InputMaybe<AbilityRelationFilter>;
  NOT?: InputMaybe<Array<AbilityInfoWhereInput>>;
  OR?: InputMaybe<Array<AbilityInfoWhereInput>>;
  abilityId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringNullableFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type AbilityInfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AbilityMaxAggregate = {
  __typename?: 'AbilityMaxAggregate';
  easyMinimum?: Maybe<Scalars['Int']>;
  examTime?: Maybe<Scalars['Int']>;
  hardMinimum?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  questionCount?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['String']>;
};

export type AbilityMaxOrderByAggregateInput = {
  easyMinimum?: InputMaybe<SortOrder>;
  examTime?: InputMaybe<SortOrder>;
  hardMinimum?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  questionCount?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type AbilityMinAggregate = {
  __typename?: 'AbilityMinAggregate';
  easyMinimum?: Maybe<Scalars['Int']>;
  examTime?: Maybe<Scalars['Int']>;
  hardMinimum?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  questionCount?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['String']>;
};

export type AbilityMinOrderByAggregateInput = {
  easyMinimum?: InputMaybe<SortOrder>;
  examTime?: InputMaybe<SortOrder>;
  hardMinimum?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  questionCount?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type AbilityOrderByWithAggregationInput = {
  _avg?: InputMaybe<AbilityAvgOrderByAggregateInput>;
  _count?: InputMaybe<AbilityCountOrderByAggregateInput>;
  _max?: InputMaybe<AbilityMaxOrderByAggregateInput>;
  _min?: InputMaybe<AbilityMinOrderByAggregateInput>;
  _sum?: InputMaybe<AbilitySumOrderByAggregateInput>;
  easyMinimum?: InputMaybe<SortOrder>;
  examTime?: InputMaybe<SortOrder>;
  hardMinimum?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  questionCount?: InputMaybe<SortOrder>;
  year?: InputMaybe<SortOrder>;
};

export type AbilityOrderByWithRelationInput = {
  Question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  QuestionGroup?: InputMaybe<QuestionGroupOrderByRelationAggregateInput>;
  Topic?: InputMaybe<TopicOrderByRelationAggregateInput>;
  abilityInfo?: InputMaybe<AbilityInfoOrderByRelationAggregateInput>;
  ability_category?: InputMaybe<Ability_CategoryOrderByRelationAggregateInput>;
  easyMinimum?: InputMaybe<SortOrder>;
  examTime?: InputMaybe<SortOrder>;
  hardMinimum?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  questionCount?: InputMaybe<SortOrder>;
  user_ability?: InputMaybe<User_AbilityOrderByRelationAggregateInput>;
  year?: InputMaybe<SortOrder>;
};

export type AbilityRelationFilter = {
  is?: InputMaybe<AbilityWhereInput>;
  isNot?: InputMaybe<AbilityWhereInput>;
};

export enum AbilityScalarFieldEnum {
  EasyMinimum = 'easyMinimum',
  ExamTime = 'examTime',
  HardMinimum = 'hardMinimum',
  Id = 'id',
  Name = 'name',
  QuestionCount = 'questionCount',
  Year = 'year'
}

export type AbilityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AbilityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AbilityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AbilityScalarWhereWithAggregatesInput>>;
  easyMinimum?: InputMaybe<IntNullableWithAggregatesFilter>;
  examTime?: InputMaybe<IntNullableWithAggregatesFilter>;
  hardMinimum?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  questionCount?: InputMaybe<IntNullableWithAggregatesFilter>;
  year?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type AbilitySumAggregate = {
  __typename?: 'AbilitySumAggregate';
  easyMinimum?: Maybe<Scalars['Int']>;
  examTime?: Maybe<Scalars['Int']>;
  hardMinimum?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  questionCount?: Maybe<Scalars['Int']>;
};

export type AbilitySumOrderByAggregateInput = {
  easyMinimum?: InputMaybe<SortOrder>;
  examTime?: InputMaybe<SortOrder>;
  hardMinimum?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionCount?: InputMaybe<SortOrder>;
};

export type AbilityUpdateInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicUpdateManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoUpdateManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutAbilityInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpdateManyMutationInput = {
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpdateOneWithoutAbilityInfoInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutAbilityInfoInput>;
  create?: InputMaybe<AbilityCreateWithoutAbilityInfoInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AbilityUpdateWithoutAbilityInfoInput>;
  upsert?: InputMaybe<AbilityUpsertWithoutAbilityInfoInput>;
};

export type AbilityUpdateOneWithoutAbility_CategoryInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutAbility_CategoryInput>;
  create?: InputMaybe<AbilityCreateWithoutAbility_CategoryInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AbilityUpdateWithoutAbility_CategoryInput>;
  upsert?: InputMaybe<AbilityUpsertWithoutAbility_CategoryInput>;
};

export type AbilityUpdateOneWithoutQuestionGroupInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutQuestionGroupInput>;
  create?: InputMaybe<AbilityCreateWithoutQuestionGroupInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AbilityUpdateWithoutQuestionGroupInput>;
  upsert?: InputMaybe<AbilityUpsertWithoutQuestionGroupInput>;
};

export type AbilityUpdateOneWithoutQuestionInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<AbilityCreateWithoutQuestionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AbilityUpdateWithoutQuestionInput>;
  upsert?: InputMaybe<AbilityUpsertWithoutQuestionInput>;
};

export type AbilityUpdateOneWithoutTopicInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutTopicInput>;
  create?: InputMaybe<AbilityCreateWithoutTopicInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AbilityUpdateWithoutTopicInput>;
  upsert?: InputMaybe<AbilityUpsertWithoutTopicInput>;
};

export type AbilityUpdateOneWithoutUser_AbilityInput = {
  connect?: InputMaybe<AbilityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AbilityCreateOrConnectWithoutUser_AbilityInput>;
  create?: InputMaybe<AbilityCreateWithoutUser_AbilityInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AbilityUpdateWithoutUser_AbilityInput>;
  upsert?: InputMaybe<AbilityUpsertWithoutUser_AbilityInput>;
};

export type AbilityUpdateWithoutAbilityInfoInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicUpdateManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutAbilityInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpdateWithoutAbility_CategoryInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicUpdateManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoUpdateManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutAbilityInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpdateWithoutQuestionGroupInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicUpdateManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoUpdateManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutAbilityInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpdateWithoutQuestionInput = {
  QuestionGroup?: InputMaybe<QuestionGroupUpdateManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicUpdateManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoUpdateManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutAbilityInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpdateWithoutTopicInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoUpdateManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutAbilityInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpdateWithoutUser_AbilityInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutAbilityInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateManyWithoutAbilityInput>;
  Topic?: InputMaybe<TopicUpdateManyWithoutAbilityInput>;
  abilityInfo?: InputMaybe<AbilityInfoUpdateManyWithoutAbilityInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutAbilityInput>;
  easyMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  examTime?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  hardMinimum?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questionCount?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  year?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AbilityUpsertWithoutAbilityInfoInput = {
  create: AbilityCreateWithoutAbilityInfoInput;
  update: AbilityUpdateWithoutAbilityInfoInput;
};

export type AbilityUpsertWithoutAbility_CategoryInput = {
  create: AbilityCreateWithoutAbility_CategoryInput;
  update: AbilityUpdateWithoutAbility_CategoryInput;
};

export type AbilityUpsertWithoutQuestionGroupInput = {
  create: AbilityCreateWithoutQuestionGroupInput;
  update: AbilityUpdateWithoutQuestionGroupInput;
};

export type AbilityUpsertWithoutQuestionInput = {
  create: AbilityCreateWithoutQuestionInput;
  update: AbilityUpdateWithoutQuestionInput;
};

export type AbilityUpsertWithoutTopicInput = {
  create: AbilityCreateWithoutTopicInput;
  update: AbilityUpdateWithoutTopicInput;
};

export type AbilityUpsertWithoutUser_AbilityInput = {
  create: AbilityCreateWithoutUser_AbilityInput;
  update: AbilityUpdateWithoutUser_AbilityInput;
};

export type AbilityWhereInput = {
  AND?: InputMaybe<Array<AbilityWhereInput>>;
  NOT?: InputMaybe<Array<AbilityWhereInput>>;
  OR?: InputMaybe<Array<AbilityWhereInput>>;
  Question?: InputMaybe<QuestionListRelationFilter>;
  QuestionGroup?: InputMaybe<QuestionGroupListRelationFilter>;
  Topic?: InputMaybe<TopicListRelationFilter>;
  abilityInfo?: InputMaybe<AbilityInfoListRelationFilter>;
  ability_category?: InputMaybe<Ability_CategoryListRelationFilter>;
  easyMinimum?: InputMaybe<IntNullableFilter>;
  examTime?: InputMaybe<IntNullableFilter>;
  hardMinimum?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  questionCount?: InputMaybe<IntNullableFilter>;
  user_ability?: InputMaybe<User_AbilityListRelationFilter>;
  year?: InputMaybe<StringNullableFilter>;
};

export type AbilityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Ability_Category = {
  __typename?: 'Ability_category';
  Ability?: Maybe<Ability>;
  Category?: Maybe<Category>;
  Question_AbCat: Array<Question_AbCat>;
  _count?: Maybe<Ability_CategoryCount>;
  abilityId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};


export type Ability_CategoryQuestion_AbCatArgs = {
  cursor?: InputMaybe<Question_AbCatWhereUniqueInput>;
  distinct?: InputMaybe<Array<Question_AbCatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Question_AbCatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Question_AbCatWhereInput>;
};

export type Ability_CategoryAvgAggregate = {
  __typename?: 'Ability_categoryAvgAggregate';
  abilityId?: Maybe<Scalars['Float']>;
  categoryId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Ability_CategoryAvgOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type Ability_CategoryCount = {
  __typename?: 'Ability_categoryCount';
  Question_AbCat: Scalars['Int'];
};

export type Ability_CategoryCountAggregate = {
  __typename?: 'Ability_categoryCountAggregate';
  _all: Scalars['Int'];
  abilityId: Scalars['Int'];
  categoryId: Scalars['Int'];
  id: Scalars['Int'];
};

export type Ability_CategoryCountOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type Ability_CategoryCreateInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutAbility_CategoryInput>;
  Category?: InputMaybe<CategoryCreateNestedOneWithoutAbility_CategoryInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutAbility_CategoryInput>;
  id: Scalars['Int'];
};

export type Ability_CategoryCreateManyAbilityInput = {
  categoryId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type Ability_CategoryCreateManyAbilityInputEnvelope = {
  data: Array<Ability_CategoryCreateManyAbilityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Ability_CategoryCreateManyCategoryInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type Ability_CategoryCreateManyCategoryInputEnvelope = {
  data: Array<Ability_CategoryCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Ability_CategoryCreateManyInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type Ability_CategoryCreateNestedManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Ability_CategoryCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<Ability_CategoryCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<Ability_CategoryCreateManyAbilityInputEnvelope>;
};

export type Ability_CategoryCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Ability_CategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<Ability_CategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<Ability_CategoryCreateManyCategoryInputEnvelope>;
};

export type Ability_CategoryCreateNestedOneWithoutQuestion_AbCatInput = {
  connect?: InputMaybe<Ability_CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Ability_CategoryCreateOrConnectWithoutQuestion_AbCatInput>;
  create?: InputMaybe<Ability_CategoryCreateWithoutQuestion_AbCatInput>;
};

export type Ability_CategoryCreateOrConnectWithoutAbilityInput = {
  create: Ability_CategoryCreateWithoutAbilityInput;
  where: Ability_CategoryWhereUniqueInput;
};

export type Ability_CategoryCreateOrConnectWithoutCategoryInput = {
  create: Ability_CategoryCreateWithoutCategoryInput;
  where: Ability_CategoryWhereUniqueInput;
};

export type Ability_CategoryCreateOrConnectWithoutQuestion_AbCatInput = {
  create: Ability_CategoryCreateWithoutQuestion_AbCatInput;
  where: Ability_CategoryWhereUniqueInput;
};

export type Ability_CategoryCreateWithoutAbilityInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutAbility_CategoryInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutAbility_CategoryInput>;
  id: Scalars['Int'];
};

export type Ability_CategoryCreateWithoutCategoryInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutAbility_CategoryInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutAbility_CategoryInput>;
  id: Scalars['Int'];
};

export type Ability_CategoryCreateWithoutQuestion_AbCatInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutAbility_CategoryInput>;
  Category?: InputMaybe<CategoryCreateNestedOneWithoutAbility_CategoryInput>;
  id: Scalars['Int'];
};

export type Ability_CategoryGroupBy = {
  __typename?: 'Ability_categoryGroupBy';
  _avg?: Maybe<Ability_CategoryAvgAggregate>;
  _count?: Maybe<Ability_CategoryCountAggregate>;
  _max?: Maybe<Ability_CategoryMaxAggregate>;
  _min?: Maybe<Ability_CategoryMinAggregate>;
  _sum?: Maybe<Ability_CategorySumAggregate>;
  abilityId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type Ability_CategoryListRelationFilter = {
  every?: InputMaybe<Ability_CategoryWhereInput>;
  none?: InputMaybe<Ability_CategoryWhereInput>;
  some?: InputMaybe<Ability_CategoryWhereInput>;
};

export type Ability_CategoryMaxAggregate = {
  __typename?: 'Ability_categoryMaxAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Ability_CategoryMaxOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type Ability_CategoryMinAggregate = {
  __typename?: 'Ability_categoryMinAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Ability_CategoryMinOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type Ability_CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Ability_CategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<Ability_CategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<Ability_CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<Ability_CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<Ability_CategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<Ability_CategorySumOrderByAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type Ability_CategoryOrderByWithRelationInput = {
  Ability?: InputMaybe<AbilityOrderByWithRelationInput>;
  Category?: InputMaybe<CategoryOrderByWithRelationInput>;
  Question_AbCat?: InputMaybe<Question_AbCatOrderByRelationAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type Ability_CategoryRelationFilter = {
  is?: InputMaybe<Ability_CategoryWhereInput>;
  isNot?: InputMaybe<Ability_CategoryWhereInput>;
};

export enum Ability_CategoryScalarFieldEnum {
  AbilityId = 'abilityId',
  CategoryId = 'categoryId',
  Id = 'id'
}

export type Ability_CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<Ability_CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<Ability_CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<Ability_CategoryScalarWhereInput>>;
  abilityId?: InputMaybe<IntNullableFilter>;
  categoryId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
};

export type Ability_CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Ability_CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Ability_CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Ability_CategoryScalarWhereWithAggregatesInput>>;
  abilityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  categoryId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type Ability_CategorySumAggregate = {
  __typename?: 'Ability_categorySumAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Ability_CategorySumOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  categoryId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type Ability_CategoryUpdateInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutAbility_CategoryInput>;
  Category?: InputMaybe<CategoryUpdateOneWithoutAbility_CategoryInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutAbility_CategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Ability_CategoryUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Ability_CategoryUpdateManyWithWhereWithoutAbilityInput = {
  data: Ability_CategoryUpdateManyMutationInput;
  where: Ability_CategoryScalarWhereInput;
};

export type Ability_CategoryUpdateManyWithWhereWithoutCategoryInput = {
  data: Ability_CategoryUpdateManyMutationInput;
  where: Ability_CategoryScalarWhereInput;
};

export type Ability_CategoryUpdateManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Ability_CategoryCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<Ability_CategoryCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<Ability_CategoryCreateManyAbilityInputEnvelope>;
  delete?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Ability_CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<Ability_CategoryUpdateWithWhereUniqueWithoutAbilityInput>>;
  updateMany?: InputMaybe<Array<Ability_CategoryUpdateManyWithWhereWithoutAbilityInput>>;
  upsert?: InputMaybe<Array<Ability_CategoryUpsertWithWhereUniqueWithoutAbilityInput>>;
};

export type Ability_CategoryUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Ability_CategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<Ability_CategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<Ability_CategoryCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Ability_CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<Ability_CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<Ability_CategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<Ability_CategoryUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<Ability_CategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type Ability_CategoryUpdateOneWithoutQuestion_AbCatInput = {
  connect?: InputMaybe<Ability_CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<Ability_CategoryCreateOrConnectWithoutQuestion_AbCatInput>;
  create?: InputMaybe<Ability_CategoryCreateWithoutQuestion_AbCatInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Ability_CategoryUpdateWithoutQuestion_AbCatInput>;
  upsert?: InputMaybe<Ability_CategoryUpsertWithoutQuestion_AbCatInput>;
};

export type Ability_CategoryUpdateWithWhereUniqueWithoutAbilityInput = {
  data: Ability_CategoryUpdateWithoutAbilityInput;
  where: Ability_CategoryWhereUniqueInput;
};

export type Ability_CategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  data: Ability_CategoryUpdateWithoutCategoryInput;
  where: Ability_CategoryWhereUniqueInput;
};

export type Ability_CategoryUpdateWithoutAbilityInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutAbility_CategoryInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutAbility_CategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Ability_CategoryUpdateWithoutCategoryInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutAbility_CategoryInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutAbility_CategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Ability_CategoryUpdateWithoutQuestion_AbCatInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutAbility_CategoryInput>;
  Category?: InputMaybe<CategoryUpdateOneWithoutAbility_CategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Ability_CategoryUpsertWithWhereUniqueWithoutAbilityInput = {
  create: Ability_CategoryCreateWithoutAbilityInput;
  update: Ability_CategoryUpdateWithoutAbilityInput;
  where: Ability_CategoryWhereUniqueInput;
};

export type Ability_CategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  create: Ability_CategoryCreateWithoutCategoryInput;
  update: Ability_CategoryUpdateWithoutCategoryInput;
  where: Ability_CategoryWhereUniqueInput;
};

export type Ability_CategoryUpsertWithoutQuestion_AbCatInput = {
  create: Ability_CategoryCreateWithoutQuestion_AbCatInput;
  update: Ability_CategoryUpdateWithoutQuestion_AbCatInput;
};

export type Ability_CategoryWhereInput = {
  AND?: InputMaybe<Array<Ability_CategoryWhereInput>>;
  Ability?: InputMaybe<AbilityRelationFilter>;
  Category?: InputMaybe<CategoryRelationFilter>;
  NOT?: InputMaybe<Array<Ability_CategoryWhereInput>>;
  OR?: InputMaybe<Array<Ability_CategoryWhereInput>>;
  Question_AbCat?: InputMaybe<Question_AbCatListRelationFilter>;
  abilityId?: InputMaybe<IntNullableFilter>;
  categoryId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
};

export type Ability_CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAbility = {
  __typename?: 'AggregateAbility';
  _avg?: Maybe<AbilityAvgAggregate>;
  _count?: Maybe<AbilityCountAggregate>;
  _max?: Maybe<AbilityMaxAggregate>;
  _min?: Maybe<AbilityMinAggregate>;
  _sum?: Maybe<AbilitySumAggregate>;
};

export type AggregateAbilityInfo = {
  __typename?: 'AggregateAbilityInfo';
  _avg?: Maybe<AbilityInfoAvgAggregate>;
  _count?: Maybe<AbilityInfoCountAggregate>;
  _max?: Maybe<AbilityInfoMaxAggregate>;
  _min?: Maybe<AbilityInfoMinAggregate>;
  _sum?: Maybe<AbilityInfoSumAggregate>;
};

export type AggregateAbility_Category = {
  __typename?: 'AggregateAbility_category';
  _avg?: Maybe<Ability_CategoryAvgAggregate>;
  _count?: Maybe<Ability_CategoryCountAggregate>;
  _max?: Maybe<Ability_CategoryMaxAggregate>;
  _min?: Maybe<Ability_CategoryMinAggregate>;
  _sum?: Maybe<Ability_CategorySumAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
};

export type AggregateQuestion = {
  __typename?: 'AggregateQuestion';
  _avg?: Maybe<QuestionAvgAggregate>;
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  _sum?: Maybe<QuestionSumAggregate>;
};

export type AggregateQuestionConversation = {
  __typename?: 'AggregateQuestionConversation';
  _avg?: Maybe<QuestionConversationAvgAggregate>;
  _count?: Maybe<QuestionConversationCountAggregate>;
  _max?: Maybe<QuestionConversationMaxAggregate>;
  _min?: Maybe<QuestionConversationMinAggregate>;
  _sum?: Maybe<QuestionConversationSumAggregate>;
};

export type AggregateQuestionGroup = {
  __typename?: 'AggregateQuestionGroup';
  _avg?: Maybe<QuestionGroupAvgAggregate>;
  _count?: Maybe<QuestionGroupCountAggregate>;
  _max?: Maybe<QuestionGroupMaxAggregate>;
  _min?: Maybe<QuestionGroupMinAggregate>;
  _sum?: Maybe<QuestionGroupSumAggregate>;
};

export type AggregateQuestionLog = {
  __typename?: 'AggregateQuestionLog';
  _avg?: Maybe<QuestionLogAvgAggregate>;
  _count?: Maybe<QuestionLogCountAggregate>;
  _max?: Maybe<QuestionLogMaxAggregate>;
  _min?: Maybe<QuestionLogMinAggregate>;
  _sum?: Maybe<QuestionLogSumAggregate>;
};

export type AggregateQuestion_AbCat = {
  __typename?: 'AggregateQuestion_AbCat';
  _avg?: Maybe<Question_AbCatAvgAggregate>;
  _count?: Maybe<Question_AbCatCountAggregate>;
  _max?: Maybe<Question_AbCatMaxAggregate>;
  _min?: Maybe<Question_AbCatMinAggregate>;
  _sum?: Maybe<Question_AbCatSumAggregate>;
};

export type AggregateSetting = {
  __typename?: 'AggregateSetting';
  _avg?: Maybe<SettingAvgAggregate>;
  _count?: Maybe<SettingCountAggregate>;
  _max?: Maybe<SettingMaxAggregate>;
  _min?: Maybe<SettingMinAggregate>;
  _sum?: Maybe<SettingSumAggregate>;
};

export type AggregateTopic = {
  __typename?: 'AggregateTopic';
  _avg?: Maybe<TopicAvgAggregate>;
  _count?: Maybe<TopicCountAggregate>;
  _max?: Maybe<TopicMaxAggregate>;
  _min?: Maybe<TopicMinAggregate>;
  _sum?: Maybe<TopicSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUserInfo = {
  __typename?: 'AggregateUserInfo';
  _avg?: Maybe<UserInfoAvgAggregate>;
  _count?: Maybe<UserInfoCountAggregate>;
  _max?: Maybe<UserInfoMaxAggregate>;
  _min?: Maybe<UserInfoMinAggregate>;
  _sum?: Maybe<UserInfoSumAggregate>;
};

export type AggregateUser_Ability = {
  __typename?: 'AggregateUser_ability';
  _avg?: Maybe<User_AbilityAvgAggregate>;
  _count?: Maybe<User_AbilityCountAggregate>;
  _max?: Maybe<User_AbilityMaxAggregate>;
  _min?: Maybe<User_AbilityMinAggregate>;
  _sum?: Maybe<User_AbilitySumAggregate>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type BoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type Category = {
  __typename?: 'Category';
  Category?: Maybe<Category>;
  _count?: Maybe<CategoryCount>;
  ability_category: Array<Ability_Category>;
  id: Scalars['Int'];
  name: Scalars['String'];
  other_Category: Array<Category>;
  parentId?: Maybe<Scalars['Int']>;
  type?: Maybe<Cat_Types>;
};


export type CategoryAbility_CategoryArgs = {
  cursor?: InputMaybe<Ability_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Ability_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Ability_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type CategoryOther_CategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryAvgAggregate = {
  __typename?: 'CategoryAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
};

export type CategoryAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  ability_category: Scalars['Int'];
  other_Category: Scalars['Int'];
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  parentId: Scalars['Int'];
  type: Scalars['Int'];
};

export type CategoryCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutOther_CategoryInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutCategoryInput>;
  id: Scalars['Int'];
  name: Scalars['String'];
  other_Category?: InputMaybe<CategoryCreateNestedManyWithoutCategoryInput>;
  type?: InputMaybe<Cat_Types>;
};

export type CategoryCreateManyCategoryInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  type?: InputMaybe<Cat_Types>;
};

export type CategoryCreateManyCategoryInputEnvelope = {
  data: Array<CategoryCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryCreateManyInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Cat_Types>;
};

export type CategoryCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryCreateManyCategoryInputEnvelope>;
};

export type CategoryCreateNestedOneWithoutAbility_CategoryInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAbility_CategoryInput>;
  create?: InputMaybe<CategoryCreateWithoutAbility_CategoryInput>;
};

export type CategoryCreateNestedOneWithoutOther_CategoryInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutOther_CategoryInput>;
  create?: InputMaybe<CategoryCreateWithoutOther_CategoryInput>;
};

export type CategoryCreateOrConnectWithoutAbility_CategoryInput = {
  create: CategoryCreateWithoutAbility_CategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutCategoryInput = {
  create: CategoryCreateWithoutCategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateOrConnectWithoutOther_CategoryInput = {
  create: CategoryCreateWithoutOther_CategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutAbility_CategoryInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutOther_CategoryInput>;
  id: Scalars['Int'];
  name: Scalars['String'];
  other_Category?: InputMaybe<CategoryCreateNestedManyWithoutCategoryInput>;
  type?: InputMaybe<Cat_Types>;
};

export type CategoryCreateWithoutCategoryInput = {
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutCategoryInput>;
  id: Scalars['Int'];
  name: Scalars['String'];
  other_Category?: InputMaybe<CategoryCreateNestedManyWithoutCategoryInput>;
  type?: InputMaybe<Cat_Types>;
};

export type CategoryCreateWithoutOther_CategoryInput = {
  Category?: InputMaybe<CategoryCreateNestedOneWithoutOther_CategoryInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedManyWithoutCategoryInput>;
  id: Scalars['Int'];
  name: Scalars['String'];
  type?: InputMaybe<Cat_Types>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  type?: Maybe<Cat_Types>;
};

export type CategoryListRelationFilter = {
  every?: InputMaybe<CategoryWhereInput>;
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  type?: Maybe<Cat_Types>;
};

export type CategoryMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  type?: Maybe<Cat_Types>;
};

export type CategoryMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<CategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<CategorySumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  Category?: InputMaybe<CategoryOrderByWithRelationInput>;
  ability_category?: InputMaybe<Ability_CategoryOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  other_Category?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  parentId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  ParentId = 'parentId',
  Type = 'type'
}

export type CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  parentId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<Enumcat_TypesNullableFilter>;
};

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  parentId?: InputMaybe<IntNullableWithAggregatesFilter>;
  type?: InputMaybe<Enumcat_TypesNullableWithAggregatesFilter>;
};

export type CategorySumAggregate = {
  __typename?: 'CategorySumAggregate';
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
};

export type CategorySumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  parentId?: InputMaybe<SortOrder>;
};

export type CategoryUpdateInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutOther_CategoryInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutCategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  other_Category?: InputMaybe<CategoryUpdateManyWithoutCategoryInput>;
  type?: InputMaybe<NullableEnumcat_TypesFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumcat_TypesFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyWithWhereWithoutCategoryInput = {
  data: CategoryUpdateManyMutationInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<CategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<CategoryCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<CategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<CategoryUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type CategoryUpdateOneWithoutAbility_CategoryInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutAbility_CategoryInput>;
  create?: InputMaybe<CategoryCreateWithoutAbility_CategoryInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutAbility_CategoryInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutAbility_CategoryInput>;
};

export type CategoryUpdateOneWithoutOther_CategoryInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutOther_CategoryInput>;
  create?: InputMaybe<CategoryCreateWithoutOther_CategoryInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CategoryUpdateWithoutOther_CategoryInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutOther_CategoryInput>;
};

export type CategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  data: CategoryUpdateWithoutCategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithoutAbility_CategoryInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutOther_CategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  other_Category?: InputMaybe<CategoryUpdateManyWithoutCategoryInput>;
  type?: InputMaybe<NullableEnumcat_TypesFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutCategoryInput = {
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutCategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  other_Category?: InputMaybe<CategoryUpdateManyWithoutCategoryInput>;
  type?: InputMaybe<NullableEnumcat_TypesFieldUpdateOperationsInput>;
};

export type CategoryUpdateWithoutOther_CategoryInput = {
  Category?: InputMaybe<CategoryUpdateOneWithoutOther_CategoryInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateManyWithoutCategoryInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumcat_TypesFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  create: CategoryCreateWithoutCategoryInput;
  update: CategoryUpdateWithoutCategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutAbility_CategoryInput = {
  create: CategoryCreateWithoutAbility_CategoryInput;
  update: CategoryUpdateWithoutAbility_CategoryInput;
};

export type CategoryUpsertWithoutOther_CategoryInput = {
  create: CategoryCreateWithoutOther_CategoryInput;
  update: CategoryUpdateWithoutOther_CategoryInput;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  Category?: InputMaybe<CategoryRelationFilter>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  ability_category?: InputMaybe<Ability_CategoryListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  other_Category?: InputMaybe<CategoryListRelationFilter>;
  parentId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<Enumcat_TypesNullableFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Enumcat_TypesNullableFilter = {
  equals?: InputMaybe<Cat_Types>;
  in?: InputMaybe<Array<Cat_Types>>;
  not?: InputMaybe<NestedEnumcat_TypesNullableFilter>;
  notIn?: InputMaybe<Array<Cat_Types>>;
};

export type Enumcat_TypesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumcat_TypesNullableFilter>;
  _min?: InputMaybe<NestedEnumcat_TypesNullableFilter>;
  equals?: InputMaybe<Cat_Types>;
  in?: InputMaybe<Array<Cat_Types>>;
  not?: InputMaybe<NestedEnumcat_TypesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Cat_Types>>;
};

export type EnumcrudNullableFilter = {
  equals?: InputMaybe<Crud>;
  in?: InputMaybe<Array<Crud>>;
  not?: InputMaybe<NestedEnumcrudNullableFilter>;
  notIn?: InputMaybe<Array<Crud>>;
};

export type EnumcrudNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumcrudNullableFilter>;
  _min?: InputMaybe<NestedEnumcrudNullableFilter>;
  equals?: InputMaybe<Crud>;
  in?: InputMaybe<Array<Crud>>;
  not?: InputMaybe<NestedEnumcrudNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Crud>>;
};

export type Enumquestion_TypeNullableFilter = {
  equals?: InputMaybe<Question_Type>;
  in?: InputMaybe<Array<Question_Type>>;
  not?: InputMaybe<NestedEnumquestion_TypeNullableFilter>;
  notIn?: InputMaybe<Array<Question_Type>>;
};

export type Enumquestion_TypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumquestion_TypeNullableFilter>;
  _min?: InputMaybe<NestedEnumquestion_TypeNullableFilter>;
  equals?: InputMaybe<Question_Type>;
  in?: InputMaybe<Array<Question_Type>>;
  not?: InputMaybe<NestedEnumquestion_TypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Question_Type>>;
};

export type Enumuser_RolesNullableFilter = {
  equals?: InputMaybe<User_Roles>;
  in?: InputMaybe<Array<User_Roles>>;
  not?: InputMaybe<NestedEnumuser_RolesNullableFilter>;
  notIn?: InputMaybe<Array<User_Roles>>;
};

export type Enumuser_RolesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumuser_RolesNullableFilter>;
  _min?: InputMaybe<NestedEnumuser_RolesNullableFilter>;
  equals?: InputMaybe<User_Roles>;
  in?: InputMaybe<Array<User_Roles>>;
  not?: InputMaybe<NestedEnumuser_RolesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<User_Roles>>;
};

export type File = {
  __typename?: 'File';
  Question: Array<Question>;
  QuestionConversation: Array<QuestionConversation>;
  _count?: Maybe<FileCount>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};


export type FileQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type FileQuestionConversationArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type FileAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FileCount = {
  __typename?: 'FileCount';
  Question: Scalars['Int'];
  QuestionConversation: Scalars['Int'];
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  path: Scalars['Int'];
};

export type FileCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutFileInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutFileInput>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type FileCreateManyInput = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type FileCreateNestedOneWithoutQuestionConversationInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutQuestionConversationInput>;
  create?: InputMaybe<FileCreateWithoutQuestionConversationInput>;
};

export type FileCreateNestedOneWithoutQuestionInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<FileCreateWithoutQuestionInput>;
};

export type FileCreateOrConnectWithoutQuestionConversationInput = {
  create: FileCreateWithoutQuestionConversationInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutQuestionInput = {
  create: FileCreateWithoutQuestionInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutQuestionConversationInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutFileInput>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type FileCreateWithoutQuestionInput = {
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutFileInput>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type FileMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type FileMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  Question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  QuestionConversation?: InputMaybe<QuestionConversationOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
};

export type FileRelationFilter = {
  is?: InputMaybe<FileWhereInput>;
  isNot?: InputMaybe<FileWhereInput>;
};

export enum FileScalarFieldEnum {
  Id = 'id',
  Name = 'name',
  Path = 'path'
}

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  path?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type FileSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutFileInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutFileInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FileUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FileUpdateOneWithoutQuestionConversationInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutQuestionConversationInput>;
  create?: InputMaybe<FileCreateWithoutQuestionConversationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FileUpdateWithoutQuestionConversationInput>;
  upsert?: InputMaybe<FileUpsertWithoutQuestionConversationInput>;
};

export type FileUpdateOneWithoutQuestionInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<FileCreateWithoutQuestionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FileUpdateWithoutQuestionInput>;
  upsert?: InputMaybe<FileUpsertWithoutQuestionInput>;
};

export type FileUpdateWithoutQuestionConversationInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutFileInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FileUpdateWithoutQuestionInput = {
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutFileInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  path?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type FileUpsertWithoutQuestionConversationInput = {
  create: FileCreateWithoutQuestionConversationInput;
  update: FileUpdateWithoutQuestionConversationInput;
};

export type FileUpsertWithoutQuestionInput = {
  create: FileCreateWithoutQuestionInput;
  update: FileUpdateWithoutQuestionInput;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  Question?: InputMaybe<QuestionListRelationFilter>;
  QuestionConversation?: InputMaybe<QuestionConversationListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  path?: InputMaybe<StringNullableFilter>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  Question: Array<Question>;
  QuestionConversation: Array<QuestionConversation>;
  QuestionLog: Array<QuestionLog>;
  _count?: Maybe<UserCount>;
  canLogin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  mata?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<User_Roles>;
  token: Scalars['String'];
  userInfo: Array<UserInfo>;
  user_ability: Array<User_Ability>;
  username: Scalars['String'];
};


export type LoginOutputQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type LoginOutputQuestionConversationArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type LoginOutputQuestionLogArgs = {
  cursor?: InputMaybe<QuestionLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type LoginOutputUserInfoArgs = {
  cursor?: InputMaybe<UserInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserInfoWhereInput>;
};


export type LoginOutputUser_AbilityArgs = {
  cursor?: InputMaybe<User_AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<User_AbilityWhereInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAbility: Ability;
  createAbilityInfo: AbilityInfo;
  createAbility_category: Ability_Category;
  createCategory: Category;
  createFile: File;
  createManyAbility: AffectedRowsOutput;
  createManyAbilityInfo: AffectedRowsOutput;
  createManyAbility_category: AffectedRowsOutput;
  createManyCategory: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyQuestion: AffectedRowsOutput;
  createManyQuestionConversation: AffectedRowsOutput;
  createManyQuestionGroup: AffectedRowsOutput;
  createManyQuestionLog: AffectedRowsOutput;
  createManyQuestion_AbCat: AffectedRowsOutput;
  createManySetting: AffectedRowsOutput;
  createManyTopic: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserInfo: AffectedRowsOutput;
  createManyUser_ability: AffectedRowsOutput;
  createQuestion: Question;
  createQuestionConversation: QuestionConversation;
  createQuestionGroup: QuestionGroup;
  createQuestionLog: QuestionLog;
  createQuestion_AbCat: Question_AbCat;
  createSetting: Setting;
  createTopic: Topic;
  createUser: User;
  createUserInfo: UserInfo;
  createUser_ability: User_Ability;
  deleteAbility?: Maybe<Ability>;
  deleteAbilityInfo?: Maybe<AbilityInfo>;
  deleteAbility_category?: Maybe<Ability_Category>;
  deleteCategory?: Maybe<Category>;
  deleteFile?: Maybe<File>;
  deleteManyAbility: AffectedRowsOutput;
  deleteManyAbilityInfo: AffectedRowsOutput;
  deleteManyAbility_category: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyQuestion: AffectedRowsOutput;
  deleteManyQuestionConversation: AffectedRowsOutput;
  deleteManyQuestionGroup: AffectedRowsOutput;
  deleteManyQuestionLog: AffectedRowsOutput;
  deleteManyQuestion_AbCat: AffectedRowsOutput;
  deleteManySetting: AffectedRowsOutput;
  deleteManyTopic: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserInfo: AffectedRowsOutput;
  deleteManyUser_ability: AffectedRowsOutput;
  deleteQuestion?: Maybe<Question>;
  deleteQuestionConversation?: Maybe<QuestionConversation>;
  deleteQuestionGroup?: Maybe<QuestionGroup>;
  deleteQuestionLog?: Maybe<QuestionLog>;
  deleteQuestion_AbCat?: Maybe<Question_AbCat>;
  deleteSetting?: Maybe<Setting>;
  deleteTopic?: Maybe<Topic>;
  deleteUser?: Maybe<User>;
  deleteUserInfo?: Maybe<UserInfo>;
  deleteUser_ability?: Maybe<User_Ability>;
  login: LoginOutput;
  updateAbility?: Maybe<Ability>;
  updateAbilityInfo?: Maybe<AbilityInfo>;
  updateAbility_category?: Maybe<Ability_Category>;
  updateCategory?: Maybe<Category>;
  updateFile?: Maybe<File>;
  updateManyAbility: AffectedRowsOutput;
  updateManyAbilityInfo: AffectedRowsOutput;
  updateManyAbility_category: AffectedRowsOutput;
  updateManyCategory: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyQuestion: AffectedRowsOutput;
  updateManyQuestionConversation: AffectedRowsOutput;
  updateManyQuestionGroup: AffectedRowsOutput;
  updateManyQuestionLog: AffectedRowsOutput;
  updateManyQuestion_AbCat: AffectedRowsOutput;
  updateManySetting: AffectedRowsOutput;
  updateManyTopic: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserInfo: AffectedRowsOutput;
  updateManyUser_ability: AffectedRowsOutput;
  updateQuestion?: Maybe<Question>;
  updateQuestionConversation?: Maybe<QuestionConversation>;
  updateQuestionGroup?: Maybe<QuestionGroup>;
  updateQuestionLog?: Maybe<QuestionLog>;
  updateQuestion_AbCat?: Maybe<Question_AbCat>;
  updateSetting?: Maybe<Setting>;
  updateTopic?: Maybe<Topic>;
  updateUser?: Maybe<User>;
  updateUserInfo?: Maybe<UserInfo>;
  updateUser_ability?: Maybe<User_Ability>;
  upsertAbility: Ability;
  upsertAbilityInfo: AbilityInfo;
  upsertAbility_category: Ability_Category;
  upsertCategory: Category;
  upsertFile: File;
  upsertQuestion: Question;
  upsertQuestionConversation: QuestionConversation;
  upsertQuestionGroup: QuestionGroup;
  upsertQuestionLog: QuestionLog;
  upsertQuestion_AbCat: Question_AbCat;
  upsertSetting: Setting;
  upsertTopic: Topic;
  upsertUser: User;
  upsertUserInfo: UserInfo;
  upsertUser_ability: User_Ability;
};


export type MutationCreateAbilityArgs = {
  data: AbilityCreateInput;
};


export type MutationCreateAbilityInfoArgs = {
  data: AbilityInfoCreateInput;
};


export type MutationCreateAbility_CategoryArgs = {
  data: Ability_CategoryCreateInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateFileArgs = {
  data: FileCreateInput;
};


export type MutationCreateManyAbilityArgs = {
  data: Array<AbilityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAbilityInfoArgs = {
  data: Array<AbilityInfoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyAbility_CategoryArgs = {
  data: Array<Ability_CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyQuestionArgs = {
  data: Array<QuestionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyQuestionConversationArgs = {
  data: Array<QuestionConversationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyQuestionGroupArgs = {
  data: Array<QuestionGroupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyQuestionLogArgs = {
  data: Array<QuestionLogCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyQuestion_AbCatArgs = {
  data: Array<Question_AbCatCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySettingArgs = {
  data: Array<SettingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTopicArgs = {
  data: Array<TopicCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserInfoArgs = {
  data: Array<UserInfoCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUser_AbilityArgs = {
  data: Array<User_AbilityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateQuestionConversationArgs = {
  data: QuestionConversationCreateInput;
};


export type MutationCreateQuestionGroupArgs = {
  data: QuestionGroupCreateInput;
};


export type MutationCreateQuestionLogArgs = {
  data: QuestionLogCreateInput;
};


export type MutationCreateQuestion_AbCatArgs = {
  data: Question_AbCatCreateInput;
};


export type MutationCreateSettingArgs = {
  data: SettingCreateInput;
};


export type MutationCreateTopicArgs = {
  data: TopicCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserInfoArgs = {
  data: UserInfoCreateInput;
};


export type MutationCreateUser_AbilityArgs = {
  data: User_AbilityCreateInput;
};


export type MutationDeleteAbilityArgs = {
  where: AbilityWhereUniqueInput;
};


export type MutationDeleteAbilityInfoArgs = {
  where: AbilityInfoWhereUniqueInput;
};


export type MutationDeleteAbility_CategoryArgs = {
  where: Ability_CategoryWhereUniqueInput;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationDeleteManyAbilityArgs = {
  where?: InputMaybe<AbilityWhereInput>;
};


export type MutationDeleteManyAbilityInfoArgs = {
  where?: InputMaybe<AbilityInfoWhereInput>;
};


export type MutationDeleteManyAbility_CategoryArgs = {
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where?: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyQuestionArgs = {
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationDeleteManyQuestionConversationArgs = {
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type MutationDeleteManyQuestionGroupArgs = {
  where?: InputMaybe<QuestionGroupWhereInput>;
};


export type MutationDeleteManyQuestionLogArgs = {
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type MutationDeleteManyQuestion_AbCatArgs = {
  where?: InputMaybe<Question_AbCatWhereInput>;
};


export type MutationDeleteManySettingArgs = {
  where?: InputMaybe<SettingWhereInput>;
};


export type MutationDeleteManyTopicArgs = {
  where?: InputMaybe<TopicWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserInfoArgs = {
  where?: InputMaybe<UserInfoWhereInput>;
};


export type MutationDeleteManyUser_AbilityArgs = {
  where?: InputMaybe<User_AbilityWhereInput>;
};


export type MutationDeleteQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationDeleteQuestionConversationArgs = {
  where: QuestionConversationWhereUniqueInput;
};


export type MutationDeleteQuestionGroupArgs = {
  where: QuestionGroupWhereUniqueInput;
};


export type MutationDeleteQuestionLogArgs = {
  where: QuestionLogWhereUniqueInput;
};


export type MutationDeleteQuestion_AbCatArgs = {
  where: Question_AbCatWhereUniqueInput;
};


export type MutationDeleteSettingArgs = {
  where: SettingWhereUniqueInput;
};


export type MutationDeleteTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserInfoArgs = {
  where: UserInfoWhereUniqueInput;
};


export type MutationDeleteUser_AbilityArgs = {
  where: User_AbilityWhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationUpdateAbilityArgs = {
  data: AbilityUpdateInput;
  where: AbilityWhereUniqueInput;
};


export type MutationUpdateAbilityInfoArgs = {
  data: AbilityInfoUpdateInput;
  where: AbilityInfoWhereUniqueInput;
};


export type MutationUpdateAbility_CategoryArgs = {
  data: Ability_CategoryUpdateInput;
  where: Ability_CategoryWhereUniqueInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpdateManyAbilityArgs = {
  data: AbilityUpdateManyMutationInput;
  where?: InputMaybe<AbilityWhereInput>;
};


export type MutationUpdateManyAbilityInfoArgs = {
  data: AbilityInfoUpdateManyMutationInput;
  where?: InputMaybe<AbilityInfoWhereInput>;
};


export type MutationUpdateManyAbility_CategoryArgs = {
  data: Ability_CategoryUpdateManyMutationInput;
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyQuestionArgs = {
  data: QuestionUpdateManyMutationInput;
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationUpdateManyQuestionConversationArgs = {
  data: QuestionConversationUpdateManyMutationInput;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type MutationUpdateManyQuestionGroupArgs = {
  data: QuestionGroupUpdateManyMutationInput;
  where?: InputMaybe<QuestionGroupWhereInput>;
};


export type MutationUpdateManyQuestionLogArgs = {
  data: QuestionLogUpdateManyMutationInput;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type MutationUpdateManyQuestion_AbCatArgs = {
  data: Question_AbCatUpdateManyMutationInput;
  where?: InputMaybe<Question_AbCatWhereInput>;
};


export type MutationUpdateManySettingArgs = {
  data: SettingUpdateManyMutationInput;
  where?: InputMaybe<SettingWhereInput>;
};


export type MutationUpdateManyTopicArgs = {
  data: TopicUpdateManyMutationInput;
  where?: InputMaybe<TopicWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserInfoArgs = {
  data: UserInfoUpdateManyMutationInput;
  where?: InputMaybe<UserInfoWhereInput>;
};


export type MutationUpdateManyUser_AbilityArgs = {
  data: User_AbilityUpdateManyMutationInput;
  where?: InputMaybe<User_AbilityWhereInput>;
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateQuestionConversationArgs = {
  data: QuestionConversationUpdateInput;
  where: QuestionConversationWhereUniqueInput;
};


export type MutationUpdateQuestionGroupArgs = {
  data: QuestionGroupUpdateInput;
  where: QuestionGroupWhereUniqueInput;
};


export type MutationUpdateQuestionLogArgs = {
  data: QuestionLogUpdateInput;
  where: QuestionLogWhereUniqueInput;
};


export type MutationUpdateQuestion_AbCatArgs = {
  data: Question_AbCatUpdateInput;
  where: Question_AbCatWhereUniqueInput;
};


export type MutationUpdateSettingArgs = {
  data: SettingUpdateInput;
  where: SettingWhereUniqueInput;
};


export type MutationUpdateTopicArgs = {
  data: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserInfoArgs = {
  data: UserInfoUpdateInput;
  where: UserInfoWhereUniqueInput;
};


export type MutationUpdateUser_AbilityArgs = {
  data: User_AbilityUpdateInput;
  where: User_AbilityWhereUniqueInput;
};


export type MutationUpsertAbilityArgs = {
  create: AbilityCreateInput;
  update: AbilityUpdateInput;
  where: AbilityWhereUniqueInput;
};


export type MutationUpsertAbilityInfoArgs = {
  create: AbilityInfoCreateInput;
  update: AbilityInfoUpdateInput;
  where: AbilityInfoWhereUniqueInput;
};


export type MutationUpsertAbility_CategoryArgs = {
  create: Ability_CategoryCreateInput;
  update: Ability_CategoryUpdateInput;
  where: Ability_CategoryWhereUniqueInput;
};


export type MutationUpsertCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertFileArgs = {
  create: FileCreateInput;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertQuestionArgs = {
  create: QuestionCreateInput;
  update: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpsertQuestionConversationArgs = {
  create: QuestionConversationCreateInput;
  update: QuestionConversationUpdateInput;
  where: QuestionConversationWhereUniqueInput;
};


export type MutationUpsertQuestionGroupArgs = {
  create: QuestionGroupCreateInput;
  update: QuestionGroupUpdateInput;
  where: QuestionGroupWhereUniqueInput;
};


export type MutationUpsertQuestionLogArgs = {
  create: QuestionLogCreateInput;
  update: QuestionLogUpdateInput;
  where: QuestionLogWhereUniqueInput;
};


export type MutationUpsertQuestion_AbCatArgs = {
  create: Question_AbCatCreateInput;
  update: Question_AbCatUpdateInput;
  where: Question_AbCatWhereUniqueInput;
};


export type MutationUpsertSettingArgs = {
  create: SettingCreateInput;
  update: SettingUpdateInput;
  where: SettingWhereUniqueInput;
};


export type MutationUpsertTopicArgs = {
  create: TopicCreateInput;
  update: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertUserInfoArgs = {
  create: UserInfoCreateInput;
  update: UserInfoUpdateInput;
  where: UserInfoWhereUniqueInput;
};


export type MutationUpsertUser_AbilityArgs = {
  create: User_AbilityCreateInput;
  update: User_AbilityUpdateInput;
  where: User_AbilityWhereUniqueInput;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedBoolNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBoolNullableFilter>;
  _min?: InputMaybe<NestedBoolNullableFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableWithAggregatesFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumcat_TypesNullableFilter = {
  equals?: InputMaybe<Cat_Types>;
  in?: InputMaybe<Array<Cat_Types>>;
  not?: InputMaybe<NestedEnumcat_TypesNullableFilter>;
  notIn?: InputMaybe<Array<Cat_Types>>;
};

export type NestedEnumcat_TypesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumcat_TypesNullableFilter>;
  _min?: InputMaybe<NestedEnumcat_TypesNullableFilter>;
  equals?: InputMaybe<Cat_Types>;
  in?: InputMaybe<Array<Cat_Types>>;
  not?: InputMaybe<NestedEnumcat_TypesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Cat_Types>>;
};

export type NestedEnumcrudNullableFilter = {
  equals?: InputMaybe<Crud>;
  in?: InputMaybe<Array<Crud>>;
  not?: InputMaybe<NestedEnumcrudNullableFilter>;
  notIn?: InputMaybe<Array<Crud>>;
};

export type NestedEnumcrudNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumcrudNullableFilter>;
  _min?: InputMaybe<NestedEnumcrudNullableFilter>;
  equals?: InputMaybe<Crud>;
  in?: InputMaybe<Array<Crud>>;
  not?: InputMaybe<NestedEnumcrudNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Crud>>;
};

export type NestedEnumquestion_TypeNullableFilter = {
  equals?: InputMaybe<Question_Type>;
  in?: InputMaybe<Array<Question_Type>>;
  not?: InputMaybe<NestedEnumquestion_TypeNullableFilter>;
  notIn?: InputMaybe<Array<Question_Type>>;
};

export type NestedEnumquestion_TypeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumquestion_TypeNullableFilter>;
  _min?: InputMaybe<NestedEnumquestion_TypeNullableFilter>;
  equals?: InputMaybe<Question_Type>;
  in?: InputMaybe<Array<Question_Type>>;
  not?: InputMaybe<NestedEnumquestion_TypeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Question_Type>>;
};

export type NestedEnumuser_RolesNullableFilter = {
  equals?: InputMaybe<User_Roles>;
  in?: InputMaybe<Array<User_Roles>>;
  not?: InputMaybe<NestedEnumuser_RolesNullableFilter>;
  notIn?: InputMaybe<Array<User_Roles>>;
};

export type NestedEnumuser_RolesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumuser_RolesNullableFilter>;
  _min?: InputMaybe<NestedEnumuser_RolesNullableFilter>;
  equals?: InputMaybe<User_Roles>;
  in?: InputMaybe<Array<User_Roles>>;
  not?: InputMaybe<NestedEnumuser_RolesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<User_Roles>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableEnumcat_TypesFieldUpdateOperationsInput = {
  set?: InputMaybe<Cat_Types>;
};

export type NullableEnumcrudFieldUpdateOperationsInput = {
  set?: InputMaybe<Crud>;
};

export type NullableEnumquestion_TypeFieldUpdateOperationsInput = {
  set?: InputMaybe<Question_Type>;
};

export type NullableEnumuser_RolesFieldUpdateOperationsInput = {
  set?: InputMaybe<User_Roles>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  abilities: Array<Ability>;
  ability?: Maybe<Ability>;
  abilityInfo?: Maybe<AbilityInfo>;
  abilityInfos: Array<AbilityInfo>;
  ability_categories: Array<Ability_Category>;
  ability_category?: Maybe<Ability_Category>;
  aggregateAbility: AggregateAbility;
  aggregateAbilityInfo: AggregateAbilityInfo;
  aggregateAbility_category: AggregateAbility_Category;
  aggregateCategory: AggregateCategory;
  aggregateFile: AggregateFile;
  aggregateQuestion: AggregateQuestion;
  aggregateQuestionConversation: AggregateQuestionConversation;
  aggregateQuestionGroup: AggregateQuestionGroup;
  aggregateQuestionLog: AggregateQuestionLog;
  aggregateQuestion_AbCat: AggregateQuestion_AbCat;
  aggregateSetting: AggregateSetting;
  aggregateTopic: AggregateTopic;
  aggregateUser: AggregateUser;
  aggregateUserInfo: AggregateUserInfo;
  aggregateUser_ability: AggregateUser_Ability;
  categories: Array<Category>;
  category?: Maybe<Category>;
  fetchSetting: Array<Setting>;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstAbility?: Maybe<Ability>;
  findFirstAbilityInfo?: Maybe<AbilityInfo>;
  findFirstAbility_category?: Maybe<Ability_Category>;
  findFirstCategory?: Maybe<Category>;
  findFirstFile?: Maybe<File>;
  findFirstQuestion?: Maybe<Question>;
  findFirstQuestionConversation?: Maybe<QuestionConversation>;
  findFirstQuestionGroup?: Maybe<QuestionGroup>;
  findFirstQuestionLog?: Maybe<QuestionLog>;
  findFirstQuestion_AbCat?: Maybe<Question_AbCat>;
  findFirstSetting?: Maybe<Setting>;
  findFirstTopic?: Maybe<Topic>;
  findFirstUser?: Maybe<User>;
  findFirstUserInfo?: Maybe<UserInfo>;
  findFirstUser_ability?: Maybe<User_Ability>;
  groupByAbility: Array<AbilityGroupBy>;
  groupByAbilityInfo: Array<AbilityInfoGroupBy>;
  groupByAbility_category: Array<Ability_CategoryGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByQuestion: Array<QuestionGroupBy>;
  groupByQuestionConversation: Array<QuestionConversationGroupBy>;
  groupByQuestionGroup: Array<QuestionGroupGroupBy>;
  groupByQuestionLog: Array<QuestionLogGroupBy>;
  groupByQuestion_AbCat: Array<Question_AbCatGroupBy>;
  groupBySetting: Array<SettingGroupBy>;
  groupByTopic: Array<TopicGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserInfo: Array<UserInfoGroupBy>;
  groupByUser_ability: Array<User_AbilityGroupBy>;
  question?: Maybe<Question>;
  questionConversation?: Maybe<QuestionConversation>;
  questionConversations: Array<QuestionConversation>;
  questionGroup?: Maybe<QuestionGroup>;
  questionGroups: Array<QuestionGroup>;
  questionLog?: Maybe<QuestionLog>;
  questionLogs: Array<QuestionLog>;
  question_AbCat?: Maybe<Question_AbCat>;
  question_AbCats: Array<Question_AbCat>;
  questions: Array<Question>;
  setting?: Maybe<Setting>;
  settings: Array<Setting>;
  topic?: Maybe<Topic>;
  topics: Array<Topic>;
  user?: Maybe<User>;
  userInfo?: Maybe<UserInfo>;
  userInfos: Array<UserInfo>;
  user_abilities: Array<User_Ability>;
  user_ability?: Maybe<User_Ability>;
  users: Array<User>;
};


export type QueryAbilitiesArgs = {
  cursor?: InputMaybe<AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryAbilityArgs = {
  where: AbilityWhereUniqueInput;
};


export type QueryAbilityInfoArgs = {
  where: AbilityInfoWhereUniqueInput;
};


export type QueryAbilityInfosArgs = {
  cursor?: InputMaybe<AbilityInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AbilityInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AbilityInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityInfoWhereInput>;
};


export type QueryAbility_CategoriesArgs = {
  cursor?: InputMaybe<Ability_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Ability_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Ability_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type QueryAbility_CategoryArgs = {
  where: Ability_CategoryWhereUniqueInput;
};


export type QueryAggregateAbilityArgs = {
  cursor?: InputMaybe<AbilityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryAggregateAbilityInfoArgs = {
  cursor?: InputMaybe<AbilityInfoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AbilityInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityInfoWhereInput>;
};


export type QueryAggregateAbility_CategoryArgs = {
  cursor?: InputMaybe<Ability_CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Ability_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryAggregateQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryAggregateQuestionConversationArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type QueryAggregateQuestionGroupArgs = {
  cursor?: InputMaybe<QuestionGroupWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionGroupWhereInput>;
};


export type QueryAggregateQuestionLogArgs = {
  cursor?: InputMaybe<QuestionLogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type QueryAggregateQuestion_AbCatArgs = {
  cursor?: InputMaybe<Question_AbCatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Question_AbCatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Question_AbCatWhereInput>;
};


export type QueryAggregateSettingArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QueryAggregateTopicArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserInfoArgs = {
  cursor?: InputMaybe<UserInfoWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserInfoWhereInput>;
};


export type QueryAggregateUser_AbilityArgs = {
  cursor?: InputMaybe<User_AbilityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<User_AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<User_AbilityWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFetchSettingArgs = {
  data: SettingInput;
};


export type QueryFileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstAbilityArgs = {
  cursor?: InputMaybe<AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryFindFirstAbilityInfoArgs = {
  cursor?: InputMaybe<AbilityInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<AbilityInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AbilityInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityInfoWhereInput>;
};


export type QueryFindFirstAbility_CategoryArgs = {
  cursor?: InputMaybe<Ability_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Ability_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Ability_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryFindFirstQuestionConversationArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type QueryFindFirstQuestionGroupArgs = {
  cursor?: InputMaybe<QuestionGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionGroupWhereInput>;
};


export type QueryFindFirstQuestionLogArgs = {
  cursor?: InputMaybe<QuestionLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type QueryFindFirstQuestion_AbCatArgs = {
  cursor?: InputMaybe<Question_AbCatWhereUniqueInput>;
  distinct?: InputMaybe<Array<Question_AbCatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Question_AbCatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Question_AbCatWhereInput>;
};


export type QueryFindFirstSettingArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QueryFindFirstTopicArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<TopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserInfoArgs = {
  cursor?: InputMaybe<UserInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserInfoWhereInput>;
};


export type QueryFindFirstUser_AbilityArgs = {
  cursor?: InputMaybe<User_AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<User_AbilityWhereInput>;
};


export type QueryGroupByAbilityArgs = {
  by: Array<AbilityScalarFieldEnum>;
  having?: InputMaybe<AbilityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AbilityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityWhereInput>;
};


export type QueryGroupByAbilityInfoArgs = {
  by: Array<AbilityInfoScalarFieldEnum>;
  having?: InputMaybe<AbilityInfoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AbilityInfoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AbilityInfoWhereInput>;
};


export type QueryGroupByAbility_CategoryArgs = {
  by: Array<Ability_CategoryScalarFieldEnum>;
  having?: InputMaybe<Ability_CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Ability_CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Ability_CategoryWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having?: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryGroupByQuestionArgs = {
  by: Array<QuestionScalarFieldEnum>;
  having?: InputMaybe<QuestionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryGroupByQuestionConversationArgs = {
  by: Array<QuestionConversationScalarFieldEnum>;
  having?: InputMaybe<QuestionConversationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type QueryGroupByQuestionGroupArgs = {
  by: Array<QuestionGroupScalarFieldEnum>;
  having?: InputMaybe<QuestionGroupScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionGroupOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionGroupWhereInput>;
};


export type QueryGroupByQuestionLogArgs = {
  by: Array<QuestionLogScalarFieldEnum>;
  having?: InputMaybe<QuestionLogScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionLogOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type QueryGroupByQuestion_AbCatArgs = {
  by: Array<Question_AbCatScalarFieldEnum>;
  having?: InputMaybe<Question_AbCatScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Question_AbCatOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Question_AbCatWhereInput>;
};


export type QueryGroupBySettingArgs = {
  by: Array<SettingScalarFieldEnum>;
  having?: InputMaybe<SettingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SettingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QueryGroupByTopicArgs = {
  by: Array<TopicScalarFieldEnum>;
  having?: InputMaybe<TopicScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TopicOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserInfoArgs = {
  by: Array<UserInfoScalarFieldEnum>;
  having?: InputMaybe<UserInfoScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserInfoOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserInfoWhereInput>;
};


export type QueryGroupByUser_AbilityArgs = {
  by: Array<User_AbilityScalarFieldEnum>;
  having?: InputMaybe<User_AbilityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<User_AbilityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<User_AbilityWhereInput>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionConversationArgs = {
  where: QuestionConversationWhereUniqueInput;
};


export type QueryQuestionConversationsArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type QueryQuestionGroupArgs = {
  where: QuestionGroupWhereUniqueInput;
};


export type QueryQuestionGroupsArgs = {
  cursor?: InputMaybe<QuestionGroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionGroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionGroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionGroupWhereInput>;
};


export type QueryQuestionLogArgs = {
  where: QuestionLogWhereUniqueInput;
};


export type QueryQuestionLogsArgs = {
  cursor?: InputMaybe<QuestionLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type QueryQuestion_AbCatArgs = {
  where: Question_AbCatWhereUniqueInput;
};


export type QueryQuestion_AbCatsArgs = {
  cursor?: InputMaybe<Question_AbCatWhereUniqueInput>;
  distinct?: InputMaybe<Array<Question_AbCatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Question_AbCatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Question_AbCatWhereInput>;
};


export type QueryQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QuerySettingArgs = {
  where: SettingWhereUniqueInput;
};


export type QuerySettingsArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QueryTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type QueryTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<TopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserInfoArgs = {
  where: UserInfoWhereUniqueInput;
};


export type QueryUserInfosArgs = {
  cursor?: InputMaybe<UserInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserInfoWhereInput>;
};


export type QueryUser_AbilitiesArgs = {
  cursor?: InputMaybe<User_AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<User_AbilityWhereInput>;
};


export type QueryUser_AbilityArgs = {
  where: User_AbilityWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  Ability?: Maybe<Ability>;
  File?: Maybe<File>;
  QuestionConversation: Array<QuestionConversation>;
  QuestionGroup?: Maybe<QuestionGroup>;
  QuestionLog: Array<QuestionLog>;
  Question_AbCat: Array<Question_AbCat>;
  Topic?: Maybe<Topic>;
  User?: Maybe<User>;
  _count?: Maybe<QuestionCount>;
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  observerApprove?: Maybe<Scalars['Boolean']>;
  questionGroupId?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  supervisorApprove?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
  topicId?: Maybe<Scalars['Int']>;
  type?: Maybe<Question_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type QuestionQuestionConversationArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type QuestionQuestionLogArgs = {
  cursor?: InputMaybe<QuestionLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type QuestionQuestion_AbCatArgs = {
  cursor?: InputMaybe<Question_AbCatWhereUniqueInput>;
  distinct?: InputMaybe<Array<Question_AbCatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Question_AbCatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Question_AbCatWhereInput>;
};

export type QuestionAvgAggregate = {
  __typename?: 'QuestionAvgAggregate';
  abilityId?: Maybe<Scalars['Float']>;
  creatorId?: Maybe<Scalars['Float']>;
  fileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  questionGroupId?: Maybe<Scalars['Float']>;
  topicId?: Maybe<Scalars['Float']>;
};

export type QuestionAvgOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionGroupId?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
};

export type QuestionConversation = {
  __typename?: 'QuestionConversation';
  File?: Maybe<File>;
  Question?: Maybe<Question>;
  QuestionConversation?: Maybe<QuestionConversation>;
  User?: Maybe<User>;
  _count?: Maybe<QuestionConversationCount>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fileId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  other_QuestionConversation: Array<QuestionConversation>;
  questionId?: Maybe<Scalars['Int']>;
  replyId?: Maybe<Scalars['Int']>;
  sendAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};


export type QuestionConversationOther_QuestionConversationArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};

export type QuestionConversationAvgAggregate = {
  __typename?: 'QuestionConversationAvgAggregate';
  fileId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  replyId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type QuestionConversationAvgOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionConversationCount = {
  __typename?: 'QuestionConversationCount';
  other_QuestionConversation: Scalars['Int'];
};

export type QuestionConversationCountAggregate = {
  __typename?: 'QuestionConversationCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  fileId: Scalars['Int'];
  id: Scalars['Int'];
  message: Scalars['Int'];
  questionId: Scalars['Int'];
  replyId: Scalars['Int'];
  sendAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type QuestionConversationCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
  sendAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionConversationCreateInput = {
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  other_QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionConversationCreateManyFileInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['Int']>;
  replyId?: InputMaybe<Scalars['Int']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QuestionConversationCreateManyFileInputEnvelope = {
  data: Array<QuestionConversationCreateManyFileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionConversationCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['Int']>;
  replyId?: InputMaybe<Scalars['Int']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QuestionConversationCreateManyQuestionConversationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['Int']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QuestionConversationCreateManyQuestionConversationInputEnvelope = {
  data: Array<QuestionConversationCreateManyQuestionConversationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionConversationCreateManyQuestionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  replyId?: InputMaybe<Scalars['Int']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QuestionConversationCreateManyQuestionInputEnvelope = {
  data: Array<QuestionConversationCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionConversationCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['Int']>;
  replyId?: InputMaybe<Scalars['Int']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionConversationCreateManyUserInputEnvelope = {
  data: Array<QuestionConversationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionConversationCreateNestedManyWithoutFileInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutFileInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyFileInputEnvelope>;
};

export type QuestionConversationCreateNestedManyWithoutQuestionConversationInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutQuestionConversationInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutQuestionConversationInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyQuestionConversationInputEnvelope>;
};

export type QuestionConversationCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyQuestionInputEnvelope>;
};

export type QuestionConversationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutUserInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyUserInputEnvelope>;
};

export type QuestionConversationCreateNestedOneWithoutOther_QuestionConversationInput = {
  connect?: InputMaybe<QuestionConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionConversationCreateOrConnectWithoutOther_QuestionConversationInput>;
  create?: InputMaybe<QuestionConversationCreateWithoutOther_QuestionConversationInput>;
};

export type QuestionConversationCreateOrConnectWithoutFileInput = {
  create: QuestionConversationCreateWithoutFileInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationCreateOrConnectWithoutOther_QuestionConversationInput = {
  create: QuestionConversationCreateWithoutOther_QuestionConversationInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationCreateOrConnectWithoutQuestionConversationInput = {
  create: QuestionConversationCreateWithoutQuestionConversationInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationCreateOrConnectWithoutQuestionInput = {
  create: QuestionConversationCreateWithoutQuestionInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationCreateOrConnectWithoutUserInput = {
  create: QuestionConversationCreateWithoutUserInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationCreateWithoutFileInput = {
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  other_QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionConversationCreateWithoutOther_QuestionConversationInput = {
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionConversationCreateWithoutQuestionConversationInput = {
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestionConversationInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  other_QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionConversationCreateWithoutQuestionInput = {
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  other_QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionConversationCreateWithoutUserInput = {
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedOneWithoutOther_QuestionConversationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  message?: InputMaybe<Scalars['String']>;
  other_QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionConversationGroupBy = {
  __typename?: 'QuestionConversationGroupBy';
  _avg?: Maybe<QuestionConversationAvgAggregate>;
  _count?: Maybe<QuestionConversationCountAggregate>;
  _max?: Maybe<QuestionConversationMaxAggregate>;
  _min?: Maybe<QuestionConversationMinAggregate>;
  _sum?: Maybe<QuestionConversationSumAggregate>;
  createdAt?: Maybe<Scalars['DateTime']>;
  fileId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  message?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['Int']>;
  replyId?: Maybe<Scalars['Int']>;
  sendAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionConversationListRelationFilter = {
  every?: InputMaybe<QuestionConversationWhereInput>;
  none?: InputMaybe<QuestionConversationWhereInput>;
  some?: InputMaybe<QuestionConversationWhereInput>;
};

export type QuestionConversationMaxAggregate = {
  __typename?: 'QuestionConversationMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['Int']>;
  replyId?: Maybe<Scalars['Int']>;
  sendAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionConversationMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
  sendAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionConversationMinAggregate = {
  __typename?: 'QuestionConversationMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['Int']>;
  replyId?: Maybe<Scalars['Int']>;
  sendAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionConversationMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
  sendAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionConversationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionConversationOrderByWithAggregationInput = {
  _avg?: InputMaybe<QuestionConversationAvgOrderByAggregateInput>;
  _count?: InputMaybe<QuestionConversationCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionConversationMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionConversationMinOrderByAggregateInput>;
  _sum?: InputMaybe<QuestionConversationSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
  sendAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionConversationOrderByWithRelationInput = {
  File?: InputMaybe<FileOrderByWithRelationInput>;
  Question?: InputMaybe<QuestionOrderByWithRelationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  other_QuestionConversation?: InputMaybe<QuestionConversationOrderByRelationAggregateInput>;
  questionId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
  sendAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionConversationRelationFilter = {
  is?: InputMaybe<QuestionConversationWhereInput>;
  isNot?: InputMaybe<QuestionConversationWhereInput>;
};

export enum QuestionConversationScalarFieldEnum {
  CreatedAt = 'createdAt',
  FileId = 'fileId',
  Id = 'id',
  Message = 'message',
  QuestionId = 'questionId',
  ReplyId = 'replyId',
  SendAt = 'sendAt',
  UserId = 'userId'
}

export type QuestionConversationScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionConversationScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionConversationScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionConversationScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  fileId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringNullableFilter>;
  questionId?: InputMaybe<IntNullableFilter>;
  replyId?: InputMaybe<IntNullableFilter>;
  sendAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type QuestionConversationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionConversationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionConversationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionConversationScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  fileId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  message?: InputMaybe<StringNullableWithAggregatesFilter>;
  questionId?: InputMaybe<IntNullableWithAggregatesFilter>;
  replyId?: InputMaybe<IntNullableWithAggregatesFilter>;
  sendAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type QuestionConversationSumAggregate = {
  __typename?: 'QuestionConversationSumAggregate';
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  replyId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionConversationSumOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  replyId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionConversationUpdateInput = {
  File?: InputMaybe<FileUpdateOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  other_QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionConversationUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionConversationUpdateManyWithWhereWithoutFileInput = {
  data: QuestionConversationUpdateManyMutationInput;
  where: QuestionConversationScalarWhereInput;
};

export type QuestionConversationUpdateManyWithWhereWithoutQuestionConversationInput = {
  data: QuestionConversationUpdateManyMutationInput;
  where: QuestionConversationScalarWhereInput;
};

export type QuestionConversationUpdateManyWithWhereWithoutQuestionInput = {
  data: QuestionConversationUpdateManyMutationInput;
  where: QuestionConversationScalarWhereInput;
};

export type QuestionConversationUpdateManyWithWhereWithoutUserInput = {
  data: QuestionConversationUpdateManyMutationInput;
  where: QuestionConversationScalarWhereInput;
};

export type QuestionConversationUpdateManyWithoutFileInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutFileInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyFileInputEnvelope>;
  delete?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionConversationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionConversationUpdateWithWhereUniqueWithoutFileInput>>;
  updateMany?: InputMaybe<Array<QuestionConversationUpdateManyWithWhereWithoutFileInput>>;
  upsert?: InputMaybe<Array<QuestionConversationUpsertWithWhereUniqueWithoutFileInput>>;
};

export type QuestionConversationUpdateManyWithoutQuestionConversationInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutQuestionConversationInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutQuestionConversationInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyQuestionConversationInputEnvelope>;
  delete?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionConversationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionConversationUpdateWithWhereUniqueWithoutQuestionConversationInput>>;
  updateMany?: InputMaybe<Array<QuestionConversationUpdateManyWithWhereWithoutQuestionConversationInput>>;
  upsert?: InputMaybe<Array<QuestionConversationUpsertWithWhereUniqueWithoutQuestionConversationInput>>;
};

export type QuestionConversationUpdateManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionConversationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionConversationUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<QuestionConversationUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<QuestionConversationUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type QuestionConversationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionConversationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<QuestionConversationCreateWithoutUserInput>>;
  createMany?: InputMaybe<QuestionConversationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionConversationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionConversationWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionConversationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<QuestionConversationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<QuestionConversationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type QuestionConversationUpdateOneWithoutOther_QuestionConversationInput = {
  connect?: InputMaybe<QuestionConversationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionConversationCreateOrConnectWithoutOther_QuestionConversationInput>;
  create?: InputMaybe<QuestionConversationCreateWithoutOther_QuestionConversationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<QuestionConversationUpdateWithoutOther_QuestionConversationInput>;
  upsert?: InputMaybe<QuestionConversationUpsertWithoutOther_QuestionConversationInput>;
};

export type QuestionConversationUpdateWithWhereUniqueWithoutFileInput = {
  data: QuestionConversationUpdateWithoutFileInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpdateWithWhereUniqueWithoutQuestionConversationInput = {
  data: QuestionConversationUpdateWithoutQuestionConversationInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpdateWithWhereUniqueWithoutQuestionInput = {
  data: QuestionConversationUpdateWithoutQuestionInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpdateWithWhereUniqueWithoutUserInput = {
  data: QuestionConversationUpdateWithoutUserInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpdateWithoutFileInput = {
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  other_QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionConversationUpdateWithoutOther_QuestionConversationInput = {
  File?: InputMaybe<FileUpdateOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  sendAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionConversationUpdateWithoutQuestionConversationInput = {
  File?: InputMaybe<FileUpdateOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestionConversationInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  other_QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionConversationUpdateWithoutQuestionInput = {
  File?: InputMaybe<FileUpdateOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateOneWithoutOther_QuestionConversationInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionConversationInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  other_QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionConversationUpdateWithoutUserInput = {
  File?: InputMaybe<FileUpdateOneWithoutQuestionConversationInput>;
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestionConversationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateOneWithoutOther_QuestionConversationInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  message?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  other_QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionConversationInput>;
  sendAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionConversationUpsertWithWhereUniqueWithoutFileInput = {
  create: QuestionConversationCreateWithoutFileInput;
  update: QuestionConversationUpdateWithoutFileInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpsertWithWhereUniqueWithoutQuestionConversationInput = {
  create: QuestionConversationCreateWithoutQuestionConversationInput;
  update: QuestionConversationUpdateWithoutQuestionConversationInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpsertWithWhereUniqueWithoutQuestionInput = {
  create: QuestionConversationCreateWithoutQuestionInput;
  update: QuestionConversationUpdateWithoutQuestionInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpsertWithWhereUniqueWithoutUserInput = {
  create: QuestionConversationCreateWithoutUserInput;
  update: QuestionConversationUpdateWithoutUserInput;
  where: QuestionConversationWhereUniqueInput;
};

export type QuestionConversationUpsertWithoutOther_QuestionConversationInput = {
  create: QuestionConversationCreateWithoutOther_QuestionConversationInput;
  update: QuestionConversationUpdateWithoutOther_QuestionConversationInput;
};

export type QuestionConversationWhereInput = {
  AND?: InputMaybe<Array<QuestionConversationWhereInput>>;
  File?: InputMaybe<FileRelationFilter>;
  NOT?: InputMaybe<Array<QuestionConversationWhereInput>>;
  OR?: InputMaybe<Array<QuestionConversationWhereInput>>;
  Question?: InputMaybe<QuestionRelationFilter>;
  QuestionConversation?: InputMaybe<QuestionConversationRelationFilter>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  fileId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringNullableFilter>;
  other_QuestionConversation?: InputMaybe<QuestionConversationListRelationFilter>;
  questionId?: InputMaybe<IntNullableFilter>;
  replyId?: InputMaybe<IntNullableFilter>;
  sendAt?: InputMaybe<DateTimeNullableFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type QuestionConversationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type QuestionCount = {
  __typename?: 'QuestionCount';
  QuestionConversation: Scalars['Int'];
  QuestionLog: Scalars['Int'];
  Question_AbCat: Scalars['Int'];
};

export type QuestionCountAggregate = {
  __typename?: 'QuestionCountAggregate';
  _all: Scalars['Int'];
  abilityId: Scalars['Int'];
  createdAt: Scalars['Int'];
  creatorId: Scalars['Int'];
  description: Scalars['Int'];
  fileId: Scalars['Int'];
  id: Scalars['Int'];
  observerApprove: Scalars['Int'];
  questionGroupId: Scalars['Int'];
  source: Scalars['Int'];
  supervisorApprove: Scalars['Int'];
  text: Scalars['Int'];
  topicId: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type QuestionCountOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observerApprove?: InputMaybe<SortOrder>;
  questionGroupId?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  supervisorApprove?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionCreateInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyAbilityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  questionGroupId?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  topicId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyAbilityInputEnvelope = {
  data: Array<QuestionCreateManyAbilityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionCreateManyFileInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  questionGroupId?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  topicId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyFileInputEnvelope = {
  data: Array<QuestionCreateManyFileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionCreateManyInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  questionGroupId?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  topicId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyQuestionGroupInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  topicId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyQuestionGroupInputEnvelope = {
  data: Array<QuestionCreateManyQuestionGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionCreateManyTopicInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  creatorId?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  questionGroupId?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyTopicInputEnvelope = {
  data: Array<QuestionCreateManyTopicInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionCreateManyUserInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  fileId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  questionGroupId?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  topicId?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyUserInputEnvelope = {
  data: Array<QuestionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionCreateNestedManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<QuestionCreateManyAbilityInputEnvelope>;
};

export type QuestionCreateNestedManyWithoutFileInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutFileInput>>;
  createMany?: InputMaybe<QuestionCreateManyFileInputEnvelope>;
};

export type QuestionCreateNestedManyWithoutQuestionGroupInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutQuestionGroupInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutQuestionGroupInput>>;
  createMany?: InputMaybe<QuestionCreateManyQuestionGroupInputEnvelope>;
};

export type QuestionCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutTopicInput>>;
  createMany?: InputMaybe<QuestionCreateManyTopicInputEnvelope>;
};

export type QuestionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutUserInput>>;
  createMany?: InputMaybe<QuestionCreateManyUserInputEnvelope>;
};

export type QuestionCreateNestedOneWithoutQuestionConversationInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutQuestionConversationInput>;
  create?: InputMaybe<QuestionCreateWithoutQuestionConversationInput>;
};

export type QuestionCreateNestedOneWithoutQuestionLogInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutQuestionLogInput>;
  create?: InputMaybe<QuestionCreateWithoutQuestionLogInput>;
};

export type QuestionCreateNestedOneWithoutQuestion_AbCatInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutQuestion_AbCatInput>;
  create?: InputMaybe<QuestionCreateWithoutQuestion_AbCatInput>;
};

export type QuestionCreateOrConnectWithoutAbilityInput = {
  create: QuestionCreateWithoutAbilityInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutFileInput = {
  create: QuestionCreateWithoutFileInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutQuestionConversationInput = {
  create: QuestionCreateWithoutQuestionConversationInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutQuestionGroupInput = {
  create: QuestionCreateWithoutQuestionGroupInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutQuestionLogInput = {
  create: QuestionCreateWithoutQuestionLogInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutQuestion_AbCatInput = {
  create: QuestionCreateWithoutQuestion_AbCatInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutTopicInput = {
  create: QuestionCreateWithoutTopicInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutUserInput = {
  create: QuestionCreateWithoutUserInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutAbilityInput = {
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutFileInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutQuestionConversationInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutQuestionGroupInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutQuestionLogInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutQuestion_AbCatInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutTopicInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutUserInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionInput>;
  File?: InputMaybe<FileCreateNestedOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupCreateNestedOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatCreateNestedManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicCreateNestedOneWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  observerApprove?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  supervisorApprove?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
  type?: InputMaybe<Question_Type>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionGroup = {
  __typename?: 'QuestionGroup';
  Ability?: Maybe<Ability>;
  Question: Array<Question>;
  _count?: Maybe<QuestionGroupCount>;
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
};


export type QuestionGroupQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};

export type QuestionGroupAvgAggregate = {
  __typename?: 'QuestionGroupAvgAggregate';
  abilityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type QuestionGroupAvgOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type QuestionGroupBy = {
  __typename?: 'QuestionGroupBy';
  _avg?: Maybe<QuestionAvgAggregate>;
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  _sum?: Maybe<QuestionSumAggregate>;
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  observerApprove?: Maybe<Scalars['Boolean']>;
  questionGroupId?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  supervisorApprove?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
  topicId?: Maybe<Scalars['Int']>;
  type?: Maybe<Question_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionGroupCount = {
  __typename?: 'QuestionGroupCount';
  Question: Scalars['Int'];
};

export type QuestionGroupCountAggregate = {
  __typename?: 'QuestionGroupCountAggregate';
  _all: Scalars['Int'];
  abilityId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['Int'];
};

export type QuestionGroupCountOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type QuestionGroupCreateInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionGroupInput>;
  Question?: InputMaybe<QuestionCreateNestedManyWithoutQuestionGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type QuestionGroupCreateManyAbilityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type QuestionGroupCreateManyAbilityInputEnvelope = {
  data: Array<QuestionGroupCreateManyAbilityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionGroupCreateManyInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type QuestionGroupCreateNestedManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<QuestionGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionGroupCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<QuestionGroupCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<QuestionGroupCreateManyAbilityInputEnvelope>;
};

export type QuestionGroupCreateNestedOneWithoutQuestionInput = {
  connect?: InputMaybe<QuestionGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionGroupCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<QuestionGroupCreateWithoutQuestionInput>;
};

export type QuestionGroupCreateOrConnectWithoutAbilityInput = {
  create: QuestionGroupCreateWithoutAbilityInput;
  where: QuestionGroupWhereUniqueInput;
};

export type QuestionGroupCreateOrConnectWithoutQuestionInput = {
  create: QuestionGroupCreateWithoutQuestionInput;
  where: QuestionGroupWhereUniqueInput;
};

export type QuestionGroupCreateWithoutAbilityInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutQuestionGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type QuestionGroupCreateWithoutQuestionInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutQuestionGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type QuestionGroupGroupBy = {
  __typename?: 'QuestionGroupGroupBy';
  _avg?: Maybe<QuestionGroupAvgAggregate>;
  _count?: Maybe<QuestionGroupCountAggregate>;
  _max?: Maybe<QuestionGroupMaxAggregate>;
  _min?: Maybe<QuestionGroupMinAggregate>;
  _sum?: Maybe<QuestionGroupSumAggregate>;
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  text: Scalars['String'];
};

export type QuestionGroupListRelationFilter = {
  every?: InputMaybe<QuestionGroupWhereInput>;
  none?: InputMaybe<QuestionGroupWhereInput>;
  some?: InputMaybe<QuestionGroupWhereInput>;
};

export type QuestionGroupMaxAggregate = {
  __typename?: 'QuestionGroupMaxAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type QuestionGroupMaxOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type QuestionGroupMinAggregate = {
  __typename?: 'QuestionGroupMinAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
};

export type QuestionGroupMinOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type QuestionGroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionGroupOrderByWithAggregationInput = {
  _avg?: InputMaybe<QuestionGroupAvgOrderByAggregateInput>;
  _count?: InputMaybe<QuestionGroupCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionGroupMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionGroupMinOrderByAggregateInput>;
  _sum?: InputMaybe<QuestionGroupSumOrderByAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type QuestionGroupOrderByWithRelationInput = {
  Ability?: InputMaybe<AbilityOrderByWithRelationInput>;
  Question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
};

export type QuestionGroupRelationFilter = {
  is?: InputMaybe<QuestionGroupWhereInput>;
  isNot?: InputMaybe<QuestionGroupWhereInput>;
};

export enum QuestionGroupScalarFieldEnum {
  AbilityId = 'abilityId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Text = 'text'
}

export type QuestionGroupScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionGroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionGroupScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionGroupScalarWhereInput>>;
  abilityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type QuestionGroupScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionGroupScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionGroupScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionGroupScalarWhereWithAggregatesInput>>;
  abilityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
};

export type QuestionGroupSumAggregate = {
  __typename?: 'QuestionGroupSumAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type QuestionGroupSumOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type QuestionGroupUpdateInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionGroupInput>;
  Question?: InputMaybe<QuestionUpdateManyWithoutQuestionGroupInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionGroupUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionGroupUpdateManyWithWhereWithoutAbilityInput = {
  data: QuestionGroupUpdateManyMutationInput;
  where: QuestionGroupScalarWhereInput;
};

export type QuestionGroupUpdateManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<QuestionGroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionGroupCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<QuestionGroupCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<QuestionGroupCreateManyAbilityInputEnvelope>;
  delete?: InputMaybe<Array<QuestionGroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionGroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionGroupWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionGroupWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionGroupUpdateWithWhereUniqueWithoutAbilityInput>>;
  updateMany?: InputMaybe<Array<QuestionGroupUpdateManyWithWhereWithoutAbilityInput>>;
  upsert?: InputMaybe<Array<QuestionGroupUpsertWithWhereUniqueWithoutAbilityInput>>;
};

export type QuestionGroupUpdateOneWithoutQuestionInput = {
  connect?: InputMaybe<QuestionGroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionGroupCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<QuestionGroupCreateWithoutQuestionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<QuestionGroupUpdateWithoutQuestionInput>;
  upsert?: InputMaybe<QuestionGroupUpsertWithoutQuestionInput>;
};

export type QuestionGroupUpdateWithWhereUniqueWithoutAbilityInput = {
  data: QuestionGroupUpdateWithoutAbilityInput;
  where: QuestionGroupWhereUniqueInput;
};

export type QuestionGroupUpdateWithoutAbilityInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutQuestionGroupInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionGroupUpdateWithoutQuestionInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionGroupInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionGroupUpsertWithWhereUniqueWithoutAbilityInput = {
  create: QuestionGroupCreateWithoutAbilityInput;
  update: QuestionGroupUpdateWithoutAbilityInput;
  where: QuestionGroupWhereUniqueInput;
};

export type QuestionGroupUpsertWithoutQuestionInput = {
  create: QuestionGroupCreateWithoutQuestionInput;
  update: QuestionGroupUpdateWithoutQuestionInput;
};

export type QuestionGroupWhereInput = {
  AND?: InputMaybe<Array<QuestionGroupWhereInput>>;
  Ability?: InputMaybe<AbilityRelationFilter>;
  NOT?: InputMaybe<Array<QuestionGroupWhereInput>>;
  OR?: InputMaybe<Array<QuestionGroupWhereInput>>;
  Question?: InputMaybe<QuestionListRelationFilter>;
  abilityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
};

export type QuestionGroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionLog = {
  __typename?: 'QuestionLog';
  Question?: Maybe<Question>;
  User?: Maybe<User>;
  changeAt?: Maybe<Scalars['DateTime']>;
  changeField?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  crud?: Maybe<Crud>;
  id: Scalars['Int'];
  questionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionLogAvgAggregate = {
  __typename?: 'QuestionLogAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type QuestionLogAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionLogCountAggregate = {
  __typename?: 'QuestionLogCountAggregate';
  _all: Scalars['Int'];
  changeAt: Scalars['Int'];
  changeField: Scalars['Int'];
  createdAt: Scalars['Int'];
  crud: Scalars['Int'];
  id: Scalars['Int'];
  questionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type QuestionLogCountOrderByAggregateInput = {
  changeAt?: InputMaybe<SortOrder>;
  changeField?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  crud?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionLogCreateInput = {
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestionLogInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionLogInput>;
  changeAt?: InputMaybe<Scalars['DateTime']>;
  changeField?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  crud?: InputMaybe<Crud>;
  id: Scalars['Int'];
};

export type QuestionLogCreateManyInput = {
  changeAt?: InputMaybe<Scalars['DateTime']>;
  changeField?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  crud?: InputMaybe<Crud>;
  id: Scalars['Int'];
  questionId?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type QuestionLogCreateManyQuestionInput = {
  changeAt?: InputMaybe<Scalars['DateTime']>;
  changeField?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  crud?: InputMaybe<Crud>;
  id: Scalars['Int'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type QuestionLogCreateManyQuestionInputEnvelope = {
  data: Array<QuestionLogCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionLogCreateManyUserInput = {
  changeAt?: InputMaybe<Scalars['DateTime']>;
  changeField?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  crud?: InputMaybe<Crud>;
  id: Scalars['Int'];
  questionId?: InputMaybe<Scalars['Int']>;
};

export type QuestionLogCreateManyUserInputEnvelope = {
  data: Array<QuestionLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionLogCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionLogCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<QuestionLogCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<QuestionLogCreateManyQuestionInputEnvelope>;
};

export type QuestionLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<QuestionLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<QuestionLogCreateManyUserInputEnvelope>;
};

export type QuestionLogCreateOrConnectWithoutQuestionInput = {
  create: QuestionLogCreateWithoutQuestionInput;
  where: QuestionLogWhereUniqueInput;
};

export type QuestionLogCreateOrConnectWithoutUserInput = {
  create: QuestionLogCreateWithoutUserInput;
  where: QuestionLogWhereUniqueInput;
};

export type QuestionLogCreateWithoutQuestionInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutQuestionLogInput>;
  changeAt?: InputMaybe<Scalars['DateTime']>;
  changeField?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  crud?: InputMaybe<Crud>;
  id: Scalars['Int'];
};

export type QuestionLogCreateWithoutUserInput = {
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestionLogInput>;
  changeAt?: InputMaybe<Scalars['DateTime']>;
  changeField?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  crud?: InputMaybe<Crud>;
  id: Scalars['Int'];
};

export type QuestionLogGroupBy = {
  __typename?: 'QuestionLogGroupBy';
  _avg?: Maybe<QuestionLogAvgAggregate>;
  _count?: Maybe<QuestionLogCountAggregate>;
  _max?: Maybe<QuestionLogMaxAggregate>;
  _min?: Maybe<QuestionLogMinAggregate>;
  _sum?: Maybe<QuestionLogSumAggregate>;
  changeAt?: Maybe<Scalars['DateTime']>;
  changeField?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  crud?: Maybe<Crud>;
  id: Scalars['Int'];
  questionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionLogListRelationFilter = {
  every?: InputMaybe<QuestionLogWhereInput>;
  none?: InputMaybe<QuestionLogWhereInput>;
  some?: InputMaybe<QuestionLogWhereInput>;
};

export type QuestionLogMaxAggregate = {
  __typename?: 'QuestionLogMaxAggregate';
  changeAt?: Maybe<Scalars['DateTime']>;
  changeField?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  crud?: Maybe<Crud>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionLogMaxOrderByAggregateInput = {
  changeAt?: InputMaybe<SortOrder>;
  changeField?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  crud?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionLogMinAggregate = {
  __typename?: 'QuestionLogMinAggregate';
  changeAt?: Maybe<Scalars['DateTime']>;
  changeField?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  crud?: Maybe<Crud>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionLogMinOrderByAggregateInput = {
  changeAt?: InputMaybe<SortOrder>;
  changeField?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  crud?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionLogOrderByWithAggregationInput = {
  _avg?: InputMaybe<QuestionLogAvgOrderByAggregateInput>;
  _count?: InputMaybe<QuestionLogCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionLogMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionLogMinOrderByAggregateInput>;
  _sum?: InputMaybe<QuestionLogSumOrderByAggregateInput>;
  changeAt?: InputMaybe<SortOrder>;
  changeField?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  crud?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionLogOrderByWithRelationInput = {
  Question?: InputMaybe<QuestionOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  changeAt?: InputMaybe<SortOrder>;
  changeField?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  crud?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum QuestionLogScalarFieldEnum {
  ChangeAt = 'changeAt',
  ChangeField = 'changeField',
  CreatedAt = 'createdAt',
  Crud = 'crud',
  Id = 'id',
  QuestionId = 'questionId',
  UserId = 'userId'
}

export type QuestionLogScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionLogScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionLogScalarWhereInput>>;
  changeAt?: InputMaybe<DateTimeNullableFilter>;
  changeField?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  crud?: InputMaybe<EnumcrudNullableFilter>;
  id?: InputMaybe<IntFilter>;
  questionId?: InputMaybe<IntNullableFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type QuestionLogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionLogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionLogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionLogScalarWhereWithAggregatesInput>>;
  changeAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  changeField?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  crud?: InputMaybe<EnumcrudNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  questionId?: InputMaybe<IntNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type QuestionLogSumAggregate = {
  __typename?: 'QuestionLogSumAggregate';
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type QuestionLogSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type QuestionLogUpdateInput = {
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestionLogInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionLogInput>;
  changeAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  changeField?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  crud?: InputMaybe<NullableEnumcrudFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionLogUpdateManyMutationInput = {
  changeAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  changeField?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  crud?: InputMaybe<NullableEnumcrudFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionLogUpdateManyWithWhereWithoutQuestionInput = {
  data: QuestionLogUpdateManyMutationInput;
  where: QuestionLogScalarWhereInput;
};

export type QuestionLogUpdateManyWithWhereWithoutUserInput = {
  data: QuestionLogUpdateManyMutationInput;
  where: QuestionLogScalarWhereInput;
};

export type QuestionLogUpdateManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionLogCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<QuestionLogCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<QuestionLogCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionLogUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<QuestionLogUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<QuestionLogUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type QuestionLogUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<QuestionLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<QuestionLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionLogWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<QuestionLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<QuestionLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type QuestionLogUpdateWithWhereUniqueWithoutQuestionInput = {
  data: QuestionLogUpdateWithoutQuestionInput;
  where: QuestionLogWhereUniqueInput;
};

export type QuestionLogUpdateWithWhereUniqueWithoutUserInput = {
  data: QuestionLogUpdateWithoutUserInput;
  where: QuestionLogWhereUniqueInput;
};

export type QuestionLogUpdateWithoutQuestionInput = {
  User?: InputMaybe<UserUpdateOneWithoutQuestionLogInput>;
  changeAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  changeField?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  crud?: InputMaybe<NullableEnumcrudFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionLogUpdateWithoutUserInput = {
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestionLogInput>;
  changeAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  changeField?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  crud?: InputMaybe<NullableEnumcrudFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type QuestionLogUpsertWithWhereUniqueWithoutQuestionInput = {
  create: QuestionLogCreateWithoutQuestionInput;
  update: QuestionLogUpdateWithoutQuestionInput;
  where: QuestionLogWhereUniqueInput;
};

export type QuestionLogUpsertWithWhereUniqueWithoutUserInput = {
  create: QuestionLogCreateWithoutUserInput;
  update: QuestionLogUpdateWithoutUserInput;
  where: QuestionLogWhereUniqueInput;
};

export type QuestionLogWhereInput = {
  AND?: InputMaybe<Array<QuestionLogWhereInput>>;
  NOT?: InputMaybe<Array<QuestionLogWhereInput>>;
  OR?: InputMaybe<Array<QuestionLogWhereInput>>;
  Question?: InputMaybe<QuestionRelationFilter>;
  User?: InputMaybe<UserRelationFilter>;
  changeAt?: InputMaybe<DateTimeNullableFilter>;
  changeField?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  crud?: InputMaybe<EnumcrudNullableFilter>;
  id?: InputMaybe<IntFilter>;
  questionId?: InputMaybe<IntNullableFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type QuestionLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type QuestionMaxAggregate = {
  __typename?: 'QuestionMaxAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  observerApprove?: Maybe<Scalars['Boolean']>;
  questionGroupId?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  supervisorApprove?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['Int']>;
  type?: Maybe<Question_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionMaxOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observerApprove?: InputMaybe<SortOrder>;
  questionGroupId?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  supervisorApprove?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  creatorId?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  observerApprove?: Maybe<Scalars['Boolean']>;
  questionGroupId?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  supervisorApprove?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['Int']>;
  type?: Maybe<Question_Type>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionMinOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observerApprove?: InputMaybe<SortOrder>;
  questionGroupId?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  supervisorApprove?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithAggregationInput = {
  _avg?: InputMaybe<QuestionAvgOrderByAggregateInput>;
  _count?: InputMaybe<QuestionCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionMinOrderByAggregateInput>;
  _sum?: InputMaybe<QuestionSumOrderByAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observerApprove?: InputMaybe<SortOrder>;
  questionGroupId?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  supervisorApprove?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  Ability?: InputMaybe<AbilityOrderByWithRelationInput>;
  File?: InputMaybe<FileOrderByWithRelationInput>;
  QuestionConversation?: InputMaybe<QuestionConversationOrderByRelationAggregateInput>;
  QuestionGroup?: InputMaybe<QuestionGroupOrderByWithRelationInput>;
  QuestionLog?: InputMaybe<QuestionLogOrderByRelationAggregateInput>;
  Question_AbCat?: InputMaybe<Question_AbCatOrderByRelationAggregateInput>;
  Topic?: InputMaybe<TopicOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  abilityId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  observerApprove?: InputMaybe<SortOrder>;
  questionGroupId?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
  supervisorApprove?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionRelationFilter = {
  is?: InputMaybe<QuestionWhereInput>;
  isNot?: InputMaybe<QuestionWhereInput>;
};

export enum QuestionScalarFieldEnum {
  AbilityId = 'abilityId',
  CreatedAt = 'createdAt',
  CreatorId = 'creatorId',
  Description = 'description',
  FileId = 'fileId',
  Id = 'id',
  ObserverApprove = 'observerApprove',
  QuestionGroupId = 'questionGroupId',
  Source = 'source',
  SupervisorApprove = 'supervisorApprove',
  Text = 'text',
  TopicId = 'topicId',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type QuestionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereInput>>;
  abilityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creatorId?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fileId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  observerApprove?: InputMaybe<BoolNullableFilter>;
  questionGroupId?: InputMaybe<IntNullableFilter>;
  source?: InputMaybe<StringNullableFilter>;
  supervisorApprove?: InputMaybe<BoolNullableFilter>;
  text?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<Enumquestion_TypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type QuestionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  abilityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  creatorId?: InputMaybe<IntNullableWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  fileId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  observerApprove?: InputMaybe<BoolNullableWithAggregatesFilter>;
  questionGroupId?: InputMaybe<IntNullableWithAggregatesFilter>;
  source?: InputMaybe<StringNullableWithAggregatesFilter>;
  supervisorApprove?: InputMaybe<BoolNullableWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
  topicId?: InputMaybe<IntNullableWithAggregatesFilter>;
  type?: InputMaybe<Enumquestion_TypeNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
};

export type QuestionSumAggregate = {
  __typename?: 'QuestionSumAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  creatorId?: Maybe<Scalars['Int']>;
  fileId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  questionGroupId?: Maybe<Scalars['Int']>;
  topicId?: Maybe<Scalars['Int']>;
};

export type QuestionSumOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  creatorId?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionGroupId?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
};

export type QuestionUpdateInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutAbilityInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutFileInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutQuestionGroupInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutTopicInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithWhereWithoutUserInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<QuestionCreateManyAbilityInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutAbilityInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutAbilityInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutAbilityInput>>;
};

export type QuestionUpdateManyWithoutFileInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutFileInput>>;
  createMany?: InputMaybe<QuestionCreateManyFileInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutFileInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutFileInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutFileInput>>;
};

export type QuestionUpdateManyWithoutQuestionGroupInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutQuestionGroupInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutQuestionGroupInput>>;
  createMany?: InputMaybe<QuestionCreateManyQuestionGroupInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutQuestionGroupInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutQuestionGroupInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutQuestionGroupInput>>;
};

export type QuestionUpdateManyWithoutTopicInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutTopicInput>>;
  createMany?: InputMaybe<QuestionCreateManyTopicInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type QuestionUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutUserInput>>;
  createMany?: InputMaybe<QuestionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type QuestionUpdateOneWithoutQuestionConversationInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutQuestionConversationInput>;
  create?: InputMaybe<QuestionCreateWithoutQuestionConversationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<QuestionUpdateWithoutQuestionConversationInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutQuestionConversationInput>;
};

export type QuestionUpdateOneWithoutQuestionLogInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutQuestionLogInput>;
  create?: InputMaybe<QuestionCreateWithoutQuestionLogInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<QuestionUpdateWithoutQuestionLogInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutQuestionLogInput>;
};

export type QuestionUpdateOneWithoutQuestion_AbCatInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutQuestion_AbCatInput>;
  create?: InputMaybe<QuestionCreateWithoutQuestion_AbCatInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<QuestionUpdateWithoutQuestion_AbCatInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutQuestion_AbCatInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutAbilityInput = {
  data: QuestionUpdateWithoutAbilityInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutFileInput = {
  data: QuestionUpdateWithoutFileInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutQuestionGroupInput = {
  data: QuestionUpdateWithoutQuestionGroupInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutTopicInput = {
  data: QuestionUpdateWithoutTopicInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
  data: QuestionUpdateWithoutUserInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutAbilityInput = {
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutFileInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutQuestionConversationInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutQuestionGroupInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutQuestionLogInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutQuestion_AbCatInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutTopicInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  User?: InputMaybe<UserUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutUserInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutQuestionInput>;
  File?: InputMaybe<FileUpdateOneWithoutQuestionInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutQuestionInput>;
  QuestionGroup?: InputMaybe<QuestionGroupUpdateOneWithoutQuestionInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutQuestionInput>;
  Question_AbCat?: InputMaybe<Question_AbCatUpdateManyWithoutQuestionInput>;
  Topic?: InputMaybe<TopicUpdateOneWithoutQuestionInput>;
  createdAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  observerApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  source?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  supervisorApprove?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<NullableEnumquestion_TypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpsertWithWhereUniqueWithoutAbilityInput = {
  create: QuestionCreateWithoutAbilityInput;
  update: QuestionUpdateWithoutAbilityInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutFileInput = {
  create: QuestionCreateWithoutFileInput;
  update: QuestionUpdateWithoutFileInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutQuestionGroupInput = {
  create: QuestionCreateWithoutQuestionGroupInput;
  update: QuestionUpdateWithoutQuestionGroupInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutTopicInput = {
  create: QuestionCreateWithoutTopicInput;
  update: QuestionUpdateWithoutTopicInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
  create: QuestionCreateWithoutUserInput;
  update: QuestionUpdateWithoutUserInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithoutQuestionConversationInput = {
  create: QuestionCreateWithoutQuestionConversationInput;
  update: QuestionUpdateWithoutQuestionConversationInput;
};

export type QuestionUpsertWithoutQuestionLogInput = {
  create: QuestionCreateWithoutQuestionLogInput;
  update: QuestionUpdateWithoutQuestionLogInput;
};

export type QuestionUpsertWithoutQuestion_AbCatInput = {
  create: QuestionCreateWithoutQuestion_AbCatInput;
  update: QuestionUpdateWithoutQuestion_AbCatInput;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  Ability?: InputMaybe<AbilityRelationFilter>;
  File?: InputMaybe<FileRelationFilter>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  QuestionConversation?: InputMaybe<QuestionConversationListRelationFilter>;
  QuestionGroup?: InputMaybe<QuestionGroupRelationFilter>;
  QuestionLog?: InputMaybe<QuestionLogListRelationFilter>;
  Question_AbCat?: InputMaybe<Question_AbCatListRelationFilter>;
  Topic?: InputMaybe<TopicRelationFilter>;
  User?: InputMaybe<UserRelationFilter>;
  abilityId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  creatorId?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  fileId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  observerApprove?: InputMaybe<BoolNullableFilter>;
  questionGroupId?: InputMaybe<IntNullableFilter>;
  source?: InputMaybe<StringNullableFilter>;
  supervisorApprove?: InputMaybe<BoolNullableFilter>;
  text?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<Enumquestion_TypeNullableFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Question_AbCat = {
  __typename?: 'Question_AbCat';
  Question?: Maybe<Question>;
  abCatId?: Maybe<Scalars['Int']>;
  ability_category?: Maybe<Ability_Category>;
  id: Scalars['Int'];
  questionId?: Maybe<Scalars['Int']>;
};

export type Question_AbCatAvgAggregate = {
  __typename?: 'Question_AbCatAvgAggregate';
  abCatId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  questionId?: Maybe<Scalars['Float']>;
};

export type Question_AbCatAvgOrderByAggregateInput = {
  abCatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type Question_AbCatCountAggregate = {
  __typename?: 'Question_AbCatCountAggregate';
  _all: Scalars['Int'];
  abCatId: Scalars['Int'];
  id: Scalars['Int'];
  questionId: Scalars['Int'];
};

export type Question_AbCatCountOrderByAggregateInput = {
  abCatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type Question_AbCatCreateInput = {
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestion_AbCatInput>;
  ability_category?: InputMaybe<Ability_CategoryCreateNestedOneWithoutQuestion_AbCatInput>;
  id: Scalars['Int'];
};

export type Question_AbCatCreateManyAbility_CategoryInput = {
  id: Scalars['Int'];
  questionId?: InputMaybe<Scalars['Int']>;
};

export type Question_AbCatCreateManyAbility_CategoryInputEnvelope = {
  data: Array<Question_AbCatCreateManyAbility_CategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Question_AbCatCreateManyInput = {
  abCatId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  questionId?: InputMaybe<Scalars['Int']>;
};

export type Question_AbCatCreateManyQuestionInput = {
  abCatId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type Question_AbCatCreateManyQuestionInputEnvelope = {
  data: Array<Question_AbCatCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type Question_AbCatCreateNestedManyWithoutAbility_CategoryInput = {
  connect?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Question_AbCatCreateOrConnectWithoutAbility_CategoryInput>>;
  create?: InputMaybe<Array<Question_AbCatCreateWithoutAbility_CategoryInput>>;
  createMany?: InputMaybe<Question_AbCatCreateManyAbility_CategoryInputEnvelope>;
};

export type Question_AbCatCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Question_AbCatCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<Question_AbCatCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<Question_AbCatCreateManyQuestionInputEnvelope>;
};

export type Question_AbCatCreateOrConnectWithoutAbility_CategoryInput = {
  create: Question_AbCatCreateWithoutAbility_CategoryInput;
  where: Question_AbCatWhereUniqueInput;
};

export type Question_AbCatCreateOrConnectWithoutQuestionInput = {
  create: Question_AbCatCreateWithoutQuestionInput;
  where: Question_AbCatWhereUniqueInput;
};

export type Question_AbCatCreateWithoutAbility_CategoryInput = {
  Question?: InputMaybe<QuestionCreateNestedOneWithoutQuestion_AbCatInput>;
  id: Scalars['Int'];
};

export type Question_AbCatCreateWithoutQuestionInput = {
  ability_category?: InputMaybe<Ability_CategoryCreateNestedOneWithoutQuestion_AbCatInput>;
  id: Scalars['Int'];
};

export type Question_AbCatGroupBy = {
  __typename?: 'Question_AbCatGroupBy';
  _avg?: Maybe<Question_AbCatAvgAggregate>;
  _count?: Maybe<Question_AbCatCountAggregate>;
  _max?: Maybe<Question_AbCatMaxAggregate>;
  _min?: Maybe<Question_AbCatMinAggregate>;
  _sum?: Maybe<Question_AbCatSumAggregate>;
  abCatId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  questionId?: Maybe<Scalars['Int']>;
};

export type Question_AbCatListRelationFilter = {
  every?: InputMaybe<Question_AbCatWhereInput>;
  none?: InputMaybe<Question_AbCatWhereInput>;
  some?: InputMaybe<Question_AbCatWhereInput>;
};

export type Question_AbCatMaxAggregate = {
  __typename?: 'Question_AbCatMaxAggregate';
  abCatId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type Question_AbCatMaxOrderByAggregateInput = {
  abCatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type Question_AbCatMinAggregate = {
  __typename?: 'Question_AbCatMinAggregate';
  abCatId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type Question_AbCatMinOrderByAggregateInput = {
  abCatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type Question_AbCatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Question_AbCatOrderByWithAggregationInput = {
  _avg?: InputMaybe<Question_AbCatAvgOrderByAggregateInput>;
  _count?: InputMaybe<Question_AbCatCountOrderByAggregateInput>;
  _max?: InputMaybe<Question_AbCatMaxOrderByAggregateInput>;
  _min?: InputMaybe<Question_AbCatMinOrderByAggregateInput>;
  _sum?: InputMaybe<Question_AbCatSumOrderByAggregateInput>;
  abCatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type Question_AbCatOrderByWithRelationInput = {
  Question?: InputMaybe<QuestionOrderByWithRelationInput>;
  abCatId?: InputMaybe<SortOrder>;
  ability_category?: InputMaybe<Ability_CategoryOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export enum Question_AbCatScalarFieldEnum {
  AbCatId = 'abCatId',
  Id = 'id',
  QuestionId = 'questionId'
}

export type Question_AbCatScalarWhereInput = {
  AND?: InputMaybe<Array<Question_AbCatScalarWhereInput>>;
  NOT?: InputMaybe<Array<Question_AbCatScalarWhereInput>>;
  OR?: InputMaybe<Array<Question_AbCatScalarWhereInput>>;
  abCatId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  questionId?: InputMaybe<IntNullableFilter>;
};

export type Question_AbCatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Question_AbCatScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Question_AbCatScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Question_AbCatScalarWhereWithAggregatesInput>>;
  abCatId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  questionId?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type Question_AbCatSumAggregate = {
  __typename?: 'Question_AbCatSumAggregate';
  abCatId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  questionId?: Maybe<Scalars['Int']>;
};

export type Question_AbCatSumOrderByAggregateInput = {
  abCatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type Question_AbCatUpdateInput = {
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestion_AbCatInput>;
  ability_category?: InputMaybe<Ability_CategoryUpdateOneWithoutQuestion_AbCatInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Question_AbCatUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Question_AbCatUpdateManyWithWhereWithoutAbility_CategoryInput = {
  data: Question_AbCatUpdateManyMutationInput;
  where: Question_AbCatScalarWhereInput;
};

export type Question_AbCatUpdateManyWithWhereWithoutQuestionInput = {
  data: Question_AbCatUpdateManyMutationInput;
  where: Question_AbCatScalarWhereInput;
};

export type Question_AbCatUpdateManyWithoutAbility_CategoryInput = {
  connect?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Question_AbCatCreateOrConnectWithoutAbility_CategoryInput>>;
  create?: InputMaybe<Array<Question_AbCatCreateWithoutAbility_CategoryInput>>;
  createMany?: InputMaybe<Question_AbCatCreateManyAbility_CategoryInputEnvelope>;
  delete?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Question_AbCatScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  set?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  update?: InputMaybe<Array<Question_AbCatUpdateWithWhereUniqueWithoutAbility_CategoryInput>>;
  updateMany?: InputMaybe<Array<Question_AbCatUpdateManyWithWhereWithoutAbility_CategoryInput>>;
  upsert?: InputMaybe<Array<Question_AbCatUpsertWithWhereUniqueWithoutAbility_CategoryInput>>;
};

export type Question_AbCatUpdateManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Question_AbCatCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<Question_AbCatCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<Question_AbCatCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Question_AbCatScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  set?: InputMaybe<Array<Question_AbCatWhereUniqueInput>>;
  update?: InputMaybe<Array<Question_AbCatUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<Question_AbCatUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<Question_AbCatUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type Question_AbCatUpdateWithWhereUniqueWithoutAbility_CategoryInput = {
  data: Question_AbCatUpdateWithoutAbility_CategoryInput;
  where: Question_AbCatWhereUniqueInput;
};

export type Question_AbCatUpdateWithWhereUniqueWithoutQuestionInput = {
  data: Question_AbCatUpdateWithoutQuestionInput;
  where: Question_AbCatWhereUniqueInput;
};

export type Question_AbCatUpdateWithoutAbility_CategoryInput = {
  Question?: InputMaybe<QuestionUpdateOneWithoutQuestion_AbCatInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Question_AbCatUpdateWithoutQuestionInput = {
  ability_category?: InputMaybe<Ability_CategoryUpdateOneWithoutQuestion_AbCatInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Question_AbCatUpsertWithWhereUniqueWithoutAbility_CategoryInput = {
  create: Question_AbCatCreateWithoutAbility_CategoryInput;
  update: Question_AbCatUpdateWithoutAbility_CategoryInput;
  where: Question_AbCatWhereUniqueInput;
};

export type Question_AbCatUpsertWithWhereUniqueWithoutQuestionInput = {
  create: Question_AbCatCreateWithoutQuestionInput;
  update: Question_AbCatUpdateWithoutQuestionInput;
  where: Question_AbCatWhereUniqueInput;
};

export type Question_AbCatWhereInput = {
  AND?: InputMaybe<Array<Question_AbCatWhereInput>>;
  NOT?: InputMaybe<Array<Question_AbCatWhereInput>>;
  OR?: InputMaybe<Array<Question_AbCatWhereInput>>;
  Question?: InputMaybe<QuestionRelationFilter>;
  abCatId?: InputMaybe<IntNullableFilter>;
  ability_category?: InputMaybe<Ability_CategoryRelationFilter>;
  id?: InputMaybe<IntFilter>;
  questionId?: InputMaybe<IntNullableFilter>;
};

export type Question_AbCatWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Setting = {
  __typename?: 'Setting';
  id: Scalars['Int'];
  key: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type SettingAvgAggregate = {
  __typename?: 'SettingAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type SettingAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SettingCountAggregate = {
  __typename?: 'SettingCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  key: Scalars['Int'];
  name: Scalars['Int'];
  value: Scalars['Int'];
};

export type SettingCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type SettingCreateInput = {
  key: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type SettingCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  key: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type SettingGroupBy = {
  __typename?: 'SettingGroupBy';
  _avg?: Maybe<SettingAvgAggregate>;
  _count?: Maybe<SettingCountAggregate>;
  _max?: Maybe<SettingMaxAggregate>;
  _min?: Maybe<SettingMinAggregate>;
  _sum?: Maybe<SettingSumAggregate>;
  id: Scalars['Int'];
  key: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type SettingInput = {
  key?: InputMaybe<Scalars['String']>;
};

export type SettingMaxAggregate = {
  __typename?: 'SettingMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SettingMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type SettingMinAggregate = {
  __typename?: 'SettingMinAggregate';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SettingMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type SettingOrderByWithAggregationInput = {
  _avg?: InputMaybe<SettingAvgOrderByAggregateInput>;
  _count?: InputMaybe<SettingCountOrderByAggregateInput>;
  _max?: InputMaybe<SettingMaxOrderByAggregateInput>;
  _min?: InputMaybe<SettingMinOrderByAggregateInput>;
  _sum?: InputMaybe<SettingSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type SettingOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum SettingScalarFieldEnum {
  Id = 'id',
  Key = 'key',
  Name = 'name',
  Value = 'value'
}

export type SettingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SettingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SettingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SettingScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  key?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type SettingSumAggregate = {
  __typename?: 'SettingSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type SettingSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type SettingUpdateInput = {
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SettingUpdateManyMutationInput = {
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type SettingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  key?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Topic = {
  __typename?: 'Topic';
  Ability?: Maybe<Ability>;
  Question: Array<Question>;
  _count?: Maybe<TopicCount>;
  abilityId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type TopicQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};

export type TopicAvgAggregate = {
  __typename?: 'TopicAvgAggregate';
  abilityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type TopicAvgOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TopicCount = {
  __typename?: 'TopicCount';
  Question: Scalars['Int'];
};

export type TopicCountAggregate = {
  __typename?: 'TopicCountAggregate';
  _all: Scalars['Int'];
  abilityId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type TopicCountOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicCreateInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutTopicInput>;
  Question?: InputMaybe<QuestionCreateNestedManyWithoutTopicInput>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicCreateManyAbilityInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicCreateManyAbilityInputEnvelope = {
  data: Array<TopicCreateManyAbilityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TopicCreateManyInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicCreateNestedManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<TopicCreateManyAbilityInputEnvelope>;
};

export type TopicCreateNestedOneWithoutQuestionInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<TopicCreateWithoutQuestionInput>;
};

export type TopicCreateOrConnectWithoutAbilityInput = {
  create: TopicCreateWithoutAbilityInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutQuestionInput = {
  create: TopicCreateWithoutQuestionInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateWithoutAbilityInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutTopicInput>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicCreateWithoutQuestionInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutTopicInput>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicGroupBy = {
  __typename?: 'TopicGroupBy';
  _avg?: Maybe<TopicAvgAggregate>;
  _count?: Maybe<TopicCountAggregate>;
  _max?: Maybe<TopicMaxAggregate>;
  _min?: Maybe<TopicMinAggregate>;
  _sum?: Maybe<TopicSumAggregate>;
  abilityId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicListRelationFilter = {
  every?: InputMaybe<TopicWhereInput>;
  none?: InputMaybe<TopicWhereInput>;
  some?: InputMaybe<TopicWhereInput>;
};

export type TopicMaxAggregate = {
  __typename?: 'TopicMaxAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TopicMaxOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicMinAggregate = {
  __typename?: 'TopicMinAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TopicMinOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TopicOrderByWithAggregationInput = {
  _avg?: InputMaybe<TopicAvgOrderByAggregateInput>;
  _count?: InputMaybe<TopicCountOrderByAggregateInput>;
  _max?: InputMaybe<TopicMaxOrderByAggregateInput>;
  _min?: InputMaybe<TopicMinOrderByAggregateInput>;
  _sum?: InputMaybe<TopicSumOrderByAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicOrderByWithRelationInput = {
  Ability?: InputMaybe<AbilityOrderByWithRelationInput>;
  Question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicRelationFilter = {
  is?: InputMaybe<TopicWhereInput>;
  isNot?: InputMaybe<TopicWhereInput>;
};

export enum TopicScalarFieldEnum {
  AbilityId = 'abilityId',
  Id = 'id',
  Name = 'name'
}

export type TopicScalarWhereInput = {
  AND?: InputMaybe<Array<TopicScalarWhereInput>>;
  NOT?: InputMaybe<Array<TopicScalarWhereInput>>;
  OR?: InputMaybe<Array<TopicScalarWhereInput>>;
  abilityId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TopicScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TopicScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TopicScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TopicScalarWhereWithAggregatesInput>>;
  abilityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type TopicSumAggregate = {
  __typename?: 'TopicSumAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type TopicSumOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TopicUpdateInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutTopicInput>;
  Question?: InputMaybe<QuestionUpdateManyWithoutTopicInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TopicUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TopicUpdateManyWithWhereWithoutAbilityInput = {
  data: TopicUpdateManyMutationInput;
  where: TopicScalarWhereInput;
};

export type TopicUpdateManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<TopicCreateManyAbilityInputEnvelope>;
  delete?: InputMaybe<Array<TopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicWhereUniqueInput>>;
  update?: InputMaybe<Array<TopicUpdateWithWhereUniqueWithoutAbilityInput>>;
  updateMany?: InputMaybe<Array<TopicUpdateManyWithWhereWithoutAbilityInput>>;
  upsert?: InputMaybe<Array<TopicUpsertWithWhereUniqueWithoutAbilityInput>>;
};

export type TopicUpdateOneWithoutQuestionInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<TopicCreateWithoutQuestionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TopicUpdateWithoutQuestionInput>;
  upsert?: InputMaybe<TopicUpsertWithoutQuestionInput>;
};

export type TopicUpdateWithWhereUniqueWithoutAbilityInput = {
  data: TopicUpdateWithoutAbilityInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpdateWithoutAbilityInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutTopicInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TopicUpdateWithoutQuestionInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutTopicInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TopicUpsertWithWhereUniqueWithoutAbilityInput = {
  create: TopicCreateWithoutAbilityInput;
  update: TopicUpdateWithoutAbilityInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpsertWithoutQuestionInput = {
  create: TopicCreateWithoutQuestionInput;
  update: TopicUpdateWithoutQuestionInput;
};

export type TopicWhereInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>;
  Ability?: InputMaybe<AbilityRelationFilter>;
  NOT?: InputMaybe<Array<TopicWhereInput>>;
  OR?: InputMaybe<Array<TopicWhereInput>>;
  Question?: InputMaybe<QuestionListRelationFilter>;
  abilityId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  Question: Array<Question>;
  QuestionConversation: Array<QuestionConversation>;
  QuestionLog: Array<QuestionLog>;
  _count?: Maybe<UserCount>;
  canLogin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  mata?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<User_Roles>;
  userInfo: Array<UserInfo>;
  user_ability: Array<User_Ability>;
  username: Scalars['String'];
};


export type UserQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type UserQuestionConversationArgs = {
  cursor?: InputMaybe<QuestionConversationWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionConversationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionConversationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionConversationWhereInput>;
};


export type UserQuestionLogArgs = {
  cursor?: InputMaybe<QuestionLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionLogWhereInput>;
};


export type UserUserInfoArgs = {
  cursor?: InputMaybe<UserInfoWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserInfoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserInfoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserInfoWhereInput>;
};


export type UserUser_AbilityArgs = {
  cursor?: InputMaybe<User_AbilityWhereUniqueInput>;
  distinct?: InputMaybe<Array<User_AbilityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<User_AbilityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<User_AbilityWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  Question: Scalars['Int'];
  QuestionConversation: Scalars['Int'];
  QuestionLog: Scalars['Int'];
  userInfo: Scalars['Int'];
  user_ability: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  canLogin: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastLogin: Scalars['Int'];
  lastName: Scalars['Int'];
  mata: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  role: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  canLogin?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  mata?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutUserInput>;
  canLogin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  mata?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<User_Roles>;
  userInfo?: InputMaybe<UserInfoCreateNestedManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutUserInput>;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  canLogin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  mata?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<User_Roles>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutQuestionConversationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutQuestionConversationInput>;
  create?: InputMaybe<UserCreateWithoutQuestionConversationInput>;
};

export type UserCreateNestedOneWithoutQuestionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<UserCreateWithoutQuestionInput>;
};

export type UserCreateNestedOneWithoutQuestionLogInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutQuestionLogInput>;
  create?: InputMaybe<UserCreateWithoutQuestionLogInput>;
};

export type UserCreateNestedOneWithoutUserInfoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserInfoInput>;
  create?: InputMaybe<UserCreateWithoutUserInfoInput>;
};

export type UserCreateNestedOneWithoutUser_AbilityInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUser_AbilityInput>;
  create?: InputMaybe<UserCreateWithoutUser_AbilityInput>;
};

export type UserCreateOrConnectWithoutQuestionConversationInput = {
  create: UserCreateWithoutQuestionConversationInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutQuestionInput = {
  create: UserCreateWithoutQuestionInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutQuestionLogInput = {
  create: UserCreateWithoutQuestionLogInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserInfoInput = {
  create: UserCreateWithoutUserInfoInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUser_AbilityInput = {
  create: UserCreateWithoutUser_AbilityInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutQuestionConversationInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutUserInput>;
  canLogin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  mata?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<User_Roles>;
  userInfo?: InputMaybe<UserInfoCreateNestedManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutUserInput>;
  username: Scalars['String'];
};

export type UserCreateWithoutQuestionInput = {
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutUserInput>;
  canLogin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  mata?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<User_Roles>;
  userInfo?: InputMaybe<UserInfoCreateNestedManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutUserInput>;
  username: Scalars['String'];
};

export type UserCreateWithoutQuestionLogInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutUserInput>;
  canLogin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  mata?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<User_Roles>;
  userInfo?: InputMaybe<UserInfoCreateNestedManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutUserInput>;
  username: Scalars['String'];
};

export type UserCreateWithoutUserInfoInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutUserInput>;
  canLogin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  mata?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<User_Roles>;
  user_ability?: InputMaybe<User_AbilityCreateNestedManyWithoutUserInput>;
  username: Scalars['String'];
};

export type UserCreateWithoutUser_AbilityInput = {
  Question?: InputMaybe<QuestionCreateNestedManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationCreateNestedManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogCreateNestedManyWithoutUserInput>;
  canLogin?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: InputMaybe<Scalars['DateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  mata?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<User_Roles>;
  userInfo?: InputMaybe<UserInfoCreateNestedManyWithoutUserInput>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  canLogin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  mata?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<User_Roles>;
  username: Scalars['String'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  User?: Maybe<User>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type UserInfoAvgAggregate = {
  __typename?: 'UserInfoAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type UserInfoAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserInfoCountAggregate = {
  __typename?: 'UserInfoCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  key: Scalars['Int'];
  userId: Scalars['Int'];
  value: Scalars['Int'];
};

export type UserInfoCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type UserInfoCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutUserInfoInput>;
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UserInfoCreateManyInput = {
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UserInfoCreateManyUserInput = {
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UserInfoCreateManyUserInputEnvelope = {
  data: Array<UserInfoCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserInfoCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInfoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserInfoCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserInfoCreateManyUserInputEnvelope>;
};

export type UserInfoCreateOrConnectWithoutUserInput = {
  create: UserInfoCreateWithoutUserInput;
  where: UserInfoWhereUniqueInput;
};

export type UserInfoCreateWithoutUserInput = {
  id: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UserInfoGroupBy = {
  __typename?: 'UserInfoGroupBy';
  _avg?: Maybe<UserInfoAvgAggregate>;
  _count?: Maybe<UserInfoCountAggregate>;
  _max?: Maybe<UserInfoMaxAggregate>;
  _min?: Maybe<UserInfoMinAggregate>;
  _sum?: Maybe<UserInfoSumAggregate>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type UserInfoListRelationFilter = {
  every?: InputMaybe<UserInfoWhereInput>;
  none?: InputMaybe<UserInfoWhereInput>;
  some?: InputMaybe<UserInfoWhereInput>;
};

export type UserInfoMaxAggregate = {
  __typename?: 'UserInfoMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type UserInfoMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type UserInfoMinAggregate = {
  __typename?: 'UserInfoMinAggregate';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type UserInfoMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type UserInfoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserInfoOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserInfoAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserInfoCountOrderByAggregateInput>;
  _max?: InputMaybe<UserInfoMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserInfoMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserInfoSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type UserInfoOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum UserInfoScalarFieldEnum {
  Id = 'id',
  Key = 'key',
  UserId = 'userId',
  Value = 'value'
}

export type UserInfoScalarWhereInput = {
  AND?: InputMaybe<Array<UserInfoScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserInfoScalarWhereInput>>;
  OR?: InputMaybe<Array<UserInfoScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<IntNullableFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type UserInfoScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserInfoScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserInfoScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserInfoScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  key?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntNullableWithAggregatesFilter>;
  value?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserInfoSumAggregate = {
  __typename?: 'UserInfoSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserInfoSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserInfoUpdateInput = {
  User?: InputMaybe<UserUpdateOneWithoutUserInfoInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserInfoUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserInfoUpdateManyWithWhereWithoutUserInput = {
  data: UserInfoUpdateManyMutationInput;
  where: UserInfoScalarWhereInput;
};

export type UserInfoUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserInfoWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserInfoCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserInfoCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserInfoCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserInfoWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserInfoScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserInfoWhereUniqueInput>>;
  set?: InputMaybe<Array<UserInfoWhereUniqueInput>>;
  update?: InputMaybe<Array<UserInfoUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserInfoUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserInfoUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserInfoUpdateWithWhereUniqueWithoutUserInput = {
  data: UserInfoUpdateWithoutUserInput;
  where: UserInfoWhereUniqueInput;
};

export type UserInfoUpdateWithoutUserInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  key?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  value?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserInfoUpsertWithWhereUniqueWithoutUserInput = {
  create: UserInfoCreateWithoutUserInput;
  update: UserInfoUpdateWithoutUserInput;
  where: UserInfoWhereUniqueInput;
};

export type UserInfoWhereInput = {
  AND?: InputMaybe<Array<UserInfoWhereInput>>;
  NOT?: InputMaybe<Array<UserInfoWhereInput>>;
  OR?: InputMaybe<Array<UserInfoWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<IntNullableFilter>;
  value?: InputMaybe<StringNullableFilter>;
};

export type UserInfoWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  canLogin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  mata?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<User_Roles>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  canLogin?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  mata?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  canLogin?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  mata?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<User_Roles>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  canLogin?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  mata?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  canLogin?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  mata?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  Question?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  QuestionConversation?: InputMaybe<QuestionConversationOrderByRelationAggregateInput>;
  QuestionLog?: InputMaybe<QuestionLogOrderByRelationAggregateInput>;
  canLogin?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  mata?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  userInfo?: InputMaybe<UserInfoOrderByRelationAggregateInput>;
  user_ability?: InputMaybe<User_AbilityOrderByRelationAggregateInput>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CanLogin = 'canLogin',
  FirstName = 'firstName',
  Id = 'id',
  LastLogin = 'lastLogin',
  LastName = 'lastName',
  Mata = 'mata',
  Password = 'password',
  Phone = 'phone',
  Role = 'role',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  canLogin?: InputMaybe<BoolNullableWithAggregatesFilter>;
  firstName?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lastLogin?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  lastName?: InputMaybe<StringNullableWithAggregatesFilter>;
  mata?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<Enumuser_RolesNullableWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutUserInput>;
  canLogin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumuser_RolesFieldUpdateOperationsInput>;
  userInfo?: InputMaybe<UserInfoUpdateManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutUserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  canLogin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumuser_RolesFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneWithoutQuestionConversationInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutQuestionConversationInput>;
  create?: InputMaybe<UserCreateWithoutQuestionConversationInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutQuestionConversationInput>;
  upsert?: InputMaybe<UserUpsertWithoutQuestionConversationInput>;
};

export type UserUpdateOneWithoutQuestionInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<UserCreateWithoutQuestionInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutQuestionInput>;
  upsert?: InputMaybe<UserUpsertWithoutQuestionInput>;
};

export type UserUpdateOneWithoutQuestionLogInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutQuestionLogInput>;
  create?: InputMaybe<UserCreateWithoutQuestionLogInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutQuestionLogInput>;
  upsert?: InputMaybe<UserUpsertWithoutQuestionLogInput>;
};

export type UserUpdateOneWithoutUserInfoInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserInfoInput>;
  create?: InputMaybe<UserCreateWithoutUserInfoInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutUserInfoInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserInfoInput>;
};

export type UserUpdateOneWithoutUser_AbilityInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUser_AbilityInput>;
  create?: InputMaybe<UserCreateWithoutUser_AbilityInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<UserUpdateWithoutUser_AbilityInput>;
  upsert?: InputMaybe<UserUpsertWithoutUser_AbilityInput>;
};

export type UserUpdateWithoutQuestionConversationInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutUserInput>;
  canLogin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumuser_RolesFieldUpdateOperationsInput>;
  userInfo?: InputMaybe<UserInfoUpdateManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutUserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutQuestionInput = {
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutUserInput>;
  canLogin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumuser_RolesFieldUpdateOperationsInput>;
  userInfo?: InputMaybe<UserInfoUpdateManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutUserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutQuestionLogInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutUserInput>;
  canLogin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumuser_RolesFieldUpdateOperationsInput>;
  userInfo?: InputMaybe<UserInfoUpdateManyWithoutUserInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutUserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUserInfoInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutUserInput>;
  canLogin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumuser_RolesFieldUpdateOperationsInput>;
  user_ability?: InputMaybe<User_AbilityUpdateManyWithoutUserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutUser_AbilityInput = {
  Question?: InputMaybe<QuestionUpdateManyWithoutUserInput>;
  QuestionConversation?: InputMaybe<QuestionConversationUpdateManyWithoutUserInput>;
  QuestionLog?: InputMaybe<QuestionLogUpdateManyWithoutUserInput>;
  canLogin?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastLogin?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  mata?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<NullableEnumuser_RolesFieldUpdateOperationsInput>;
  userInfo?: InputMaybe<UserInfoUpdateManyWithoutUserInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutQuestionConversationInput = {
  create: UserCreateWithoutQuestionConversationInput;
  update: UserUpdateWithoutQuestionConversationInput;
};

export type UserUpsertWithoutQuestionInput = {
  create: UserCreateWithoutQuestionInput;
  update: UserUpdateWithoutQuestionInput;
};

export type UserUpsertWithoutQuestionLogInput = {
  create: UserCreateWithoutQuestionLogInput;
  update: UserUpdateWithoutQuestionLogInput;
};

export type UserUpsertWithoutUserInfoInput = {
  create: UserCreateWithoutUserInfoInput;
  update: UserUpdateWithoutUserInfoInput;
};

export type UserUpsertWithoutUser_AbilityInput = {
  create: UserCreateWithoutUser_AbilityInput;
  update: UserUpdateWithoutUser_AbilityInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  Question?: InputMaybe<QuestionListRelationFilter>;
  QuestionConversation?: InputMaybe<QuestionConversationListRelationFilter>;
  QuestionLog?: InputMaybe<QuestionLogListRelationFilter>;
  canLogin?: InputMaybe<BoolNullableFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  mata?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<Enumuser_RolesNullableFilter>;
  userInfo?: InputMaybe<UserInfoListRelationFilter>;
  user_ability?: InputMaybe<User_AbilityListRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User_Ability = {
  __typename?: 'User_ability';
  Ability?: Maybe<Ability>;
  User?: Maybe<User>;
  abilityId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type User_AbilityAvgAggregate = {
  __typename?: 'User_abilityAvgAggregate';
  abilityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type User_AbilityAvgOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type User_AbilityCountAggregate = {
  __typename?: 'User_abilityCountAggregate';
  _all: Scalars['Int'];
  abilityId: Scalars['Int'];
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type User_AbilityCountOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type User_AbilityCreateInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutUser_AbilityInput>;
  User?: InputMaybe<UserCreateNestedOneWithoutUser_AbilityInput>;
  id: Scalars['Int'];
};

export type User_AbilityCreateManyAbilityInput = {
  id: Scalars['Int'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type User_AbilityCreateManyAbilityInputEnvelope = {
  data: Array<User_AbilityCreateManyAbilityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type User_AbilityCreateManyInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  userId?: InputMaybe<Scalars['Int']>;
};

export type User_AbilityCreateManyUserInput = {
  abilityId?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User_AbilityCreateManyUserInputEnvelope = {
  data: Array<User_AbilityCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type User_AbilityCreateNestedManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_AbilityCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<User_AbilityCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<User_AbilityCreateManyAbilityInputEnvelope>;
};

export type User_AbilityCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_AbilityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<User_AbilityCreateWithoutUserInput>>;
  createMany?: InputMaybe<User_AbilityCreateManyUserInputEnvelope>;
};

export type User_AbilityCreateOrConnectWithoutAbilityInput = {
  create: User_AbilityCreateWithoutAbilityInput;
  where: User_AbilityWhereUniqueInput;
};

export type User_AbilityCreateOrConnectWithoutUserInput = {
  create: User_AbilityCreateWithoutUserInput;
  where: User_AbilityWhereUniqueInput;
};

export type User_AbilityCreateWithoutAbilityInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutUser_AbilityInput>;
  id: Scalars['Int'];
};

export type User_AbilityCreateWithoutUserInput = {
  Ability?: InputMaybe<AbilityCreateNestedOneWithoutUser_AbilityInput>;
  id: Scalars['Int'];
};

export type User_AbilityGroupBy = {
  __typename?: 'User_abilityGroupBy';
  _avg?: Maybe<User_AbilityAvgAggregate>;
  _count?: Maybe<User_AbilityCountAggregate>;
  _max?: Maybe<User_AbilityMaxAggregate>;
  _min?: Maybe<User_AbilityMinAggregate>;
  _sum?: Maybe<User_AbilitySumAggregate>;
  abilityId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
};

export type User_AbilityListRelationFilter = {
  every?: InputMaybe<User_AbilityWhereInput>;
  none?: InputMaybe<User_AbilityWhereInput>;
  some?: InputMaybe<User_AbilityWhereInput>;
};

export type User_AbilityMaxAggregate = {
  __typename?: 'User_abilityMaxAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type User_AbilityMaxOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type User_AbilityMinAggregate = {
  __typename?: 'User_abilityMinAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type User_AbilityMinOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type User_AbilityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type User_AbilityOrderByWithAggregationInput = {
  _avg?: InputMaybe<User_AbilityAvgOrderByAggregateInput>;
  _count?: InputMaybe<User_AbilityCountOrderByAggregateInput>;
  _max?: InputMaybe<User_AbilityMaxOrderByAggregateInput>;
  _min?: InputMaybe<User_AbilityMinOrderByAggregateInput>;
  _sum?: InputMaybe<User_AbilitySumOrderByAggregateInput>;
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type User_AbilityOrderByWithRelationInput = {
  Ability?: InputMaybe<AbilityOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export enum User_AbilityScalarFieldEnum {
  AbilityId = 'abilityId',
  Id = 'id',
  UserId = 'userId'
}

export type User_AbilityScalarWhereInput = {
  AND?: InputMaybe<Array<User_AbilityScalarWhereInput>>;
  NOT?: InputMaybe<Array<User_AbilityScalarWhereInput>>;
  OR?: InputMaybe<Array<User_AbilityScalarWhereInput>>;
  abilityId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type User_AbilityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<User_AbilityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<User_AbilityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<User_AbilityScalarWhereWithAggregatesInput>>;
  abilityId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntNullableWithAggregatesFilter>;
};

export type User_AbilitySumAggregate = {
  __typename?: 'User_abilitySumAggregate';
  abilityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type User_AbilitySumOrderByAggregateInput = {
  abilityId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type User_AbilityUpdateInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutUser_AbilityInput>;
  User?: InputMaybe<UserUpdateOneWithoutUser_AbilityInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type User_AbilityUpdateManyMutationInput = {
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type User_AbilityUpdateManyWithWhereWithoutAbilityInput = {
  data: User_AbilityUpdateManyMutationInput;
  where: User_AbilityScalarWhereInput;
};

export type User_AbilityUpdateManyWithWhereWithoutUserInput = {
  data: User_AbilityUpdateManyMutationInput;
  where: User_AbilityScalarWhereInput;
};

export type User_AbilityUpdateManyWithoutAbilityInput = {
  connect?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_AbilityCreateOrConnectWithoutAbilityInput>>;
  create?: InputMaybe<Array<User_AbilityCreateWithoutAbilityInput>>;
  createMany?: InputMaybe<User_AbilityCreateManyAbilityInputEnvelope>;
  delete?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_AbilityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  set?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  update?: InputMaybe<Array<User_AbilityUpdateWithWhereUniqueWithoutAbilityInput>>;
  updateMany?: InputMaybe<Array<User_AbilityUpdateManyWithWhereWithoutAbilityInput>>;
  upsert?: InputMaybe<Array<User_AbilityUpsertWithWhereUniqueWithoutAbilityInput>>;
};

export type User_AbilityUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<User_AbilityCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<User_AbilityCreateWithoutUserInput>>;
  createMany?: InputMaybe<User_AbilityCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<User_AbilityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  set?: InputMaybe<Array<User_AbilityWhereUniqueInput>>;
  update?: InputMaybe<Array<User_AbilityUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<User_AbilityUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<User_AbilityUpsertWithWhereUniqueWithoutUserInput>>;
};

export type User_AbilityUpdateWithWhereUniqueWithoutAbilityInput = {
  data: User_AbilityUpdateWithoutAbilityInput;
  where: User_AbilityWhereUniqueInput;
};

export type User_AbilityUpdateWithWhereUniqueWithoutUserInput = {
  data: User_AbilityUpdateWithoutUserInput;
  where: User_AbilityWhereUniqueInput;
};

export type User_AbilityUpdateWithoutAbilityInput = {
  User?: InputMaybe<UserUpdateOneWithoutUser_AbilityInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type User_AbilityUpdateWithoutUserInput = {
  Ability?: InputMaybe<AbilityUpdateOneWithoutUser_AbilityInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type User_AbilityUpsertWithWhereUniqueWithoutAbilityInput = {
  create: User_AbilityCreateWithoutAbilityInput;
  update: User_AbilityUpdateWithoutAbilityInput;
  where: User_AbilityWhereUniqueInput;
};

export type User_AbilityUpsertWithWhereUniqueWithoutUserInput = {
  create: User_AbilityCreateWithoutUserInput;
  update: User_AbilityUpdateWithoutUserInput;
  where: User_AbilityWhereUniqueInput;
};

export type User_AbilityWhereInput = {
  AND?: InputMaybe<Array<User_AbilityWhereInput>>;
  Ability?: InputMaybe<AbilityRelationFilter>;
  NOT?: InputMaybe<Array<User_AbilityWhereInput>>;
  OR?: InputMaybe<Array<User_AbilityWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  abilityId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntNullableFilter>;
};

export type User_AbilityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum Cat_Types {
  Job = 'Job',
  JobCategory = 'JobCategory',
  Default = 'default'
}

export enum Crud {
  Create = 'create',
  Delete = 'delete',
  Read = 'read',
  Update = 'update'
}

export enum Question_Type {
  FourchoiceMultipletrue = 'fourchoice_multipletrue',
  FourchoiceOnetrue = 'fourchoice_onetrue',
  MultiplechoiceMultipletrue = 'multiplechoice_multipletrue',
  MultiplechoiceOnetrue = 'multiplechoice_onetrue'
}

export enum User_Roles {
  Admin = 'admin',
  Author = 'author',
  BankOperator = 'bank_operator',
  Observer = 'observer',
  Supervisor = 'supervisor'
}

export type CreateUserMutationVariables = Types.Exact<{
  data: Types.UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, username: string, password: string, role?: Types.User_Roles | null | undefined } };

export type GetUserQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, username: string, canLogin?: boolean | null | undefined } | null | undefined };


export const CreateUserDocument = `
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
    username
    password
    role
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) =>
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      'CreateUser',
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );
export const GetUserDocument = `
    query GetUser($id: Int) {
  user(where: {id: $id}) {
    id
    username
    canLogin
  }
}
    `;
export const useGetUserQuery = <
      TData = GetUserQuery,
      TError = unknown
    >(
      variables?: GetUserQueryVariables,
      options?: UseQueryOptions<GetUserQuery, TError, TData>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      variables === undefined ? ['GetUser'] : ['GetUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(GetUserDocument, variables),
      options
    );