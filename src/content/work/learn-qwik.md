---
title: learn-qwik.com
publishDate: 2024-04-01 00:00:00
img: /assets/learn-qwik/mockup-Learn-Qwik-Accueil.png
img_alt: "Interface moderne de la plateforme d'apprentissage Learn Qwik, montrant la page d'accueil avec les chapitres et le système de progression"
description: |
    Plateforme pédagogique pour apprendre Qwik, avec suivi des chapitres, abonnements Stripe, envoi d'emails avec Resend, et interface soignée.
tags:
    - Qwik
    - Supabase
    - Stripe
    - Tailwind
    - Abonnement
    - Auth
    - Resend
    - Responsive
    - SEO
    - Déploiement
    - Vercel
---

## Plateforme pour apprendre Qwik pas à pas avec une UX fluide et un système d'abonnement intégré

---

> Learn Qwik est une application pensée pour les développeurs qui veulent apprendre le framework Qwik à travers des chapitres progressifs.
>
> 👉 <a href="https://www.learn-qwik.com/" target="_blank" rel="noopener noreferrer">Accéder à Learn Qwik</a>

---

### Fonctionnalités principales

<ul>
  <li>Contenu divisé en chapitres interactifs, avec progression sauvegardée dans Supabase.</li>
  <li>Système d'authentification sécurisé via Supabase + Magic Link.</li>
  <li>Envoi des emails (Magic Link) via Resend.</li>
  <li>Abonnement mensuel via Stripe pour soutenir le projet et accéder au contenu premium.</li>
  <li>Publicités supprimées pour les abonnés.</li>
  <li>Design responsive et propre avec Tailwind CSS.</li>
  <li>Déploiement continu via Vercel avec adaptateur Edge.</li>
</ul>

<p>L'objectif est de démocratiser l'apprentissage de Qwik en rendant la progression agréable, rapide et accessible.</p>

---

### Page d'accueil

<a href="https://www.learn-qwik.com" target="\_blank">
  <img src="/assets/learn-qwik/mockup-Learn-Qwik-Accueil.png" alt="Page d'accueil Learn Qwik"/>
</a>

-   Présentation claire de la plateforme et de ses objectifs.
-   Bouton "Resume Learning" pour reprendre la progression.
-   Liste visuelle des 16 chapitres, chacun avec une courte description.
-   Affichage du chapitre en cours.
-   Boutons de partage flottants (Facebook, X, LinkedIn, Pinterest, Email).
-   Présentation des fonctionnalités pédagogiques : progression sauvegardée, quiz intégrés, déploiement final.
-   Bloc "Looking to go deeper" avec recommandations de vidéos et guides externes.
-   Message personnalisé pour les utilisateurs abonnés (Premium).

---

### Page de connexion

<a href="https://www.learn-qwik.com/auth/login/" target="_blank">
  <img src="/assets/learn-qwik/mockup-learn-qwik-login.png" alt="Page de connexion Learn Qwik"/>
</a>

-   Connexion unifiée par email avec **Magic Link** (pas de mot de passe requis).
-   Fonctionne aussi bien pour l'inscription que pour la connexion d'un utilisateur existant.
-   Expérience simplifiée et sécurisée via Supabase Auth + Resend.
-   Interface responsive adaptée à tous les écrans (desktop, tablette, mobile).
-   Message explicite : "No password required. Auth done via email."
-   Processus fluide : l'utilisateur reçoit un lien de connexion dans sa boîte mail, qu'il suffit de cliquer pour accéder à son compte.

Cette approche réduit les frictions à l'entrée tout en maintenant un bon niveau de sécurité.

---

### Pages des chapitres

<a href="https://www.learn-qwik.com/learn/dashboard-app/" target="_blank">
  <img src="/assets/learn-qwik/mockup-Learn-Qwik-Chapitres.png" alt="Aperçu des pages de chapitres Learn Qwik"/>
</a>

Le parcours est orienté **projet Fullstack**, avec pour objectif de construire une application complète avec Qwik — de la configuration initiale au déploiement final.

Voici un aperçu du programme actuellement disponible :

1. **Introduction** – Apprendre à construire une application fullstack avec le cours gratuit Qwik App.
2. **Getting Started** – Créer une nouvelle application Qwik avec l'exemple "dashboard starter".
3. **CSS Styling** – Styliser son app avec Tailwind CSS et les modules CSS.
4. **Optimizing Fonts and Images** – Ajouter une image héro et une police personnalisée.
5. **Creating Layouts and Pages** – Gérer les layouts et créer de nouvelles pages.
6. **Navigating Between Pages** – Ajouter la navigation entre les pages de l'application.
7. **Setting Up Your Database** – Mettre en place une base de données et l'alimenter en données.
8. **Fetching Data** – Apprendre à récupérer des données dans Qwik.
9. **Optimizing Data Fetching** – Optimiser les requêtes de récupération des données.
10. **Streaming** – Mettre en place du streaming de données.
11. **Adding Search and Pagination** – Ajouter une barre de recherche et une pagination.
12. **Mutating Data** – Créer, mettre à jour et supprimer des données.

