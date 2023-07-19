import { Equal, Expect } from '../helpers/type-utils';

interface FruitMap {
  apple: 'red';
  banana: 'yellow';
  orange: 'orange';
}

type TransformedFruitMap = {
  [F in keyof FruitMap]: `${F}:${FruitMap[F]}`;
};

type TransformedFruit = TransformedFruitMap[keyof TransformedFruitMap];

type tests = [
  Expect<
    Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
  >
];
