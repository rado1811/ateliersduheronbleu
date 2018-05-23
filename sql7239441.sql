-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql7.freemysqlhosting.net
-- Généré le :  mer. 23 mai 2018 à 16:55
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
  `id_intervenant` int(11) DEFAULT NULL,
  `debut_atelier` date DEFAULT NULL,
  `fin_atelier` date DEFAULT NULL,
  `participants_atelier` int(11) NOT NULL,
  `prix_atelier` varchar(25) DEFAULT NULL,
  `contenu_atelier` varchar(25) DEFAULT NULL,
  `formule_atelier` varchar(100) DEFAULT NULL,
  `lieu_atelier` varchar(100) DEFAULT NULL,
  `photo_atelier` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Intervenants`
--

CREATE TABLE `Intervenants` (
  `id_intervenant` int(11) NOT NULL,
  `nom_intervenant` int(255) NOT NULL,
  `prenom_intervenant` int(255) NOT NULL,
  `tel_intervenant` int(255) NOT NULL,
  `email_intervenant` int(255) NOT NULL,
  `parcours_intervenant` varchar(255) DEFAULT NULL,
  `photo_intervenant` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Newsletter`
--

CREATE TABLE `Newsletter` (
  `id_newsletter` int(11) NOT NULL,
  `email_newsletter` varchar(200) DEFAULT NULL,
  `objet_newsletter` varchar(255) DEFAULT NULL,
  `contenu_newsletter` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Participants`
--

CREATE TABLE `Participants` (
  `id_participant` int(11) NOT NULL,
  `nom_participant` varchar(200) DEFAULT NULL,
  `prenom_participant` varchar(200) DEFAULT NULL,
  `tel_participant` varchar(200) DEFAULT NULL,
  `email_participant` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Reservations`
--

CREATE TABLE `Reservations` (
  `id_reservation` int(11) NOT NULL,
  `id_atelier` int(11) DEFAULT NULL,
  `id_intervenant` int(11) DEFAULT NULL,
  `id_participant` int(11) DEFAULT NULL,
  `status_reservation` varchar(50) DEFAULT NULL
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
  MODIFY `id_atelier` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Newsletter`
--
ALTER TABLE `Newsletter`
  MODIFY `id_newsletter` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `Participants`
--
ALTER TABLE `Participants`
  MODIFY `id_participant` int(11) NOT NULL AUTO_INCREMENT;
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
