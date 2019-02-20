// Navbar Button Noir ET Blanc
///////////////////////////////////////////////

let recupBtnNoir = document.querySelectorAll("button")[1];
let recupBtnBlanc = document.querySelectorAll("button")[2];
let recupBtnConnexion = document.querySelectorAll("button")[3];

let recupNav = document.getElementById("nav-nav");



let recupUl = document.querySelectorAll("#nav-nav ul a");


let recupStrong = document.querySelectorAll("strong")[1];

let clickBtnNoir = () => {
  recupNav.style.backgroundColor = "black";
  recupNav.style.color = "white";
  for (let i = 0; i < recupUl.length; i++) {
    recupUl[i].style.color = "white";
  }

  recupStrong.style.color = "white";
  document.querySelector(".scrol-blanc").style.backgroundColor = "black"
};

recupBtnNoir.addEventListener("click", clickBtnNoir);

let clickBtnBlanc = () => {
  recupNav.style.backgroundColor = "white";
  recupNav.style.color = "black";
  for (let i = 0; i < recupUl.length; i++) {
    recupUl[i].style.color = "black";
  }

  recupStrong.style.color = "black";
  document.querySelector(".scrol-blanc").style.backgroundColor = "white"
};

recupBtnBlanc.addEventListener("click", clickBtnBlanc);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Navbar Scroll
///////////////////////

let recuperationStrong2 = document.getElementById("empo");
console.log(recuperationStrong2);


 let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600

  ) {

    //Fixer La Navbar

    document.querySelector(".navbar").classList.add("fixed-top");
    recuperationStrong2.classList.remove("d-none")

    
  } else {
    document.querySelector(".navbar").classList.remove("fixed-top");
    recuperationStrong2.classList.add("d-none");
  }
};
 


/////////////////////////////////////////////////////////////////////////////////////////////////////


// Le Modal Pour Le Button Connexion
////////////////////////////////////////


// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

let clickConnexion = () => {
  modal.style.display = "block";
};

recupBtnConnexion.addEventListener("click", clickConnexion);

let clickCroix = () => {
  modal.style.display = "none";
};

span.addEventListener("click", clickCroix);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let recupIdConnexion = document.getElementById("btn-connexion");

let recupIdInscription = document.getElementById("btn-inscription");


let recup2EmeForm = document.getElementById("2eme-form");

let recupIdForm = document.getElementById("form");

let recupIdConnexion2 = document.getElementById("button-connexion");

let recupIdInscription2 = document.getElementById("button-inscription");

let clickSurInscription = () => {
  recupIdForm.style.display = "none";
  recup2EmeForm.style.display = "block";
};

recupIdInscription.addEventListener("click", clickSurInscription);

let retourConnexion = () => {
  recupIdForm.style.display = "block";
  recup2EmeForm.style.display = "none";
};

recupIdConnexion2.addEventListener("click", retourConnexion);


