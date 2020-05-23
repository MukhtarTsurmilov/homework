"use strict";

let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели ?"),
    personalMovieDB = {
        conut: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    lastMovie1 = prompt ("Один из последних фильмов?", ""),  
    raiting1 = prompt ("На сколько оцените его?", ""),
    lastMovie2 = prompt ("Один из последних фильмов?", ""),  
    raiting2 = prompt ("На сколько оцените его?", "");

    personalMovieDB.movies[lastMovie1] = raiting1;
    personalMovieDB.movies[lastMovie2] = raiting2;

console.log(personalMovieDB);