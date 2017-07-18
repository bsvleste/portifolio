-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 18-Jul-2017 às 21:30
-- Versão do servidor: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador`
--

CREATE TABLE `jogador` (
  `ID_JOGADOR` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `apelido` varchar(255) NOT NULL,
  `numerocamisa` int(2) NOT NULL,
  `fotoperfil` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `jogador`
--

INSERT INTO `jogador` (`ID_JOGADOR`, `nome`, `apelido`, `numerocamisa`, `fotoperfil`) VALUES
(1, 'Bruno', 'Pedreiro', 17, 'daa3ec177ad2f4b1ff8e3ee0a3688db9.jpg'),
(2, 'Lennon', 'Padrin', 20, 'e157eb5b8bfde71c63f7ee5ef30dec2c.jpg'),
(3, 'Rafael', 'Jacunsso', 10, '3e89dbe2947cc97f0006b9065f36e51c.jpg'),
(4, 'Hectotr ', 'Cao', 8, 'dab8b2cadadd69cb74c11992253d11da.png'),
(5, 'Thiago', 'Batore', 55, '6914afda22168e1434156b79457dc894.jpg'),
(11, 'Edvan Peixinho', 'Peixe', 19, ''),
(12, 'Marina', 'Linda', 10, ''),
(13, 'Reis', 'Dama', 24, ''),
(14, 'Tuti', 'Alemao', 33, '10/09/2017 15:00'),
(15, 'Tva', 'tva', 75, '2017-07-15T15:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador_jogo`
--

CREATE TABLE `jogador_jogo` (
  `ID_JOGADOR` int(11) NOT NULL,
  `ID_PARTIDA` int(11) NOT NULL,
  `Bid` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `jogador_jogo`
--

INSERT INTO `jogador_jogo` (`ID_JOGADOR`, `ID_PARTIDA`, `Bid`) VALUES
(1, 1, 's'),
(1, 2, 's'),
(2, 1, 's'),
(2, 2, 's'),
(3, 1, 's'),
(4, 1, 'n'),
(4, 2, 'n');

-- --------------------------------------------------------

--
-- Estrutura da tabela `nomepaginas`
--

CREATE TABLE `nomepaginas` (
  `id_nomes_paginas` int(11) NOT NULL,
  `chuteagol` varchar(255) NOT NULL,
  `gol` varchar(255) NOT NULL,
  `assitencia` varchar(255) NOT NULL,
  `faltascometidas` varchar(255) NOT NULL,
  `faltassofridas` varchar(255) NOT NULL,
  `desarmes` varchar(255) NOT NULL,
  `totalpartida` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `nomepaginas`
--

INSERT INTO `nomepaginas` (`id_nomes_paginas`, `chuteagol`, `gol`, `assitencia`, `faltascometidas`, `faltassofridas`, `desarmes`, `totalpartida`) VALUES
(1, 'chuteagol', 'gol', 'assitencia', 'faltascometidas', 'faltassofridas', 'desarmes', 'totalpartida');

-- --------------------------------------------------------

--
-- Estrutura da tabela `partida`
--

CREATE TABLE `partida` (
  `ID_PARTIDA` int(11) NOT NULL,
  `DATA_PARTIDA` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `partida`
--

INSERT INTO `partida` (`ID_PARTIDA`, `DATA_PARTIDA`) VALUES
(1, '0000-00-00'),
(2, '0000-00-00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `registro`
--

CREATE TABLE `registro` (
  `REGISTRO` int(11) NOT NULL,
  `ID_JOGADOR` int(11) DEFAULT NULL,
  `CHUTEAGOL` char(10) NOT NULL,
  `gol` int(10) NOT NULL,
  `assistencia` int(10) NOT NULL,
  `faltascometidas` int(10) NOT NULL,
  `faltassofridas` int(10) NOT NULL,
  `desarmes` int(10) NOT NULL,
  `datajogo` date NOT NULL,
  `quadro` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(9, 5, '3', 2, 2, 2, 2, 4, '2016-02-03', 2),
(10, 1, '3', 4, 3, 2, 3, 2, '2017-06-20', 2),
(11, 2, '3', 1, 3, 2, 1, 4, '2017-06-20', 2),
(12, 3, '1', 4, 3, 1, 2, 4, '2017-06-20', 2),
(13, 4, '2', 1, 0, 1, 0, 1, '2017-06-20', 2),
(14, 5, '2', 2, 1, 1, 1, 1, '2017-06-20', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jogador`
--
ALTER TABLE `jogador`
  ADD PRIMARY KEY (`ID_JOGADOR`);

--
-- Indexes for table `jogador_jogo`
--
ALTER TABLE `jogador_jogo`
  ADD PRIMARY KEY (`ID_JOGADOR`,`ID_PARTIDA`),
  ADD KEY `FK_RELATIONSHIP_3` (`ID_PARTIDA`);

--
-- Indexes for table `nomepaginas`
--
ALTER TABLE `nomepaginas`
  ADD PRIMARY KEY (`id_nomes_paginas`);

--
-- Indexes for table `partida`
--
ALTER TABLE `partida`
  ADD PRIMARY KEY (`ID_PARTIDA`);

--
-- Indexes for table `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`REGISTRO`),
  ADD KEY `FK_RELATIONSHIP_4` (`ID_JOGADOR`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nomepaginas`
--
ALTER TABLE `nomepaginas`
  MODIFY `id_nomes_paginas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `registro`
--
ALTER TABLE `registro`
  MODIFY `REGISTRO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
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
