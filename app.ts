// ! 하나의 코드로 나열하였는데, 이것을 적절한 수준의 모듈로 분리하여 import, export하는 방식으로 분리, 모디파이하는 훈련을 진행하시기 바랍니다.
// 어디를 분류해야 적절하게 요점을 짚을 수 있을까요?

type Props = {
  [key: string]: string;
};

function createElement(tagName: string, props: Props, ...children: string[]): string {
  const propEntries = Object.entries(props)
  let propString = '';

  for (let [key, value] of propEntries) {
    propString += `${key}="${value}"`;
  }

  return `<${tagName} ${propString.trim()}>${children.join('')}</${tagName}>`;
}

type Pokemon = {
  name: string;
  id: number;
};

const pokemonList: Pokemon[] = [
  { name: '피카츄', id: 1 },
  { name: '이상해씨', id: 2 },
  { name: '파이리', id: 3 },
  { name: '꼬부기', id: 4 },
  { name: '버터풀', id: 5 }
];