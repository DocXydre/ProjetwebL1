//ajoute un écouteur d'événement qui va lancer la fonction addBranch
var btn = document.getElementById("mid"); 
btn.addEventListener("click", addBranch);
 

var branch = document.getElementById("marqueur"); //récupére les infos de la div marqueur

 //ajoute a chaque branche déja créé la fonction addListener
var nordimage = document.getElementById("nord");
addListener(nordimage);
var estimage = document.getElementById("est");
addListener(estimage);
var sudestimage = document.getElementById("sudest");
addListener(sudestimage);
var sudouestimage = document.getElementById("sudouest");
addListener(sudouestimage);
var ouestimage = document.getElementById("ouest");
addListener(ouestimage);

//fonction qui ajoute une branche
function addBranch(){
    var image = document.createElement("img"); //création de l'image
    image.src = "branch.svg";
    var p = getRandomInt(361); //utlise la fonction getRandomInt pour choisir un nombre aléatoire entre 0 et 361
    p = "hue-rotate("+p+"deg)"; 
    image.style.filter = p; //change le style pour mettre une couleur aléatoire
    branch.appendChild(image); //ajoute a la div marqueur l'image créé
    uptdateAngles(branch);//utilise la fonction uptdateAngles pour replacé toutes les branches
    addListener(image);//utilise la fonction addListener 
}

//fonctin qui replace toute les branches 
function uptdateAngles(){
    var Children = branch.children; //met les enfants de la div marqueur dans un tableau
    for (var i = 0; i < Children.length; i++) { //utilise une itinérance pour chercher chaque enfant
        var r = i * (360/Children.length);//calcule chaque angle en fonction du nombre de branche
        r = "rotate("+r+"deg)";
        Children[i].style.transform = r;//change le style pour changer l'angle de l'image
    }
}

//fonction qui donne un nombre aléatoire
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

//fonction qui supprime l'image 
function supBranch(node){
    if (node.parentNode) {
        node.parentNode.removeChild(node);//supprime l'enfant du parent juste en conaissant l'enfant
    }
    uptdateAngles();//utilise la fonction updateAngles
}

//fonction qui ajoute un écouteur d'évenement (c'est inutile normalement mais ça permet d'alleger le code pour ajouter la supression de branche dans les branches déja ajouté)
function addListener(obj){
    obj.addEventListener("click", function(){
        supBranch(obj); 
    });
}

