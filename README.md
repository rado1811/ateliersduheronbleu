<h1>Projet 3 - Les Ateliers du Héron Bleu</h1>

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
<p> Ouvrir le projet, se déplacer dans le dossier back et faire un "npm install" afin d'installer toutes les dépendances nécessaires.</p>
<p>Répétez l'opération pour le dossier front.</p>  
<p>Bien vérifier que "npm install" à bien été pris en compte côté Back et côté Front du projet.</p>

VISUALISATION DU PROJET 

<p>Une fois le projet installé, voici l'arborescence que vous devez avoir dans votre projet.</p>

```
bdx-0218-js-heronsbleus
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

```


DOCUMENTATION API :

Concernant les routes de la partie back, voici la description de l'API fournie :

*/INTERVENANT : 

        /intervenant - GET
        Affiche la liste de tous les intervenants

        /intervenant - POST
        Ajoute un nouvel intervenant

        /intervenant/:id - PUT
        Modifie les informations d'un intervenant

        /intervenant - DELETE
        Supprime un intervenant

*/ATELIERS : 

        /ateliers - GET
        Affiche la liste de tous les ateliers

        /ateliers - POST
        Ajoute un nouvel atelier

        /ateliers/:id - PUT
        Modifie les informations d'un atelier

        /ateliers - DELETE
        Supprime un atelier

*/PARTCIPANTS

        /participants - GET
        Affiche la liste de tous les participants

        /participants - POST
        Ajoute un nouveau participant

        /participants/:id/valider - PUT
        Modifie le status d'un participant : pré-réservation validée

        /participants/:id/annuler - PUT
        Modifie le status d'un participant : pré-réservation annulée

        /participants - DELETE
        Supprime un participant

*/PRERESERVATION

        /prereservation/particpants - GET
        Affiche les participants qui ont pré-réservés un(des) atelier(s)
        
*/NODEMAILER

        /nodemailer/admin - POST
        Envoie un email à l'administrateur afin de l'informer d'une pré-réservation sur un atelier
        
        /nodemailer/participant/:option - POST
        Envoie un email informant le participant de son status 
        Cet email confirme la pré-réservation
        Un deuxième est ensuite envoyé si cette dernière est confirmée ou annulée


EXECUTION DE LA DOCUMENTATION LOCALEMENT / UTILISATION

<p>1 - Ouvrir deux consoles (une pour le serveur côté Back, une autre pour le Front)</p>
<p>2 - Exécuter "npm start" dans chaque console afin de générer nos documents.</p>
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



