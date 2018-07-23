Projet 3 - Les Ateliers du Héron Bleu

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
Ouvrir le projet, se déplacer dans le dossier back et faire un "npm install" afin d'installer toutes les dépendances nécessaires. 
Répétez l'opération pour le dossier front.  
Bien vérifier que "npm install" à bien été prit en compte côté Back et côté Front du projet.

VISUALISATION DU PROJET 

Une fois le projet installé, voici l'arborescence que vous devez avoir dans votre projet. 

bdx-0218-js-heronsbleus
└── back
       ├── bin
       ├── config
       ├── node_modules
       ├── puclic
       ├── routes
       ├── tmp
       ├── babelrc
       ├── eslintrc
       ├── app.js
       ├── package-lock.json
       └── package.json

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


DOCUMENTATION API :

Concernant les routes de la partie back, voici la description de l'API fournie :
Voici un exemple pour les routes des intervenants, mais nous retrouvons la même API sur 
 /ateliers
                                                                                        /participants
                                                                                        /prereservation
                                                                                        /nodemailer

 /intervenant - GET
Affiche la liste de toutes les intervenants

 /intervenant - POST
Ajoute un nouvel intervenant

 /intervenant/:id - PUT
Modifie les informations d'un intervenant

 /intervenant - DELETE
Supprime un intervenant

EXECUTION DE LA DOCUMENTATION LOCALEMENT / UTILISATION

1 - Ouvrir deux consoles (une pour le serveur côté Back, une autre pour le Front)
2 - Exécuter "npm start" dans chaque console afin de générer nos documents. 
Vous pouvez alors voir votre connexion à la base de donnée et surveiller que le serveur se connecte bien.
3 - Ouvrez http://localhost:3000 dans votre navigateur.

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


