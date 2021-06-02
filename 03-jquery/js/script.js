'use strict'; // modifie le contexte d'exécution
// permet de transformer des problèmes en erreurs
// exemple: obligation de déclarer les variables avec var, let ou const
// exemple: si une fonction est appelée en tant que fonction,
//     this vaut undefined au lieu de l'objet global

// cohabitation entre jQuery et d'autres lib
$.noConflict(); // rend l'alias "$" à sa valeur origine au niveau global

// IIFE redéfinit "$" localement
(function($){
    $(function() {
        // C'est ici que commence réellement notre code

        // chargement d'une collection d'élément / sélecteur jQuery
        // sélecteur jQuery ~ sélecteur HTML + qq bonus
        $('h1:contains(démo)')
        // applique un traitement à tous les éléments de la collection
        .css({ 
            color: 'red',
        });

        // La sélection d'éléments est couteuse
        //   * conserver une sélection dans une variable
        //     par convention préfixer le nom de variable avec "$"
        //   * transformer une sélection à partir d'une autre

    }); 
})(jQuery);
