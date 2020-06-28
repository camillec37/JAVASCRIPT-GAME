
    $("form").hide();

    $("#play").click(function debut() {

        var tentative = 7;
        $("#tentative").html("7");
        var solution = Math.floor(Math.random() * 100) + 1;
        console.log(solution);

        $("form").show();
        $("#play").hide();
        $('.message').html("Trouvez le Nombre Mystère!");


        $("#submit").click(function () {
            tentative--;

            $("#tentative").html(tentative);

            if ($("#nombre").val() == solution) {
                $(".message").html("vous avez gagné!");
                $("form").hide();
                $("#play").show().text("Rejouer").click(function debut(){
                });
            } else if ($("#nombre").val() > solution) {
                $(".message").html("Votre nombre est trop grand");
            } else if ($("#nombre").val() < solution) {
                $(".message").html("Votre nombre est trop petit");
            } else {
                $(".message").html("Invalide");
            }
            if ((tentative === 0) && $("#nombre").val() != solution) {
                $(".message").html("Perdu");
                $("form").hide();
                $("#play").show().text("Rejouer").click(function debut() {
                })
            }
        })

    });
/*
1 - REALISE LE JEU DU PLUS ET DU MOINS

Le jeu choisit aléatoirement un nombre entre 1 et 100,

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

puis il met le joueur au défi de le deviner.


1 - Le joueur doit deviner ce nombre en faisant des propositions dans un input et en cliquant
sur un bouton DIV

2 - Lorsqu'il clique sur ce bouton, le programme affiche le message suivant:
    - Si sa proposition est le bon nombre: Gagné !
    - Si sa proposition est plus petite que la solution: C'est plus grand !
    - Si sa proposition est plus grande que la solution: C'est plus petit !

3 - Le jeu doit se terminer si le joueur n'a pas deviné le nombre mystère au bout de 7 tentatives
On affichera le nombre de tentatives restantes à chaque fois que le joueur proposera une réponse

4 - Avant de commencer à jouer, le joueur devra appuyer sur un bouton "JOUER" pour faire apparaitre
l'input qui lui permettra de jouer. 

5 - Quand une partie se termine, le jeu propose à l'utilisateur une nouvelle partie.

Commencer par créer 2 fichiers: index.html et main.js.


===== BONUS =====

Pour cette partie, tu devras changer une fonctionnalité de ton programme
Le joueur doit trouver la réponse en 30 secondes au lieu des 7 tentatives. 
Un décompteur partant de 30 jusqu'à 0 doit être visible à la place du nombre de tentatives


/// AIDE ///

setInterval() est une méthode qui permet d'executer un fontion à des intervalles spécifiés (en millisecondes).
Elle continuera d'appeler la fonction jusqu'à ce que clearInterval() soit appelé ou que la fenêtre soit fermée.

Documentations : 
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
*/

/*
    $("form").hide();

    $("#play").click(function debut() {

        var tentative = 7;
        $("#tentative").html("7");
        var solution = Math.floor(Math.random() * 100) + 1;
        console.log(solution);

        $("form").show();
        $("#play").hide();
        $('.message').html("Trouvez le Nombre Mystère!");


        $("#submit").click(function () {
            tentative--;

            $("#tentative").html(tentative);

            if ($("#nombre").val() == solution) {
                $(".message").html("vous avez gagné!");
                $("form").hide();
                $("#play").show().text("Rejouer").click(function debut(){
                });
            } else if ($("#nombre").val() > solution) {
                $(".message").html("Votre nombre est trop grand");
            } else if ($("#nombre").val() < solution) {
                $(".message").html("Votre nombre est trop petit");
            } else {
                $(".message").html("Invalide");
            }
            if (tentative === 0) {
                $(".message").html("Perdu");
                $("form").hide();
                $("#play").show().text("Rejouer").click(function debut() {
                })
            }
        })

    });


 */