Chaque chapitre est pensé pour être court, concret et immédiatement applicable dans un projet réel.

---

### Page Releases

<a href="https://www.learn-qwik.com/releases/?page=1" target="_blank">
  <img src="/assets/learn-qwik/mockup-Learn-Qwik-Releases.png" alt="Aperçu de la page des releases Qwik"/>
</a>

Cette page liste automatiquement les dernières versions et mises à jour du framework Qwik.  
Chaque release est récupérée depuis GitHub et affichée sous forme de cartes claires avec lien vers le changelog et les sources.

-   Affichage paginé des dernières releases.
-   Détails des correctifs, évolutions et liens de téléchargement.
-   Vue simplifiée pour suivre les évolutions du framework en temps réel.

L'objectif est d'intégrer directement dans Learn Qwik les nouveautés majeures sans quitter la plateforme.

---

### Page Blog

<a href="https://www.learn-qwik.com/blog/" target="_blank">
  <img src="/assets/learn-qwik/mockup-Learn-Qwik-Blog.png" alt="Aperçu du blog Learn Qwik"/>
</a>

Cette section regroupe les actualités, tutoriels et réflexions autour de Qwik et de son écosystème.

-   Articles courts ou longs, publiés régulièrement.
-   Tutos pratiques, bonnes pratiques, analyses techniques et retours d'expérience.
-   Pensé pour accompagner les développeurs qui veulent aller plus loin avec Qwik.

#### Article actuel

**Qwik in 2025: Why It's the Future of Web Development**  
_Avril 2025 · 5 min de lecture_

> Qwik loads instantly, uses less JavaScript, and delivers better performance for users and the planet.

👉 <a href="https://www.learn-qwik.com/blog/qwik-2025" target="_blank">Lire l'article complet</a>

---

### Page Compte utilisateur

<a href="https://www.learn-qwik.com/account/" target="_blank">
  <img src="/assets/learn-qwik/mockup-Learn-Qwik-Account.png" alt="Aperçu de la page compte utilisateur Learn Qwik"/>
</a>

Cette page permet à chaque utilisateur de gérer son profil et son abonnement en toute autonomie.

-   Affichage du nom, de l'email et de l'avatar.
-   Suivi du **statut d'abonnement** avec date de renouvellement.
-   Message de remerciement personnalisé pour les abonnés + bouton de gestion via Stripe.
-   Affichage de la **liste des chapitres complétés**.
-   **Réinitialisation possible de la progression** en un clic.
-   Options pour modifier son profil, se déconnecter ou supprimer son compte.
-   Design responsive adapté à tous les écrans.

Cette page centralise toutes les informations personnelles et liées à l'apprentissage sur la plateforme.

---

#### Détails techniques

-   Utilisation de Qwik + Qwik City pour la structure.
-   Authentification via Supabase avec MagicLink.
-   Envoi des emails via Resend.
-   Webhooks Stripe pour gérer automatiquement les statuts d'abonnement.
-   Données stockées dans Supabase (progression, statut d'abonnement, etc.).
-   Utilisation de Tailwind CSS avec Prettier plugin pour le style.
-   Sécurisation du rendu Markdown avec `marked` + `sanitize-html`.
-   Coloration syntaxique via `shiki`.
-   Interface enrichie avec `@qwik-ui/headless`.
-   Optimisation SEO et responsive design.
-   Déploiement via Vercel avec adaptateur Edge.
-   Qualité de code assurée avec ESLint et Prettier.

---

#### Autres points

Ce projet m'a permis de développer une application pédagogique complète avec des fonctionnalités avancées, tout en explorant les possibilités de Qwik dans un contexte réel.  
J'ai conçu l'interface, structuré le parcours utilisateur, mis en place l'authentification via Magic Link, la gestion des abonnements Stripe, l'intégration des emails avec Resend, et le déploiement sur Vercel avec un adaptateur Edge.

J'ai aussi travaillé sur :

-   La gestion des webhooks Stripe côté serveur (abonnement, annulation, renouvellement).
-   La synchronisation de la progression utilisateur avec Supabase.
-   L'optimisation SEO et technique (Core Web Vitals, accessibilité, responsive).
-   L'automatisation de la récupération des données GitHub.
-   La structuration et publication d'articles dans un blog intégré.

<br>

Si vous recherchez un développeur Qwik ou souhaitez un accompagnement technique sur ce framework,  
👉 <a href="mailto:contact@lareponsedev.com">n'hésitez pas à me contacter</a>.

---

Ce projet est en constante évolution, avec des fonctionnalités premium à venir, un blog technique, et de nouveaux chapitres publiés régulièrement.
