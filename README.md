<h1>- Les Ateliers du Héron Bleu -</h1>

Réalisation d'un site pour une psychologue souhaitant lancer une activité d'ateliers bien être.

Cahier des charges:
- site au design sobre et accueillant
- Présentation du concept, des ateliers et des intervenants
- possibilité de pré-réserver en ligne
- administration du contenu

TABLE DES MATIERES : 

  - Démarrage rapide / Installation du projet
  - Visualisation du projet (arborescence du projet) / Documentation API
  - Exécution de la documentation localement / Utilisation
  - Créateurs du projet
  
DEMARRAGE RAPIDE / INSTALLATION DU PROJET 

Cloner le repo : git clone https://github.com/WildCodeSchool/bdx-0218-js-heronsbleus.git
<p> Ouvrir le projet, se déplacer dans le dossier front et faire un "npm install" afin d'installer toutes les dépendances nécessaires.</p>
<p>Faire la même chose dans le dossier back.</p>


VISUALISATION DU PROJET 

<p>Une fois le projet installé, voici l'arborescence que vous devez avoir dans votre projet.</p>

```
bdx-0218-js-heronsbleus

└── front
     ├── node_modules
     ├── public
     ├── src
     ├── eslintrc
     ├── package-lock.json
└── package.json
└── _yo-rc.json
└── gitignore
└── package-lock.json
└── README.md
└── sql7239441.sql
└── back
     ├── bin
     ├── config
     ├── node_modules
     ├── public
     ├── routes
     ├── tmp
     ├── babelrc
     ├── eslintrc
     ├── app.js
     ├── package-lock.json
     └── package.json

```


DOCUMENTATION API :

Concernant les routes de la partie back, voici la description de l'API fournie :

*/INTERVENANT : 

        /api/intervenant - GET
        Affiche la liste de tous les intervenants

        /api/intervenant - POST
        Ajoute un nouvel intervenant

        /api/intervenant/:id - PUT
        Modifie les informations d'un intervenant

        /api/intervenant - DELETE
        Supprime un intervenant

*/ATELIERS : 

        /api/ateliers - GET
        Affiche la liste de tous les ateliers

        /api/ateliers - POST
        Ajoute un nouvel atelier

        /api/ateliers/:id - PUT
        Modifie les informations d'un atelier

        /api/ateliers - DELETE
        Supprime un atelier

*/PARTCIPANTS

        /api/participants - GET
        Affiche la liste de tous les participants

        /api/participants - POST
        Ajoute un nouveau participant

        /api/participants/:id/valider - PUT
        Modifie le statut d'un participant : réservation validée

        /api/participants/:id/annuler - PUT
        Modifie le statut d'un participant : réservation annulée

        /api/participants - DELETE
        Supprime un participant

*/PRERESERVATION

        /api/prereservation/particpants - GET
        Affiche les participants qui ont pré-réservés un(des) atelier(s)
        
*/NODEMAILER

        /nodemailer/admin - POST
        Envoie un email à l'administrateur afin de l'informer d'une pré-réservation sur un atelier
        
        /nodemailer/participant/:option - POST
        Envoie un email informant le participant de son statut 
        Cet email confirme la pré-réservation
        Un deuxième est ensuite envoyé si cette dernière est confirmée ou annulée

*/AUTH

        /auth/auth/signup - POST 
        Enregistrement d'un compte Administrateur 

        /auth/auth/signin - POST
        Authentification de l'administrateur


EXECUTION DE LA DOCUMENTATION LOCALEMENT / UTILISATION

<p>1 - Ouvrir un terminal au niveau de /front</p>
<p>2 - Exécuter "npm start".</p>
<p>2 - Faire la même procédure au niveau de /back.</p>
<p>Vous pouvez alors voir votre connexion à la base de donnée et surveiller que le serveur se connecte bien.</p>
<p>3 - Ouvrez http://localhost:3000 dans votre navigateur.</p>

CREATEURS : 

Rado Rakotoarimanana

    https://github.com/rado1811

Thibaut Cointet

    https://github.com/Nabi1

Macodou Dieng

    https://github.com/soner8

Caroline Collery

    https://github.com/CaroDev33

Orhan Sen

    https://github.com/DadOrhan

Amélie Barboteau

    https://github.com/AmyLeeB


BONNE VISITE 

BUGS:
- Responsivité page Ateliers
- compteur du dashboard avec le nombre de places réservées ne se met pas à jour automatique lors de la modification des statuts des participants
- AtelierDetail.jsx => Photo par défaut sur la page Ateliers ne s'affiche pas
- Console BACK => GET /images/undefined 500 0.699 ms - 1429
TypeError: Cannot set property 'message' of undefined
at C:/Users/RADO1/Desktop/NEW Heron Bleu/bdx-0218-js-heronsbleus/back/app.js:54:3
- console FRONT => GET http://localhost:3000/images/undefined 500 (Internal Server Error)
- Delete d'un atelier / d'un intervenant ne supprime pas les photos correspondantes dans front/public/images
- Modif et Ajout ateliers / intervenants => statut 200 aléatoire mais modifs toujours prises en compte

FONCTIONS MANQUANTES
- Securisation des routes Front et Back
- Envoi de mail de rappel 10 jours avant l'atelierdoc
- récupérer le mot de passe administrateur



