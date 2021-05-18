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
        modalBody.innerHTML = `
        <div class="div-categoryContainer">
        <img class="picture-left" src="public/img/logo_etnic.png" alt="etnic" />
        <div class="paragraph-right">
        <p>L’ETNIC, l’Entreprise des Technologies Numériques de l’Information et de la Communication, 
        est le partenaire informatique de la Fédération Wallonie-Bruxelles. Elle y assure la conception,
        le développement, la gestion et le suivi des solutions informatiques pour la Fédération Wallonie-Bruxelles
        via différents services : le développement de nouvelles applications, le support informatique via le service desk,
        la fourniture de l’équipement informatique, la gestion du réseau et de l’hébergement ainsi que la protection des données.</p>
        <p>
        Le stage peut être décrit comme étant une mission de développeur amené à travailler sur un module spécifique au sein
        d’une interface d’envoi de communications.
        La mission prioritaire lors du stage est la mise en place de l’écran d’accueil et des communications de type message.
        Mon rôle est de développer la partie frontend, les services et le backend de ce module. A l’issue du stage, 
        l’application doit être reprise en interne par les équipes de l’Etnic.</p>
        <p>Les types de tâches à réaliser lors du stage furent
        l'analyse des exigences fonctionnelles du module afin de réaliser le diagramme « Domain Model »,
        la réalisation du « Use Case » du module,
        la prise de connaissance du backlog  réalisé par le Product Owner,
        l'elaboration du Planning Poker en utilisant la suite de Fibonacci,
        la réalisation des différents Sprint Agile (6) élaborés selon la méthode Scrum,
        les présentations finales à la fin de chaque sprint (Sprint Review),
        les corrections en fonction du feed-back reçu lors des présentations.
        </p>
        <p>Lors de cette éxpérience, j'ai pu mettre en pratique la méthode Agile Scrum.</p>
        </div></div>`

          modalFooter.innerHTML =`Lien: <a id="lienModal" href="https://www.etnic.be/" target="_blank">ETNIC</a>`
    }else if(nom == "Krones Belgique"){
      titreHeader.innerHTML = nom;
      modalBody.innerHTML = `
      <div class="div-categoryContainer">
      <img class="picture-left" src="public/img/krones.jpg" alt="krones" />
      <div class="paragraph-right">
      <p>Krones est une entreprise allemande productrice de lignes pour l'embouteillage 
      (soutirage) et le conditionnement d'aliments liquides et boissons, produits pharmaceutiques,
      cosmétiques et chimiques dans des bouteilles plastiques (en PET), en verre et en canettes.</p>
      <p>Les machines Krones travaillent avec des automates Siemens.</p>

      <p>L’objectif du stage consistait, après une période d'observation et de découverte du processus d'installation d'une 
      ligne d'embouteillage au sein de la brasserie de Chimay,à réaliser le suivi de mise en service d’une étiqueteuse
      au sein de la brasserie Lefebvre. Le contenu de la mission consistait à pouvoir mettre en service
      et paramétrer cette étiqueteuse, ainsi qu' intervenir avec efficacité sur cette machine  de résoudre les problèmes qui 
      s’y présenteraient.
      J'y ai également réalisé un code en ladder afin de détecter si le bouchon le mécanique avait bien été refermé.
      J'ai pu m'y former à la compréhension d'un processus industriel, l’approche analytique et le travail en autonomie.</p>
      <p> J'ai réalisé mon TFE sur ce sujet.</p>
      </div></div>`
      modalFooter.innerHTML = `Lien: <a id="lienModal" href="https://www.krones.com/en/index.php" target="_blank">Krones Belgique</a>`
    }
    else if(nom == "Cognizant") {
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
      modalBody.innerHTML = `Lien vers le répertoire <a href="https://github.com/Martinp-95/RushHour" target="_blank">Github</a>
      <hr size=2 align=center width="100%">
      <div class="row">
  <div class="column">
  <img style="width: 100%; height: 100%;" src="public/img/rushhour_accueil.png" 
  onclick="openModal();currentSlide(1)" class="hover-shadow" alt="projet" />
  </div>
  <div class="column">
    <img style="width: 100%; height: 100%;" src="public/img/rushhour_niveau1.png" alt="projet"
     onclick="openModal();currentSlide(2)" class="hover-shadow"/>
  </div>
  </div>
      <hr size=2 align=center width="100%">`
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