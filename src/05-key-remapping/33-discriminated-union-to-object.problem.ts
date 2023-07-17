import { Equal, Expect } from '../helpers/type-utils'

type Route =
  | {
      route: '/'
      search: {
        page: string
        perPage: string
      }
    }
  | { route: '/about'; search: {} }
  | { route: '/admin'; search: {} }
  | { route: '/admin/users'; search: {} }

type RoutesObject = {
  [El in Route as El['route']]: El['search']
}

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': {
          page: string
          perPage: string
        }
        '/about': {}
        '/admin': {}
        '/admin/users': {}
      }
    >
  >
]
