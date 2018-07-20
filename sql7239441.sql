-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql7.freemysqlhosting.net
-- Généré le :  mar. 17 juil. 2018 à 07:57
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
(1, 'Jono', 'Isabelle', '06 28 01 06 59', 'wildphenix33@gmail.com', 'Psychologue - Thérapeute - Consultante', 'Quand elle n\'est pas contrainte, bridée, endommagée dans son expression simple et entière par des éléments internes ou externes: \nNos distorsions de pensées, nos traumatismes psycho-émotionnels non résolus, nos blessures physiques et psychiques non soignées..entretiennent voire déclenchent les défaillances de notre système de fonctionnement global (Mental, psychique, corporel, spirituel même). \n\n\"Retrouver la Santé\".. c\'est prendre un chemin, certes difficile parfois,mais déjà emprunté - qui se trouve au plus près de soi et du \"Tout\",dans l\'inconditionnel: le chemin de notre liberté à être, à penser, à ressentir, à exprimer ce qui est juste et bon pour soi et pour tous (sans contradictions, équivoques ou sacrifices dans la relation mais dans \"l\'Entièreté\").\n\nLe chemin pour y parvenir est propre à chacun: lâcher les peurs,les je \"dois-il-faut\", les a-priori, apprendre à ne plus faire pour faire, à se reposer, gérer le stress, s\'autoriser à, prendre sa place..enfin, tout ce qui peut aider à libérer un organisme, un \"être\" dans la contrainte et la restriction par rapport au \"souffle de vie\".\n\nLe thérapeute est formé pour \"prendre soin\", il est au service du \"vivant\" pour qu\'il se manifeste en chacun.Il créé les conditions optimales pour que ces forces vitales agissent quelque soit la technique qu\'il utilise. \n\nLa qualité de sa \"Présence\" auprès du patient (Ecoute, Neutralité, Bienveillance,Tranquillité, Respect) est déjà une condition optimale. \n\nAucune méthode thérapeutique n\'est meilleure qu\'une autre, vous seul pourriez dire si celle-ci ou celle-là vous convient - La \"mise en mouvement\" vers un mieux être, un soulagement, un équilibre, un apaisement.. que cette démarche choisie suscite à court, moyen ou long terme vous appartient.\n\nCe que je propose à mes patients va prendre en compte cette dimension globale de l\'être, quelque soit sa modalité d\'expression (verbale et/ou psycho-somatique).', 'La Santé est notre pleine potentialité - Elle est inhérente à la Vie.', 'isabelle.jpg');

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
  MODIFY `id_atelier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=188;
--
-- AUTO_INCREMENT pour la table `Intervenants`
--
ALTER TABLE `Intervenants`
  MODIFY `id_intervenant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT pour la table `Participants`
--
ALTER TABLE `Participants`
  MODIFY `id_participant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;
--
-- AUTO_INCREMENT pour la table `Utilisateurs2`
--
ALTER TABLE `Utilisateurs2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
