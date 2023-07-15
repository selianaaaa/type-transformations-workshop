import { Equal, Expect } from '../helpers/type-utils';

/**
 * Some docs that might help!
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
 */
export const programModeEnumMap = {
  GROUP: 'group',
  ANNOUNCEMENT: 'announcement',
  ONE_ON_ONE: '1on1',
  SELF_DIRECTED: 'selfDirected',
  PLANNED_ONE_ON_ONE: 'planned1on1',
  PLANNED_SELF_DIRECTED: 'plannedSelfDirected',
} as const;

type ProgramModeEnumMap = typeof programModeEnumMap;

export type GroupProgram = ProgramModeEnumMap['GROUP'];
export type AnnouncementProgram = ProgramModeEnumMap['ANNOUNCEMENT'];
export type OneOnOneProgram = ProgramModeEnumMap['ONE_ON_ONE'];
export type SelfDirectedProgram = ProgramModeEnumMap['SELF_DIRECTED'];
export type PlannedOneOnOneProgram = ProgramModeEnumMap['PLANNED_ONE_ON_ONE'];
export type PlannedSelfDirectedProgram =
  ProgramModeEnumMap['PLANNED_SELF_DIRECTED'];

type tests = [
  Expect<Equal<GroupProgram, 'group'>>,
  Expect<Equal<AnnouncementProgram, 'announcement'>>,
  Expect<Equal<OneOnOneProgram, '1on1'>>,
  Expect<Equal<SelfDirectedProgram, 'selfDirected'>>,
  Expect<Equal<PlannedOneOnOneProgram, 'planned1on1'>>,
  Expect<Equal<PlannedSelfDirectedProgram, 'plannedSelfDirected'>>
];
