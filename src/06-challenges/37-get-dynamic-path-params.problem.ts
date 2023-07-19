import { Equal, Expect } from '../helpers/type-utils';
import { S } from 'ts-toolbelt';

type UserPath = '/users/:id';

type UserOrganisationPath = '/users/:id/organisations/:organisationId';

type PathArray<T extends string> = S.Split<T, `/`>[number];

type DynamicPaths<T> = {
  [K in T as K extends `:${infer V}` ? V : never]: string;
};

type ExtractPathParams<T extends string> = DynamicPaths<PathArray<T>>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
