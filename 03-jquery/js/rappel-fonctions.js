'use strict';

console.log(demo1); // function
// console.log(demo2); // undefined si déclaré avec var ReferenceError
// console.log(demo3); // ReferenceError

// 2 syntaxes pour définir une fonction
//  * syntaxe déclarative
function demo1() { }
//  * syntaxe d'expression (largement la plus commune)
const demo2 = function() { }; // pas de declaration hoisting (remontée des déclarations)

// les deux: (peu d'intéret à mes yeux)
const demo4 = function demo3() {};

// IIFE: expression de fonction immédiatement invoquée
// intéret: création d'un scope de fonction
(function() {
    console.log('IIFE 1', this);
})();

(function(){
    console.log('IIFE 2', this);
}());

// 4 façons d'appeler une fonction
//   * en tant que fonction
function fonction() {}
fonction(); // this = undefined en mode strict, objet global sinon

//   * en tant que constructeur
function Constructeur() {} // convention de nommage PascalCase
new Constructeur(); // this vaut la nouvelle référence crée par new

//   * en tant que méthode
const objet = {
    prop: function() {}
}
objet.prop(); // this vaut l'objet sur lequel la fonction est rattachée

//   * via call ou apply
//   this est défini par l'appelant (passé en paramètre)
