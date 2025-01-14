import { Equal, Expect } from '../helpers/type-utils'

interface Example {
  name: string
  age: number
  id: string
  organisationId: string
  groupId: string
}

type SearchForId = `${string}${'Id' | 'id'}${string}`

type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearchForId ? K : never]: T[K]
}

type a = OnlyIdKeys<Example>

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string
        organisationId: string
        groupId: string
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
]
