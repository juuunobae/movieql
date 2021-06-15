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

// ----------------------------------------------------------------------------------

// let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 8.1,
//   },
//   {
//     id: 1,
//     name: "Avengers - The new one",
//     score: 9.4,
//   },
//   {
//     id: 2,
//     name: "The Godfather",
//     score: 5.8,
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 7.3,
//   },
// ];

// // 영화 배열 리턴 함수
// export const getMovies = () => movies;

// // 하나의 데이터만 응답
// export const getId = (id) => {
//   // 찾는 id와 동일한 id를 가지고 있는 하나의 데이터만 얻기 위한 코드
//   // movies 데이터베이스에서 필요한 id를 가진 데이터만 찾아 새로운 배열에 담는다.
//   const filterMovie = movies.filter((movie) => movie.id === id);
//   return filterMovie;
// };

// // 영화 삭제
// export const deleteMovie = (id) => {
//   // .filter 메소드를 이용해 사용자가 삭제하고 싶은 영화의 id를 가진 영화 데이터만 빼고 나머지 영화데이터들을 새로운 배열에 담는다.
//   const cleanMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleanMovies.length) {
//     // 기존 영화 배열의 길이보다 새로운 영화 배열의 길이가 짧으면 기존 배열에 덮어쓰고 true를 리턴
//     movies = cleanMovies;
//     return true;
//   } else {
//     return false;
//   }
//   // 성공 여부를 리턴해주는 것
// };

// // 영화 추가
// // 추가할 데이터에 필요한 내용들을 인자로 받는다.
// export const addMovie = (name, score) => {
//   // 새로운 영화를 추가하기 위해 객체를 생성한다.
//   const newMovie = {
//     id: `${movies.length + 1}`, // id는 현재 영화 배열의 길이에서 1을 더한 값을 해준다.
//     name,
//     score,
//   };
//   movies.push(newMovie); // 영화 배열에 새로운 영화 데이터를 추가한다.
//   return newMovie; // 새로운 데이터를 리턴
// };

// ----------------------------------------------------------------------------------

import axios from "axios";

const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIE_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

// 사용자 요청에서 limit과 rating을 받아 함수를 호출하고,
// axios를 통해 사용자가 입력한 limit과 rating이 있을시 params(axios의 두번째 인자) 객체에
// 담아 url과 함께 API 요청을 보내면 그에 해당하는 데이터들만 응답을 받을 수 있다.
// 입력받은 limit이나 rating 값이 없으며 undefined이고, 모든 데이터를 응답 받는다.
// aixos로 요청한 데이터에 대한 응답은 data 객체 안에 들어있다.
// data 객체 안에서 필요한 데이터를 사용하면 된다.
export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
    // axios 요청에 대한 응답은 data라는 이름의 객체 형태이기 때문에 위와 같이 정의하여 사용한다.
  } = await axios(LIST_MOVIE_URL, {
    // params = 요청과 함께 전송 될 URL 매개 변수이다.
    // 일반객체이거나 URLSearchParams 객체여야 한다.
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  // axios의 첫번째 인자는 API를 요청할 URL이고, 두번째 인자는 config객체이다.
  return movies; // 응답받은 movies를 리턴한다.
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  console.log(await axios(MOVIE_DETAILS_URL));
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
