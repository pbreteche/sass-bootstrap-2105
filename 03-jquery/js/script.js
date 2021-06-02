'use strict'; // modifie le contexte d'exécution
// permet de transformer des problèmes en erreurs
// exemple: obligation de déclarer les variables avec var, let ou const
// exemple: si une fonction est appelée en tant que fonction,
//     this vaut undefined au lieu de l'objet global

$(document).ready(function() {
    console.log(this);
});

// équivalent à :
$(function() {

});

document.addEventListener('DOMContentLoaded', function() {

});
