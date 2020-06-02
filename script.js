"use strict";

// let numberOfFilms,
//     personalMovieDB = {
//         conut: numberOfFilms,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false
//     };


// //Функция start - запускается первый вопрос о количестве фильмов
// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", ''); //сам вопрос

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { //цикл проверки, если строка пустая или нажата "отмена" вопрос задается еще раз
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", '');
//     }
// }
// start(); //запуск функции 

// // Цикл методом for
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) { //Цикл с вопросами
//         let lastMovie = prompt("Один из последних фильмов?", ""),
//             raiting = prompt("На сколько оцените его?", "");

//         if (lastMovie == "" || raiting == "" || lastMovie == null || raiting == null || lastMovie.length > 50) { //Запреть вводить пустую строку, название фильма длинне 50 символов и отменять ввод
//             i--;
//         } else {
//             personalMovieDB.movies[lastMovie] = raiting; //Если все нормально то записать ответы и поместить в объект
//         }

//     }
// }
// rememberMyFilms(); //запуск функции 

// // Цикл методом while
// // let i = 0;
// // while (i < 2) {
// //     let lastMovie = prompt("Один из последних фильмов?", ""),
// //         raiting = prompt("На сколько оцените его?", "");

// //     if (lastMovie == "" || raiting == "" || lastMovie == null || raiting == null || lastMovie.length > 50) { //Запреть вводить пустую строку, название фильма длинне 50 символов и отменять ввод
// //         i--;
// //     } else {
// //         personalMovieDB.movies[lastMovie] = raiting; //Если все нормально то записать ответы и поместить в объект
// //         i++;
// //     }
// // }

// // Цикл методом do...while
// // let i = 0;
// //  do {
// //     let lastMovie = prompt("Один из последних фильмов?", ""),
// //         raiting = prompt("На сколько оцените его?", "");

// //     if (lastMovie == "" || raiting == "" || lastMovie == null || raiting == null || lastMovie.length > 50) { //Запреть вводить пустую строку, название фильма длинне 50 символов и отменять ввод
// //         i--;
// //         console.log(i);
// //     } else {
// //         personalMovieDB.movies[lastMovie] = raiting;  //Если все нормально то записать ответы и поместить в объект
// //         i++;
// //         console.log(i);

// //     }
// // }

// // while (i < 2);

// function detectedPersonalLevel() { //фунция writeYourGenres
//     if (personalMovieDB.conut < 10) { //Вывовд сообщения в зависимости от количества просмотренных фильмов
//         alert("Просмотроено довольно мало фильмов");
//     } else if (10 <= personalMovieDB.conut && personalMovieDB.conut < 30) {
//         alert("Вы классный зритель");
//     } else if (personalMovieDB.conut >= 30) {
//         alert("Вы киноман");
//     } else {
//         alert("Произошла ошибка");
//     }
// }
// detectedPersonalLevel(); //запуск функции detectedPersonalLevel

// function writeYourGenres() { //фунция writeYourGenres
//     for (let i = 0; i < 3; i++) { //цикл выполняется три раза
//         let favoriteGenres = prompt(`Ваш люимый жанр под номером ${i+1} ?`, ""); //вопрос с интерполяцией

//         if (favoriteGenres == "" || favoriteGenres == null) {  //цикл проверки, если строка пустая или нажата "отмена" вопрос задается еще раз
//             i--;
//         } else {
//             personalMovieDB.genres[i] = favoriteGenres;
//         }
//     }
// }
// writeYourGenres(); //запуск функции writeYourGenres

// function showMyDB() { //фунция showMyDB 
//     if (personalMovieDB.privat == false) { //проверка условия, если если знаение ключа "private" соотвествует "false" тогда в консоль выводится информация по объекту
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(); //запуск функции showMyDB

//Рефакторинг, представляем что все функции приложения становятся методами 

let numberOfFilms,
    personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function () {
            numberOfFilms.count = +prompt("Сколько фильмов вы уже посмотрели ?", '');

            while (numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)) {
                numberOfFilms.count = +prompt("Сколько фильмов вы уже посмотрели ?", '');
            }
        },
        rememberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
                let lastMovie = prompt("Один из последних фильмов?", ""),
                    raiting = prompt("На сколько оцените его?", "");

                if (lastMovie == "" || raiting == "" || lastMovie == null || raiting == null || lastMovie.length > 50) { //Запреть вводить пустую строку, название фильма длинне 50 символов и отменять ввод
                    i--;
                } else {
                    personalMovieDB.movies[lastMovie] = raiting; //Если все нормально то записать ответы и поместить в объект
                }

            }
        },
        detectedPersonalLevel: function () {
            if (personalMovieDB.conut < 10) {
                alert("Просмотроено довольно мало фильмов");
            } else if (10 <= personalMovieDB.conut && personalMovieDB.conut < 30) {
                alert("Вы классный зритель");
            } else if (personalMovieDB.conut >= 30) {
                alert("Вы киноман");
            } else {
                alert("Произошла ошибка");
            }
        },
        writeYourGenres: function () {
            for (let i = 0; i < 3; i++) {
                let favoriteGenres = prompt(`Ваш люимый жанр под номером ${i+1} ?`, "");

                if (favoriteGenres == "" || favoriteGenres == null) {
                    i--;
                } else {
                    personalMovieDB.genres[i] = favoriteGenres;
                }
            }
            personalMovieDB.genres.forEach(function (item, i, genres) {
                console.log(`Любимый жанр #${i+1} - это ${item}`);
            });
        },
        showMyDB: function () {
            if (personalMovieDB.privat == false) {
                console.log(personalMovieDB);
            }
        },
        toggleVisibleMyDB: function () {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        }
    };