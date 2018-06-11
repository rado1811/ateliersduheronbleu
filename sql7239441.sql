-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql7.freemysqlhosting.net
-- Généré le :  lun. 04 juin 2018 à 13:16
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
  `nom` varchar(100) DEFAULT NULL,
  `id_intervenant` int(11) DEFAULT NULL,
  `debut` datetime DEFAULT NULL,
  `Nb_participants` int(11) DEFAULT NULL,
  `Prix` int(11) DEFAULT NULL,
  `contenu` varchar(1000) DEFAULT NULL,
  `formule` varchar(50) DEFAULT NULL,
  `lieu` varchar(50) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `Places_disponibles` int(11) DEFAULT NULL,
  `Programme` varchar(3000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Ateliers`
--

INSERT INTO `Ateliers` (`id_atelier`, `nom`, `id_intervenant`, `debut`, `Nb_participants`, `Prix`, `contenu`, `formule`, `lieu`, `photo`, `Places_disponibles`, `Programme`) VALUES
(4, 'bien etre', 1, '2018-05-30 00:00:00', 32, 200, 'hello', 'week end', 'teich', 'undefined', NULL, NULL),
(14, 'week end teich', NULL, '2018-05-31 00:00:00', 8, 150, 'parc', 'week end', 'pessac', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `Intervenants`
--

CREATE TABLE `Intervenants` (
  `id_intervenant` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `parcours` varchar(200) DEFAULT NULL,
  `photo` varchar(50) DEFAULT NULL,
  `metier` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Intervenants`
--

INSERT INTO `Intervenants` (`id_intervenant`, `nom`, `prenom`, `tel`, `email`, `parcours`, `photo`, `metier`) VALUES
(0, '', '', '', '', '', '', ''),
(1, '0', '664173338', '0', '0', 'chene', 'photo', 'dev'),
(2, 'dupuy', 'paul', '0664173338', 'toto@gmail.fr', 'etudiant', 'portrait', 'dev'),
(3, 'chene', 'frederic', '01338888', 'john@doe.fr', 'DEA', 'picto', 'dev');

-- --------------------------------------------------------

--
-- Structure de la table `Newsletter`
--

CREATE TABLE `Newsletter` (
  `id_newsletter` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `objet` varchar(50) DEFAULT NULL,
  `contenu` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Participants`
--

CREATE TABLE `Participants` (
  `id_participant` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `Participants`
--

INSERT INTO `Participants` (`id_participant`, `nom`, `prenom`, `tel`, `email`) VALUES
(1, 'undefined', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Structure de la table `Reservations`
--

CREATE TABLE `Reservations` (
  `id_reservation` int(11) NOT NULL,
  `id_atelier` int(11) DEFAULT NULL,
  `id_intervenant` int(11) DEFAULT NULL,
  `id_participant` int(11) DEFAULT NULL,
  `statut` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Ateliers`
--
ALTER TABLE `Ateliers`
  ADD PRIMARY KEY (`id_atelier`),
  ADD KEY `id_intervenant` (`id_intervenant`);

--
-- Index pour la table `Intervenants`
--
ALTER TABLE `Intervenants`
  ADD PRIMARY KEY (`id_intervenant`);

--
-- Index pour la table `Newsletter`
--
ALTER TABLE `Newsletter`
  ADD PRIMARY KEY (`id_newsletter`);

--
-- Index pour la table `Participants`
--
ALTER TABLE `Participants`
  ADD PRIMARY KEY (`id_participant`);

--
-- Index pour la table `Reservations`
--
ALTER TABLE `Reservations`
  ADD PRIMARY KEY (`id_reservation`),
  ADD KEY `id_atelier` (`id_atelier`),
  ADD KEY `id_intervenant` (`id_intervenant`),
  ADD KEY `id_participant` (`id_participant`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Ateliers`
--
ALTER TABLE `Ateliers`
  MODIFY `id_atelier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT pour la table `Newsletter`
--
ALTER TABLE `Newsletter`
  MODIFY `id_newsletter` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Participants`
--
ALTER TABLE `Participants`
  MODIFY `id_participant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT pour la table `Reservations`
--
ALTER TABLE `Reservations`
  MODIFY `id_reservation` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Ateliers`
--
ALTER TABLE `Ateliers`
  ADD CONSTRAINT `Ateliers_ibfk_1` FOREIGN KEY (`id_intervenant`) REFERENCES `Intervenants` (`id_intervenant`);

--
-- Contraintes pour la table `Reservations`
--
ALTER TABLE `Reservations`
  ADD CONSTRAINT `Reservations_ibfk_1` FOREIGN KEY (`id_atelier`) REFERENCES `Ateliers` (`id_atelier`),
  ADD CONSTRAINT `Reservations_ibfk_2` FOREIGN KEY (`id_intervenant`) REFERENCES `Intervenants` (`id_intervenant`),
  ADD CONSTRAINT `Reservations_ibfk_3` FOREIGN KEY (`id_participant`) REFERENCES `Participants` (`id_participant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
