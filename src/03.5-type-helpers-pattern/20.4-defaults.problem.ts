import { Equal, Expect } from '../helpers/type-utils'

type CreateDataShape<TData, TError = undefined> = {
  data: TData
  error: TError
}

type ReturnWhatIPassIn<T = undefined> = T

type a = ReturnWhatIPassIn

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string
        error: undefined
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean
        error: SyntaxError
      }
    >
  >
]
