// const people = [
//   {
//     id: "1",
//     name: "junho",
//     age: 28,
//     gender: "mele",
//   },
//   {
//     id: "2",
//     name: "jeongeun",
//     age: 27,
//     gender: "femele",
//   },
//   {
//     id: "3",
//     name: "jaewoo",
//     age: 29,
//     gender: "mele",
//   },
//   {
//     id: "4",
//     name: "jieun",
//     age: 29,
//     gender: "femele",
//   },
// ];

// export const getById = (id) => {
//   // 찾는 id와 동일한 id를 가지고 있는 하나의 데이터만 얻기 위한 코드
//   // people 데이터베이스에서 해당하는 데이터만 찾아 새로운 배열에 담는다..
//   const filteredPeople = people.filter((person) => String(id) === person.id);
//   return filteredPeople[0]; // 배열에 담긴 첫번 째 요소의 데이터를 리턴해준다.
// };

let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 8.1,
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 9.4,
  },
  {
    id: 2,
    name: "The Godfather",
    score: 5.8,
  },
  {
    id: 3,
    name: "Logan",
    score: 7.3,
  },
];

export const getMovies = () => movies;

export const getId = (id) => {
  const filterMovie = movies.filter((movie) => movie.id === String(id));
  return filterMovie;
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleandMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
