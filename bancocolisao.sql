-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 03-Fev-2016 às 17:33
-- Versão do servidor: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador`
--

CREATE TABLE IF NOT EXISTS `jogador` (
  `ID_JOGADOR` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `apelido` varchar(255) NOT NULL,
  `numerocamisa` int(2) NOT NULL,
  `fotoperfil` varchar(255) NOT NULL,
  PRIMARY KEY (`ID_JOGADOR`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `jogador`
--

INSERT INTO `jogador` (`ID_JOGADOR`, `nome`, `apelido`, `numerocamisa`, `fotoperfil`) VALUES
(1, 'Bruno', 'Pedreiro', 17, 'daa3ec177ad2f4b1ff8e3ee0a3688db9.jpg'),
(2, 'Lennon', 'Padrin', 20, 'e157eb5b8bfde71c63f7ee5ef30dec2c.jpg'),
(3, 'Rafael', 'Jacunsso', 10, '3e89dbe2947cc97f0006b9065f36e51c.jpg'),
(4, 'Hectotr ', 'Cao', 8, 'dab8b2cadadd69cb74c11992253d11da.png'),
(5, 'Thiago', 'Batore', 55, '6914afda22168e1434156b79457dc894.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador_jogo`
--

CREATE TABLE IF NOT EXISTS `jogador_jogo` (
  `ID_JOGADOR` int(11) NOT NULL,
  `ID_PARTIDA` int(11) NOT NULL,
  PRIMARY KEY (`ID_JOGADOR`,`ID_PARTIDA`),
  KEY `FK_RELATIONSHIP_3` (`ID_PARTIDA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `jogador_jogo`
--

INSERT INTO `jogador_jogo` (`ID_JOGADOR`, `ID_PARTIDA`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(1, 2),
(2, 2),
(4, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `nomepaginas`
--

CREATE TABLE IF NOT EXISTS `nomepaginas` (
  `id_nomes_paginas` int(11) NOT NULL AUTO_INCREMENT,
  `chuteagol` varchar(255) NOT NULL,
  `gol` varchar(255) NOT NULL,
  `assitencia` varchar(255) NOT NULL,
  `faltascometidas` varchar(255) NOT NULL,
  `faltassofridas` varchar(255) NOT NULL,
  `desarmes` varchar(255) NOT NULL,
  `totalpartida` varchar(255) NOT NULL,
  PRIMARY KEY (`id_nomes_paginas`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Extraindo dados da tabela `nomepaginas`
--

INSERT INTO `nomepaginas` (`id_nomes_paginas`, `chuteagol`, `gol`, `assitencia`, `faltascometidas`, `faltassofridas`, `desarmes`, `totalpartida`) VALUES
(1, 'chuteagol', 'gol', 'assitencia', 'faltascometidas', 'faltassofridas', 'desarmes', 'totalpartida');

-- --------------------------------------------------------

--
-- Estrutura da tabela `partida`
--

CREATE TABLE IF NOT EXISTS `partida` (
  `ID_PARTIDA` int(11) NOT NULL,
  `DATA_PARTIDA` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID_PARTIDA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `partida`
--

INSERT INTO `partida` (`ID_PARTIDA`, `DATA_PARTIDA`) VALUES
(1, '20-11-2015'),
(2, '20-11-2015');

-- --------------------------------------------------------

--
-- Estrutura da tabela `registro`
--

CREATE TABLE IF NOT EXISTS `registro` (
  `REGISTRO` int(11) NOT NULL AUTO_INCREMENT,
  `ID_JOGADOR` int(11) DEFAULT NULL,
  `CHUTEAGOL` char(10) NOT NULL,
  `gol` int(10) NOT NULL,
  `assistencia` int(10) NOT NULL,
  `faltascometidas` int(10) NOT NULL,
  `faltassofridas` int(10) NOT NULL,
  `desarmes` int(10) NOT NULL,
  `datajogo` date NOT NULL,
  `quadro` int(2) NOT NULL,
  PRIMARY KEY (`REGISTRO`),
  KEY `FK_RELATIONSHIP_4` (`ID_JOGADOR`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Extraindo dados da tabela `registro`
--

INSERT INTO `registro` (`REGISTRO`, `ID_JOGADOR`, `CHUTEAGOL`, `gol`, `assistencia`, `faltascometidas`, `faltassofridas`, `desarmes`, `datajogo`, `quadro`) VALUES
(1, 1, '2', 2, 1, 2, 6, 1, '2016-01-25', 2),
(2, 2, '6', 4, 1, 4, 1, 4, '2016-01-25', 2),
(3, 1, '2', 1, 3, 1, 1, 2, '2016-01-26', 1),
(4, 2, '0', 0, 0, 0, 2, 1, '2016-01-26', 1),
(5, 3, '7', 6, 2, 1, 2, 1, '2016-01-26', 1),
(6, 4, '5', 4, 3, 2, 2, 3, '2016-01-26', 1),
(7, 2, '3', 1, 1, 2, 2, 2, '2016-02-03', 2),
(8, 3, '3', 2, 2, 2, 2, 4, '2016-02-03', 2),
(9, 5, '3', 2, 2, 2, 2, 4, '2016-02-03', 2);

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `jogador_jogo`
--
ALTER TABLE `jogador_jogo`
  ADD CONSTRAINT `FK_RELATIONSHIP_2` FOREIGN KEY (`ID_JOGADOR`) REFERENCES `jogador` (`ID_JOGADOR`),
  ADD CONSTRAINT `FK_RELATIONSHIP_3` FOREIGN KEY (`ID_PARTIDA`) REFERENCES `partida` (`ID_PARTIDA`);

--
-- Limitadores para a tabela `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `FK_RELATIONSHIP_4` FOREIGN KEY (`ID_JOGADOR`) REFERENCES `jogador` (`ID_JOGADOR`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
