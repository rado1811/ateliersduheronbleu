-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql7.freemysqlhosting.net
-- Généré le :  mer. 25 juil. 2018 à 09:16
-- Version du serveur :  5.5.58-0ubuntu0.14.04.1
-- Version de PHP :  7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sql7239441`
--

-- --------------------------------------------------------

--
-- Structure de la table `Ateliers`
--

CREATE TABLE `Ateliers` (
  `id_atelier` int(11) NOT NULL,
  `nom_atelier` varchar(200) DEFAULT NULL,
  `id_intervenant` int(11) NOT NULL,
  `nom_intervenant` varchar(70) NOT NULL,
  `debut` date DEFAULT NULL,
  `nb_participants` int(11) DEFAULT NULL,
  `prix` int(11) DEFAULT NULL,
  `contenu` varchar(1000) DEFAULT NULL,
  `formule` varchar(1000) DEFAULT NULL,
  `lieu` varchar(500) DEFAULT NULL,
  `photo_atelier` varchar(200) DEFAULT NULL,
  `place_disponibles` int(11) DEFAULT NULL,
  `programme` varchar(5000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Ateliers`
--

INSERT INTO `Ateliers` (`id_atelier`, `nom_atelier`, `id_intervenant`, `nom_intervenant`, `debut`, `nb_participants`, `prix`, `contenu`, `formule`, `lieu`, `photo_atelier`, `place_disponibles`, `programme`) VALUES
(197, 'Vacance d\'été: La trousse Santé/Bien-être au naturel', 0, 'Laurence Libert et Isabelle Jono', '2018-07-20', 10, 100, 'Quels sont les besoins essentiels de notre corps et de notre mental l’été ?\nréponse avec l’approche globale en Naturopathie et en Psychologie \nDécouvrir les aliments et activités physiques favorables à cette période \nde l’année\nAller vers une hygiène de vie globale : en commençant par une alimentation saine et adaptée à la saison « détoxifiante et vitalisante »\nSe débarrasser des surcharges  accumulées l’hiver et/ou poursuivre le travail de détoxination après le printemps\nApprendre à profiter pleinement du temps de « vacance » d’activités stressantes pour se reposer vraiment tout en « rechargeant les batteries » : Présentation d’exercices de relaxation, respiration et de méditation\nPrésenter quelques recettes et assiettes « Santé-Naturo » purs jus, purs fruits..\nEvoquer la place importante de l’eau dans notre équilibre santé/Bien être', 'Journée', 'Le Teich', 'file-1532507019495.jpg', 0, 'Des temps d’échanges autour du vécu et ressenti individuel\nUn travail d’écoute de nos besoins individuels essentiels\nUne « marche libre » sur le sentier du parc Ornithologique du Teich \nhttp://www.reserve-ornithologique-du-teich.com/\nDes moments de partage gratuits, simples et conviviaux (autour du petit déjeuner, d’une soupe et fruits de saison)\nDes « retours ou feed-back» après expériences pratiques'),
(198, 'Vivre aux rythmes des saisons', 0, 'Patrick Roumat et Isabelle Jono', '2018-06-18', 7, 100, 'Prendre conscience du lien indéfectible entre la Nature et la nature Humaine\nPercevoir la Santé et l’intelligence créatrice de la Nature en tout, partout\nMettre à profit le rythme naturel des saisons et notre dynamique psycho-physique (réflexion, ancrage, prise décision, recentrage, action, réalisation..)\nAccorder du temps au Silence et à l’écoute de la Nature\nSe laisser surprendre et percevoir par la Nature et ce qu’elle peut nous apporter de bon à chaque à chaque saison (vitamines mentales, ressourcement, inspiration, intériorisation, expansion, élimination physio..)\nObserver que la nature, par ses richesses se met à notre disposition\nPour demeurer dans la « Santé et le Bien à être »\nDécouvrir la médecine chinoise et sa lecture des cycles énergétiques en lien avec les organes du corps et les saisons\nS’accorder à l’élément Terre, Air, eau, Feu au diapason avec nos besoins biopsychologiques\n', 'Journée', 'Le Teich', 'file-1532507062057.jpg', 0, 'Des temps d’échanges autour du vécu individuel et des motivations\nUn travail corporel, d’observation, d’écoute, de pleine conscience de la Nature qui nous entoure et de notre propre Nature\nUne « Marche libre » sur le sentier du parc Ornithologique du Teich \nhttp://www.reserve-ornithologique-du-teich.com/\nDes moments de partage gratuits, simples et conviviaux (autour du petit déjeuner, d’une soupe ou fruits de saison)\nDes « retours ou feed-back» après exercices pratiques'),
(202, 'Cesser de faire, Réapprendre à être ', 0, 'Patrick Roumat et Isabelle Jono', '2018-08-04', 7, 100, '\n?	Des temps d’échanges autour du vécu individuel et des motivations\n?	Une « marche consciente » sur le sentier du parc Ornithologique du Teich \nhttp://www.reserve-ornithologique-du-teich.com/\n?	Des moments de partage gratuits, simples et conviviaux (autour du petit déjeuner, d’une soupe ou fruits de saison)\n?	Des « retours ou feed-back» après exercices pratiques (4 pratiques en sophrologie autour de la Détente - Relaxation et Respiration)\n', 'Journée', 'Le  Teich', 'file-1532509184983.jpg', 0, '?	Déposer nos valises remplies d’objets et d’objectifs pour apprécier l’instant\n?	« Céder nos liens » au Faire et se rendre sensible et présent à soi-même autrement\n?	S’affranchir des constructions mentales figées et des représentations « enfermantes » sur l’utile et le nécessaire\n?	Ouvrir notre espace/temps à une dimension plus vaste que son « quant à soi »\n?	Se laisser surprendre et percevoir par la Nature\n?	Accorder du temps au Silence\n?	Accepter de ne pas pouvoir, savoir ni vouloir\n?	Eclaircir notre chemin parsemé d’attentes insatiables et inappropriées par rapport à nos besoins réels\n?	Cesser de « courir après tout» et marcher sur le sentier de la vie avec la conscience qu’il n’y a « rien à perdre »\n?	Percevoir la Santé en tout, partout \n?	Se départir des « atours » et « ca-rapaces » pour s’installer dans la confiance\n?	Traverser les paroles mentales pour aller plus loin et se connecter à notre \nNature essentielle'),
(203, '« Bien dans son assiette » avec la Psycho-Naturopathie', 0, 'Laurence Libert et Isabelle Jono', '2018-06-09', 7, 100, '?	Des temps d’échanges autour du vécu individuel (accompagnés par les deux professionnelles de la santé au naturel)\n?	Des moments de partage gratuits, simples et conviviaux (autour du petit déjeuner, d’une soupes ou fruits de saison)\n?	Des outils de gestion du stress à intégrer et rapporter dans son quotidien\n?	Des « retours ou feed-back» après exercices pratiques et retours d’expériences\n?	Une promenade sur le sentier du parc Ornithologique du Teich ', 'Journée', 'Le  Teich', 'file-1532509274455.jpg', 0, '?	Faire le point sur notre hygiène de vie personnelle (alimentation, exercice physique, habitat, relation à la nature,..)\n?	Comprendre notre relation à la nourriture (compensation au stress, plaisir de la table, gourmandise, remplissage, valorisation, restrictions..) – Aspects psychologiques et psychosomatiques de notre relation à la nourriture\n?	Prendre la mesure de notre stress et de l’impact sur nos habitudes de vie\n?	Définir nos erreurs  quotidiennes (surcharges et carences)\n?	Rechercher l’équilibre et le bien-être au travers de l’alimentation\n?	Observer les « freins » et résistances personnelles au changement\n?	Découvrir les grands principes de la Naturopathie (notion de terrain et hygiénisme)\n?	Découvrir l’aliment/soin et la nourriture « vitalisante »\n?	Proposer la cure de Détoxination/Revitalisation comme premier pas vers un rééquilibrage personnel et pour permettre d’augmenter l’énergie vitale\n?	Aborder quelques outils de gestion du stress et des émotions \n');

