export const people = [
  {
    id: "1",
    name: "junho",
    age: 28,
    gender: "mele",
  },
  {
    id: "2",
    name: "jungeun",
    age: 27,
    gender: "femele",
  },
  {
    id: "3",
    name: "jaewoo",
    age: 29,
    gender: "mele",
  },
  {
    id: "4",
    name: "jieun",
    age: 29,
    gender: "femele",
  },
  {
    id: "5",
    name: "jiwoo",
    age: 23,
    gender: "femele",
  },
  {
    id: "6",
    name: "nico",
    age: 27,
    gender: "male",
  },
];

export const getById = (id) => {
  // 찾는 id와 동일한 id를 가지고 있는 하나의 데이터만 얻기 위한 코드
  // people 데이터베이스에서 해당하는 데이터만 찾아 새로운 배열에 담는다..
  const filteredPeople = people.filter((person) => String(id) === person.id);
  return filteredPeople[0]; // 배열에 담긴 첫번 째 요소의 데이터를 리턴해준다.
};
