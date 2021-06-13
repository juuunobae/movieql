// Query를 resolve(해결)하는 것이다.

// 데이터베이스의 데이터가 될 것이다.
// const bae = {
//   name: "junho",
//   age: 28,
//   gender: "male",
// };

// 여러개의 데이터는 배열로 만들어준다.
// const people = [
//   1 = {
//     name: "junho",
//     age: 28,
//     gender: "mele",
//   },
//   2 = {
//     name: "jungeun",
//     age: 27,
//     gender: "femele",
//   }
// ];

// ---------------------------------------------------

// import { getById, people } from "./db";

// const resolvers = {
//   // resolvers는 개발자가 원하는데로 프로그래밍 할 수 있다.
//   // Database로 갈 수도 있고 메모리로 갈 수도 있고 다른 API로 갈 수도 있다.
//   Query: {
//     people: () => people,
//     person: (_, { id }) => getById(id), // { id } === args.id
//     // : (parent, args, context, info) 순으로 4개의 인자가 자동으로 들어간다.
//     // 사용하지 않을 인자는 _(언더바)로 입력해주면 된다.
//   },
// };

// export default resolvers;

// ---------------------------------------------------

import { addMovie, getId, getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getId(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

export default resolvers;
