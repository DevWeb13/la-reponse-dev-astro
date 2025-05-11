---
title: cars-pat.fr
publishDate: 2023-10-02 00:00:00
img: /assets/cars-pat/mockup-Cars-Pat-Accueil.webp
img_small: /assets/cars-pat/mockup-Cars-Pat-Accueil-small.webp
img_alt: 'Interface du site web du garage automobile Cars Pat à Marseille, spécialisé en carrosserie et peinture'
description: |
    Application pour un garage automobile de carrosserie peinture à Marseille.
tags:
    - Design
    - Développement
    - Déploiement
    - Maintenance
    - Figma
    - Next.js
    - Typescript
    - Responsive
    - Nodemailer
    - Vercel
    - Client freelance
---

## Application pour un garage automobile de carrosserie peinture à Marseille.

---

> Un choc sur votre véhicule ?<br>
> Vous pouvez retrouver nos coordonnées sur notre <a href="https://www.cars-pat.fr/" target="_blank">site web</a> !<br>
> Envoyez nous des photos de votre véhicule endommagé pour obtenir un devis.

---

<p>Application développé de A à Z pour un garage automobile de carrosserie peinture à Marseille: </p>
<ul>
  <li>Receuil des besoins du client.</li>
  <li>Développement de la maquette responsive sur Figma.</li>
  <li>Développement de l'application responsive en Next.js avec Typescript.</li>
  <li>Déploiement de l'application sur Vercel.</li>
  <li>Maintenance de l'application.</li>
</ul>

<p>Permet de visualiser les services proposés, les coordonnées et les réalisations du garage.</p>
<p>Possibilité de demander un devis par mail via le formulaire, l'utilisateur peux envoyer jusqu'a 9 photos HD de son véhicule endommagé !</p>
<p>Le formulaire est sécurisé par reCAPTCHA et les mails sont envoyés via Nodemailer.</p>
<p>Aucun template utilisé pour style, utilisation de CSS module.</p>
<p>Galerie d'images dynamique classé par thème.</p>
<p>Intégration de l'API Google pour afficher les derniers avis du garage.</p> 
<p>Intégration des iframe Google Maps et Google Street pour afficher la localisation du garage.</p>
<p> Intégration de l'iframe Tik Tok pour afficher les dernières vidéos du garage.</p>
<p> Intégration des liens aux réseaux sociaux.</p>

### Section d'accueil

<a href="https://www.cars-pat.fr/#accueil" target="\_blank">
  <img src="/assets/cars-pat/mockup-Cars-Pat-Accueil.webp" alt="Page d'accueil"/>
</a>

-   Barre de tête contenant le mail et le téléphone de l'entreprise (cliquables).
-   En-tête contenant le nom de l'entreprise (cliquable) et la barre de navigation.
-   La barre de navigation permet de se déplacer sur chaque section du site.
-   En mode mobile, le bouton "burger" permet d'afficher la modale qui contient les liens de navigation.
-   Phrase d'accroche : Le nombre augmentera automatiquement chaque 1er avril (anniversaire de l'entreprise).
-   Les boutons d'appel à l'action redirigent vers les sections "Services" et "Contact".
-   Le panneau de services contient la liste des services ainsi que l'E-mail et les deux numéros de téléphone (cliquables).

### Section nos services

<a href="https://www.cars-pat.fr/#services" target="\_blank">
  <img src="/assets/cars-pat/mockup-Cars-Pat-Services.webp" alt="Section services"/>
</a>

-   Comprend 5 cartes cliquables présentant les services de l'entreprise.
-   Au clic sur une carte, elle se déploie et se positionne au milieu de l'écran. Si une autre carte est déjà ouverte, celle-ci se referme automatiquement.
-   Les titres des cartes passent de la couleur noir à orange lors du survol de la souris ou lorsqu'elles sont déployées.
-   En mode 'grand écran' les photos de chaque carte sont en noir et blanc. Celles-ci passent en couleur lors du survol de la souris ou lorsqu'elles sont déployées.
-   Chaque carte déployée contient un bouton de redirection vers la section "Contact" avec le formulaire.

### Section galerie photos

<a href="https://www.cars-pat.fr/#gallery" target="\_blank">
  <img src="/assets/cars-pat/mockup-Cars-Pat-Gallery.webp" alt="Section galerie"/>
</a>

-   Comprend des boutons de sélection pour les photos affichées.
-   La galerie passe d'une photo à l'autre toutes les 5 secondes.
-   Lecture/Pause: permet de mettre en pause le défilement des photos.
-   Précédent et suivant: pour afficher la photos précédente ou la suivante.
-   Bouton plein écran.
-   Miniatures des photos: pour afficher directement la photo choisie.
-   Deux boutons, Facebook et Tiktok, ouvrent une nouvelle fenêtre vers le compte du réseau social correspondant.
-   Précédent et suivant: pour afficher la photos précédente ou la suivante.
-   Intégration de l'iframe du compte TikTok.

### Section avis

<a href="https://www.cars-pat.fr/#avis" target="\_blank">
  <img src="/assets/cars-pat/mockup-Cars-Pat-Avis.webp" alt="Section avis"/>
</a>

-   Connectée à l'API Google, les avis et les notes sont mis à jour automatiquement.
-   Affichage de la note générale.
-   Affichage de la représentation graphique de la note sous forme d'étoiles.
-   Affichage du nombre total d'avis.
-   Affichage des 5 derniers avis.
-   Au clic sur le nom associé à un avis, redirection vers la page du compte.
-   Au clic sur "Voir" et "Poster", redirection vers la page d'avis.

### Section contact

<a href="https://www.cars-pat.fr/#contact" target="\_blank">
  <img src="/assets/cars-pat/mockup-Cars-Pat-Contact.webp" alt="Section contact"/>
</a>

-   Formulaire permettant d'envoyer un e-mail à l'adresse carrosse-pat@hotmail.fr.
-   Gestion des erreurs : Si un champ n'est pas correctement rempli lors de la soumission, son contour devient rouge et un message informe l'utilisateur de l'erreur.
-   Pour ajouter une photo, cliquez simplement sur le champ prévu à cet effet et choisissez la ou les photos désirées (maximum de 9 photos, taille max par photo : 32MB).
-   Drag & Drop: Vous pouvez également glisser-déposer la photo choisie dans le champ.
-   Un reCaptcha V2 protège contre les attaques automatisées, comme les soumissions de formulaires automatisées par des bots.
-   Panneau d'informations (cliquable).
-   Intégration de la frame de Google Maps.
-   Intégration de la frame Google Street.

#### Autres points

Ce projet a été l'occasion pour moi de pouvoir gérer un projet de A à Z, de la réception du besoin client à la maintenance de l'application en passant par la création du désign, le développement et le déploiement. <br>
J'ai pu également mettre en place des fonctionnalités que je n'avais pas encore eu l'occasion de faire, comme l'envoi de mail avec Nodemailer, l'intégration de l'API Google, l'intégration de l'iframe Tik Tok, l'intégration de l'iframe Google Street, l'intégration de l'iframe Google Maps et l'utilisation de reCapcha V2 pour sécuriser le formulaire de contact.
