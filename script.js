"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели ?"),
    personalMovieDB = {
        conut: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

// Цикл методом for
// for (let i = 0; i < 2; i++) { //Цикл с вопросами
//     let lastMovie = prompt("Один из последних фильмов?", ""),
//         raiting = prompt("На сколько оцените его?", "");

//     if (lastMovie == "" || raiting == "" || lastMovie == null || raiting == null || lastMovie.length > 50) { //Запреть вводить пустую строку, название фильма длинне 50 символов и отменять ввод
//         i--;
//     } else {
//         personalMovieDB.movies[lastMovie] = raiting; //Если все нормально то записать ответы и поместить в объект
//     }

// }

// Цикл методом while
// let i = 0;
// while (i < 2) {
//     let lastMovie = prompt("Один из последних фильмов?", ""),
//         raiting = prompt("На сколько оцените его?", "");

//     if (lastMovie == "" || raiting == "" || lastMovie == null || raiting == null || lastMovie.length > 50) { //Запреть вводить пустую строку, название фильма длинне 50 символов и отменять ввод
//         i--;
//     } else {
//         personalMovieDB.movies[lastMovie] = raiting; //Если все нормально то записать ответы и поместить в объект
//         i++;
//     }
// }

// Цикл методом do...while
let i = 0;
 do {
    let lastMovie = prompt("Один из последних фильмов?", ""),
        raiting = prompt("На сколько оцените его?", "");

    if (lastMovie == "" || raiting == "" || lastMovie == null || raiting == null || lastMovie.length > 50) { //Запреть вводить пустую строку, название фильма длинне 50 символов и отменять ввод
        i--;
        console.log(i);
    } else {
        personalMovieDB.movies[lastMovie] = raiting;  //Если все нормально то записать ответы и поместить в объект
        i++;
        console.log(i);

    }
}

while (i < 2);

if (personalMovieDB.conut < 10) {                   //Вывовд сообщения в зависимости от количества просмотренных фильмов
    alert("Просмотроено довольно мало фильмов");
} else if (10 <= personalMovieDB.conut && personalMovieDB.conut < 30) {
    alert("Вы классный зритель");
} else if (personalMovieDB.conut >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);