-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 22, 2020 at 11:56 AM
-- Server version: 8.0.22-0ubuntu0.20.04.3
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vjezba`
--

-- --------------------------------------------------------

--
-- Table structure for table `kolegiji`
--

CREATE TABLE `kolegiji` (
  `id_kolegija` int NOT NULL,
  `ime_kolegija` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=ucs2;

-- --------------------------------------------------------

--
-- Table structure for table `studenti`
--

CREATE TABLE `studenti` (
  `id_studenta` int NOT NULL,
  `ime` varchar(50) NOT NULL,
  `prezime` varchar(50) NOT NULL,
  `broj_indeksa` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `studenti_kolegij`
--

CREATE TABLE `studenti_kolegij` (
  `id_zapisa` int NOT NULL,
  `id_studenta` int NOT NULL,
  `id_kolegija` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kolegiji`
--
ALTER TABLE `kolegiji`
  ADD UNIQUE KEY `id_kolegija` (`id_kolegija`);

--
-- Indexes for table `studenti`
--
ALTER TABLE `studenti`
  ADD UNIQUE KEY `id_studenta` (`id_studenta`);

--
-- Indexes for table `studenti_kolegij`
--
ALTER TABLE `studenti_kolegij`
  ADD UNIQUE KEY `id_zapisa` (`id_zapisa`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kolegiji`
--
ALTER TABLE `kolegiji`
  MODIFY `id_kolegija` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `studenti`
--
ALTER TABLE `studenti`
  MODIFY `id_studenta` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `studenti_kolegij`
--
ALTER TABLE `studenti_kolegij`
  MODIFY `id_zapisa` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