-- --------------------------------------------------------

--
-- Structure de la table `Intervenants`
--

CREATE TABLE `Intervenants` (
  `id_intervenant` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `metier` varchar(1000) DEFAULT NULL,
  `parcours` varchar(5000) DEFAULT NULL,
  `citation` varchar(1000) DEFAULT NULL,
  `photo` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Intervenants`
--

INSERT INTO `Intervenants` (`id_intervenant`, `nom`, `prenom`, `tel`, `email`, `metier`, `parcours`, `citation`, `photo`) VALUES
(1, 'Jono', 'Isabelle', '06 28 01 06 59', 'wildphenix33@gmail.com', 'Psychologue - Thérapeute - Consultante', 'Quand elle n\'est pas contrainte, bridée, endommagée dans son expression simple et entière par des éléments internes ou externes: \nNos distorsions de pensées, nos traumatismes psycho-émotionnels non résolus, nos blessures physiques et psychiques non soignées..entretiennent voire déclenchent les défaillances de notre système de fonctionnement global (Mental, psychique, corporel, spirituel même). \n\n\"Retrouver la Santé\".. c\'est prendre un chemin, certes difficile parfois,mais déjà emprunté - qui se trouve au plus près de soi et du \"Tout\",dans l\'inconditionnel: le chemin de notre liberté à être, à penser, à ressentir, à exprimer ce qui est juste et bon pour soi et pour tous (sans contradictions, équivoques ou sacrifices dans la relation mais dans \"l\'Entièreté\").\n\nLe chemin pour y parvenir est propre à chacun: lâcher les peurs,les je \"dois-il-faut\", les a-priori, apprendre à ne plus faire pour faire, à se reposer, gérer le stress, s\'autoriser à, prendre sa place..enfin, tout ce qui peut aider à libérer un organisme, un \"être\" dans la contrainte et la restriction par rapport au \"souffle de vie\".\n\nLe thérapeute est formé pour \"prendre soin\", il est au service du \"vivant\" pour qu\'il se manifeste en chacun.Il créé les conditions optimales pour que ces forces vitales agissent quelque soit la technique qu\'il utilise. \n\nLa qualité de sa \"Présence\" auprès du patient (Ecoute, Neutralité, Bienveillance,Tranquillité, Respect) est déjà une condition optimale. \n\nAucune méthode thérapeutique n\'est meilleure qu\'une autre, vous seul pourriez dire si celle-ci ou celle-là vous convient - La \"mise en mouvement\" vers un mieux être, un soulagement, un équilibre, un apaisement.. que cette démarche choisie suscite à court, moyen ou long terme vous appartient.\n\nCe que je propose à mes patients va prendre en compte cette dimension globale de l\'être, quelque soit sa modalité d\'expression (verbale et/ou psycho-somatique).', 'La Santé est notre pleine potentialité - Elle est inhérente à la Vie.', 'file-1532071088029.jpg'),
(65, 'IANKOVSKY', 'Sophie ', '06 15 44 15 55', 'latelierdesoia@orange.fr', 'Céramiste depuis plus de 15 ans', 'Aider à l’ancrage et au lâcher prise : se relier à la Terre et à soi-même, faire surgir sa créativité dans une totale liberté d’expression de soi.', '', 'file-1532507918656.jpg'),
(66, 'Roumat', 'Patrick', '06', 'patrick@s', 'Sophrologue', '\n \n', '\"Les yeux de l\'éveil sont innombrables mais l\'éveil n\'a qu\'un œil \"\n                                                                               Michel Bandom.\n', 'file-1532508292558.jpg'),
(68, 'Collaudin', 'Carole', '06', 'carole@s', 'intervenante et professeur d\'art-plastique et visuel, d\'art-appliqué à l\'esthétique, et de Formatrice en Concept Artistique dans de nombreuses structures.', 'Diplômée de l\'école des Beaux-arts de Bordeaux en « Art et Communication »\nDiplômée de « Peinture Décor » à l\'Afpa de Caudéran\n\ndeux formations supplémentaire pour parfaire son parcours:\n           \n-« Médiateur Négociateur en Art »\n-« Marketing Artistique »\n', '\"La découverte d\' un art basé sur le corps, sur le sensible, sur une recherche créative est indispensable à la réalisation personnelles.  Le corps est à l’œuvre dans l’acte de créer pour toucher les cinq sens et les mémoires. Accueillons l’inattendu offert par le lâcher prise.\"', 'file-1532508933465.jpg'),
(69, 'Libert', 'Laurence', '07 62 13 08 28 ', 'lmvienaturo@yahoo.fr', 'Naturopathe à Bordeaux/ Conférencière/ Intervenante à l\'école naturopathie JCl/ Consultations et conférences au sein de l\'association LMVie/ animatrice de cours de yoga et relaxation/', '', '\"Ecoute -  accompagnement -  bienveillance -  prise de conscience -  hygiène de vie adaptée\"', 'file-1532508987575.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `Participants`
--

CREATE TABLE `Participants` (
  `id_participant` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `id_atelier` int(11) NOT NULL,
  `statut` varchar(50) NOT NULL DEFAULT 'Préréserver',
  `nom_ateliers` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Participants`
--

INSERT INTO `Participants` (`id_participant`, `nom`, `prenom`, `tel`, `email`, `id_atelier`, `statut`, `nom_ateliers`) VALUES
(11, 'ergh', 'Tibooo', '050505', 'thibaut.cointet@gmail.com', 197, 'validé', NULL),
(13, 'RAKOTOARIMANANA', 'rado', '0661514464', 'rado1811@gmail.com', 197, 'validé', NULL),
(14, 'collery', 'caroline', '06948484123', 'caro.collery@gmail.com', 198, 'validé', NULL),
(15, 'barboteau', 'amelie', '+33 6 98012824 (Domicile) ', 'amelie_barboteau@yahoo.fr', 198, 'annulé', NULL),
(16, 'barboteau', 'amelie', '+33 6 98012824 (Domicile) ', 'amelie_barboteau@yahoo.fr', 202, 'Préréserver', NULL),
(17, 'Sen', 'orhan', '0781860624', 'sen.orhan@ymail.com', 203, 'Préréserver', NULL),
(18, 'Sen', 'orhan', '0781860624', 'sen.orhan@ymail.com', 197, 'validé', NULL),
(19, 'RAKOTOARIMANANA', 'rado', '0661514464', 'rado1811@gmail.com', 203, 'Préréserver', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateurs2`
--

CREATE TABLE `Utilisateurs2` (
  `id` int(11) NOT NULL,
  `email` varchar(90) DEFAULT NULL,
  `password` varchar(90) DEFAULT NULL,
  `prenom` varchar(90) DEFAULT NULL,
  `nom` varchar(90) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Ateliers`
--
ALTER TABLE `Ateliers`
  ADD PRIMARY KEY (`id_atelier`),
  ADD KEY `nom_intervenant` (`nom_intervenant`),
  ADD KEY `nom_ateliers` (`nom_atelier`);

--
-- Index pour la table `Intervenants`
--
ALTER TABLE `Intervenants`
  ADD PRIMARY KEY (`id_intervenant`),
  ADD KEY `nom` (`nom`);

--
-- Index pour la table `Participants`
--
ALTER TABLE `Participants`
  ADD PRIMARY KEY (`id_participant`),
  ADD KEY `id_atelier` (`id_atelier`),
  ADD KEY `nom_ateliers` (`nom_ateliers`);

--
-- Index pour la table `Utilisateurs2`
--
ALTER TABLE `Utilisateurs2`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Ateliers`
--
ALTER TABLE `Ateliers`
  MODIFY `id_atelier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;
--
-- AUTO_INCREMENT pour la table `Intervenants`
--
ALTER TABLE `Intervenants`
  MODIFY `id_intervenant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT pour la table `Participants`
--
ALTER TABLE `Participants`
  MODIFY `id_participant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT pour la table `Utilisateurs2`
--
ALTER TABLE `Utilisateurs2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
