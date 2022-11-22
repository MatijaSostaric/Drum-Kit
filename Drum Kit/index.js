for(var i = 0; i<document.querySelectorAll(".drum").length ; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;   //THIS nam oznacuje TAJ objekt koji je trenutno odabran u funkciji, tj. poprima vrijednost onog buttona kojeg smo kliknuli

        makeSound(buttonInnerHTML); //vrijednost buttona šaljemo kao vrijednost funkciji "makeSound"
        buttonAnimation(buttonInnerHTML); //isto kao red gore samo druga funkcija

    }); //samo kopiraj cijelu funkciju BEZ IMENA u dio eventa!

} //pozvali smo for onoliko puta koliko ima objekata (buttona) klase "drum"


document.addEventListener("keydown", function (event) {
    
    makeSound(event.key); //od "eventa" koji se dogodio zatražili smo "key" kojeg prosljeđujemo "makeSound" funkciji
    buttonAnimation(event.key); //isto kao red gore samo druga funkcija

})  //"cijeli" dokument čeka kad će se dogoditi "keydown" i tad poziva funkciju "makeSound"

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();   
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();   
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();   
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();   
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();   
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();   
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();   
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    } 
}   //definirali smo ovu funkciju da ju kasnije možemo zvati kada pritisnemo na "buttom" ili kad pritisnemo slovo na tipkovnici, tj. "keydown"

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); //pod activeButton spremili smo ime klase za određeno slovo
    activeButton.classList.add("pressed"); //tad smo buttonu sa tom klasom dodali klasu "pressed" koja je u css-u definirana od prije
    setTimeout(function() {
        activeButton.classList.remove("pressed"); 
    }, 100);  //funkcija koja u određenom vremenu (100 milisekundi) odradi neku radnju
}