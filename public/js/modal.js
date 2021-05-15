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
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/formation_ReactNative.PNG" alt="formation" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "NodeJs") {
      titreHeader.innerHTML = `Formation ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/formation_NodeJS.png" alt="formation" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else if(nom == "Java") {
      titreHeader.innerHTML = `Formation ${nom}`;
      modalBody.innerHTML = `<img style="width: 100%; height: 100%;" src="public/img/formation_Java.png" alt="formation" />`;
      modalFooter.innerHTML = `Portfolio`;
    }else{
        titreHeader.innerHTML = nom;
        modalBody.innerHTML = `Krones est une entreprise allemande productrice de lignes pour l'embouteillage 
        (soutirage) et le conditionnement d'aliments liquides et boissons, produits pharmaceutiques,
        cosmétiques et chimiques dans des bouteilles plastiques (en PET), en verre et en canettes.
        L'entreprise fabrique des machines d'étirage-soufflage pour la fabrication de bouteilles PET,
        des lignes d'embouteillage, des étiqueteuses, des laveuses de bouteilles, des pasteurisateurs,
        des dispositifs de contrôle, des machines à emballer et des palettiseurs. Ceci est complété par
        un système de flux de matières (logistique) et de processus pour la production de boissons 
        (brasseries, laiteries et siroperies). Par ailleurs, des projets complets de fabrication d'usine
        ont été réalisés dans l'industrie des boissons.
        Elle fait partie du MDAX.`
        modalFooter.innerHTML = `Lien: <a id="lienModal" href="https://www.krones.com/en/index.php" target="_blank">Krones Belgique</a>`
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