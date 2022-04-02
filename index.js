// let tabNumber = [10, 1, 2, 3, 4, 5];
let tabCaracter = ["x", "a", "b", "c", "d", "e"];

let tabNumber = [10, 1, 2, 3, 4, 5];
let resultTabNumber = (el) => el > 3; //Renvoie l'index de la valeur la plus grande au dessus de 3
let resultTabCaracter = (el) => el == "a"; //Renvoie l'index ou se trouve le caractère a

console.log(tabNumber.findIndex(resultTabNumber));
console.log(tabCaracter.findIndex(resultTabCaracter));

/*
//Converti le tableau en chaine de caractère
tabNumber.toString();
console.log(tabNumber.toString());

//Permet de connaitre la longeur d'un tableau
tabNumber.length;
console.log(tabNumber.length);

//Supprime le dernier élément d'un tableau
tabNumber.pop();
console.log(tabNumber);

//Supprime le premier élément d'un tableau
tabNumber.shift();
console.log(tabNumber);

//Supprimer les premiers éléments d'un tableau
tabNumber.slice(2);
console.log(tabNumber.slice(2));

//Supprimer les derniers éléments d'un tableau
tabNumber.slice(0, 2);
console.log(tabNumber.slice(0, 2));

//Calcul la somme de toutes les valeurs d'un tableau
let i = 0;
let resultNumber = tabNumber.reduce((a, b) => a + b, i);
let resultCaracter = tabCaracter.reduce((a, b) => a + b, i);
console.log(resultNumber);
console.log(resultCaracter);

//Trie un tableau par odre croissant
tabNumber.sort((a, b) => a - b);
tabCaracter.sort();
console.log(tabNumber);
console.log(tabCaracter);

//Trie un tableau par odre décroissant
tabNumber.sort((a, b) => a - b);
tabNumber.reverse();
tabCaracter.sort();
tabCaracter.reverse();
console.log(tabNumber);
console.log(tabCaracter);

//Trouver la valeur la plus grande dans un tableau
Math.max(...tabNumber);
console.log(Math.max(...tabNumber));

//Trouver la valeur la plus petite dans un tableau
Math.min(...tabNumber);
console.log(Math.min(...tabNumber));

//Ajouter des éléments à un tableau et suppression possible d'éléments
tabNumber.splice(1, 0, 11);//Ajoute 11 à l'index 1
tabCaracter.splice(2, 2, "ok");//Ajoute ok à l'index 2 et supprime les 2 index qui suivent
console.log(tabNumber);
console.log(tabCaracter);


//Calculer l'ensemeble des valeurs d'un tableau
let resultTabNumber = tabNumber.map((x) => x * 2);
console.log(resultTabNumber);

*/
//Filtrer un tableau
// let resultTabNumber = tabNumber.filter((el) => el > 3); //Renvoie tous les éléments au supérieure à 3
// let resultTabCaracter = tabCaracter.filter((el) => el != "a"); //Retire l'éléments a du tableau
// console.log(resultTabNumber);
// console.log(resultTabCaracter);

//Trouver un élément dans un tableau
// let resultTabNumber = tabNumber.find((el) => el == 3);
// let resultTabCaracter = tabCaracter.find((el) => el == "a");
// console.log(resultTabNumber);
// console.log(resultTabCaracter);

//Trouver l'index d'un élément dans un tableau
// let resultTabNumber = (el) => el > 3; //Renvoie l'index de la valeur la plus grande au dessus de 3
// let resultTabCaracter = (el) => el == "a"; //Renvoie l'index ou se trouve le caractère a

// console.log(tabNumber.findIndex(resultTabNumber));
// console.log(tabCaracter.findIndex(resultTabCaracter));

let M = [];
let SM = [];
let article = [];
let btnArticle = [];

for (let i = 0; i < 6; i++) {
  M[i] = document.getElementById(`M${i}`);
  SM[i] = document.querySelectorAll(`.SM${i}`);
  M[i].addEventListener("click", () => {
    M[i].classList.toggle("menu-active");
    for (let x = 0; x < SM[i].length; x++) {
      SM[i][x].classList.toggle("menu-active");
    }
  });
}

for (let i = 0; i < 16; i++) {
  article[i] = document.getElementById(`article-${i}`);
  btnArticle[i] = document.getElementById(`btn-article-${i}`);
  btnArticle[i].addEventListener("click", () => {
    article[i].classList.toggle("none");
    btnArticle[i].classList.toggle("active");
  });
}
