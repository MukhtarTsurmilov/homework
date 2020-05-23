"use strict";

let numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели ?"),
    personalMovieDB = {
        conut: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    },
    lastMovie = prompt ("Один из последних фильмов?", ""),  
    raiting = prompt ("На сколько оцените его?", "");

    personalMovieDB.movies.lastmovie = lastMovie;
    personalMovieDB.movies.raiting = lastMovie;

console.log(personalMovieDB);