// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("etnic");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function InformationSoc(nom) {
    modal.style.display = "block";
    var titreHeader = document.getElementById("titreHeader");
    var modalBody = document.getElementById("modal-body");
    var modalFooter = document.getElementById("modalFooter");

    if(nom == "ETNIC"){
        titreHeader.innerHTML = nom;
        modalBody.innerHTML = `Entreprise publique chargée de la fourniture de matériel
         et de services informatiques pour la Fédération Wallonie-Bruxelles,
          l’ETNIC rassemble divers professionnels IT et administratifs. La grande complémentarité de notre équipe
          de plus de 320 collaborateurs nous permet de proposer une offre de services de qualité et de contribuer 
          au développement d’un service public moderne et efficace.`
          modalFooter.innerHTML =`Lien: <a id="lienModal" href="https://www.etnic.be/" target="_blank">ETNIC</a>`
    }else if(nom == "Cognizant") {
      titreHeader.innerHTML = `Conférence ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/Conference_Cognizant.png" alt="conference" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "Efficy") {
      titreHeader.innerHTML = `Conférence ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/Conference_Efficy.png" alt="conference" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "Everis") {
      titreHeader.innerHTML = `Conférence ${nom}`;
      modalBody.innerHTML = `<img style="width: 90%; height: 90%;" src="public/img/Conference_Everis.png" alt="conference" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "ReactNative") {
      titreHeader.innerHTML = `Formation ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/formation_ReactNative.png" alt="formation" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "NodeJs") {
      titreHeader.innerHTML = `Formation ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/formation_NodeJS.png" alt="formation" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "Java") {
      titreHeader.innerHTML = `Formation ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/formation_Java.png" alt="formation" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "BotDiscord") {
      titreHeader.innerHTML = `Projet ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/bot_discord.png" alt="projet" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else{
      titreHeader.innerHTML = `Projet ${nom}`;
      modalBody.innerHTML = `Lien ver le répertoire <a href="https://github.com/Martinp-95/RushHour" target="_blank">Github</a>
      <img style="width: 100%; height: 100%;" src="public/img/rushhour_accueil.png" alt="projet" />
      <HR size=2 align=center width="100%"
      <img style="width: 100%; height: 100%;" src="public/img/rushhour_niveau1.png" alt="projet" />`;
      modalFooter.innerHTML = `Portfolio`;
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}