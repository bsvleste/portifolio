-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 18-Jul-2017 às 21:28
-- Versão do servidor: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `colisao`
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
(0, 'edvan', 'peixinho', 14, ''),
(1, 'Bruno', 'Pedreiro', 17, 'daa3ec177ad2f4b1ff8e3ee0a3688db9.jpg'),
(2, 'Lennon', 'Padrin', 20, 'e157eb5b8bfde71c63f7ee5ef30dec2c.jpg'),
(3, 'Rafael', 'Jacunsso', 10, '3e89dbe2947cc97f0006b9065f36e51c.jpg'),
(4, 'Hectotr ', 'Cao', 8, 'dab8b2cadadd69cb74c11992253d11da.png'),
(5, 'Thiago', 'Batore', 55, '6914afda22168e1434156b79457dc894.jpg'),
(6, 'nicola', 'nick', 78, ''),
(7, 'edvan', 'peixinho', 14, ''),
(9, 'marcao', 'negao', 98, ''),
(10, 'barboza', 'ba', 10, ''),
(11, 'Manoel', 'Abcaxi', 25, '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador_jogo`
--

CREATE TABLE `jogador_jogo` (
  `ID_JOGADOR` int(11) NOT NULL,
  `ID_PARTIDA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `jogador_jogo`
--

INSERT INTO `jogador_jogo` (`ID_JOGADOR`, `ID_PARTIDA`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(4, 1),
(4, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensalidade`
--

CREATE TABLE `mensalidade` (
  `id_mensalidade` int(11) NOT NULL,
  `id` int(10) DEFAULT NULL,
  `id_mes` int(11) NOT NULL,
  `valor` double NOT NULL,
  `status` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `mensalidade`
--

INSERT INTO `mensalidade` (`id_mensalidade`, `id`, `id_mes`, `valor`, `status`) VALUES
(53, 1, 1, 50, 'PAGO'),
(54, 2, 1, 80, 'PAGO'),
(55, 3, 1, 50, 'PAGO'),
(56, 4, 1, 50, 'PAGO'),
(57, 2, 2, 80, 'PAGO'),
(58, 1, 2, 160, 'PENDENTE'),
(59, 3, 2, 100, 'PAGO'),
(60, 4, 2, 70, 'PAGO'),
(77, 1, 3, 50, 'PAGO'),
(78, 2, 3, 50, 'PAGO'),
(79, 3, 3, 80, 'PAGO'),
(80, 4, 3, 0, 'PAGO'),
(145, 1, 4, 0, 'PENDENTE'),
(146, 2, 4, 0, 'PENDENTE'),
(147, 3, 4, 0, 'PENDENTE'),
(148, 4, 4, 0, 'PENDENTE'),
(165, 1, 5, 0, 'PAGO'),
(166, 2, 5, 0, 'PENDENTE'),
(167, 3, 5, 0, 'PENDENTE'),
(168, 4, 5, 0, 'PAGO'),
(169, 1, 6, 0, 'PENDENTE'),
(185, 2, 6, 0, 'PENDENTE'),
(186, 3, 6, 0, 'PENDENTE'),
(187, 4, 6, 0, 'PENDENTE'),
(206, 1, 7, 50, 'PENDENTE'),
(207, 2, 7, 0, 'PENDENTE'),
(208, 3, 7, 0, 'PENDENTE'),
(209, 4, 7, 0, 'PENDENTE'),
(242, 3, 8, 90, 'PAGO'),
(243, 1, 8, 0, 'PAGO'),
(244, 2, 8, 15, 'PAGO'),
(245, 4, 8, 0, 'PAGO'),
(246, 4, 10, 98, 'PENDENTE'),
(247, 1, 10, 0, 'PENDENTE'),
(248, 2, 10, 0, 'PENDENTE'),
(249, 3, 10, 0, 'PENDENTE'),
(250, 3, 11, 10, 'PENDENTE'),
(251, 1, 11, 0, 'PENDENTE'),
(252, 2, 11, 0, 'PENDENTE'),
(253, 4, 11, 0, 'PENDENTE'),
(254, 1, 12, 0, 'PENDENTE'),
(255, 2, 12, 0, 'PENDENTE'),
(256, 3, 12, 0, 'PENDENTE'),
(257, 4, 12, 0, 'PENDENTE'),
(258, 1, 9, 0, 'PAGO'),
(259, 2, 9, 15, 'PAGO'),
(260, 3, 9, 33, 'PAGO'),
(261, 4, 9, 0, 'PAGO');

-- --------------------------------------------------------

--
-- Estrutura da tabela `mes`
--

CREATE TABLE `mes` (
  `id_mes` int(11) NOT NULL,
  `descricao_mes` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `mes`
--

INSERT INTO `mes` (`id_mes`, `descricao_mes`) VALUES
(1, 'Janeiro'),
(2, 'Fevereiro'),
(3, 'Março'),
(4, 'Abril'),
(5, 'Maio'),
(6, 'Junho'),
(7, 'Julho'),
(8, 'Agosto'),
(9, 'Setembro'),
(10, 'Outubro'),
(11, 'Novembro'),
(12, 'Dezembro');

-- --------------------------------------------------------

--
-- Estrutura da tabela `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1);

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
(1, '20-11-2015'),
(2, '20-11-2015');

-- --------------------------------------------------------

--
-- Estrutura da tabela `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
(9, 5, '3', 2, 2, 2, 2, 4, '2016-02-03', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'bruno', 'bvaleiro@gmail.com', '$2y$10$V1yDH5zo3cmQOpxdscOZgOPxehlWxCqkfjDiI6UbkltimcUUT6vs6', 'IyOtynmUSvTTV2iUiEqeq6kRyPMnxx3hYo1sCyf0UJqLyOqW8kIZF5SGwJtb', '2016-12-12 14:46:25', '2017-02-14 19:44:13'),
(2, 'Lennon', 'lennonpadrin@gmail.com', '$2y$10$ZtCvY7IeAjuMIeipswpo0.3P/MgokGkIhoOhWRIPl4NpTcuT.9P8G', NULL, '2016-12-19 15:09:04', '2016-12-19 15:09:04'),
(3, 'Thiago', 'thiago@cabecaao.gmail.com', '$2y$10$txKp77LT2Tqwrw3uOyZdRu497shGptkGDVI5/8xw42iPmA3zDz9bK', NULL, '2017-01-30 20:38:53', '2017-01-30 20:38:53'),
(4, 'Nicola', 'nick@gmail.com', '$2y$10$HGVc4iK0s10lEa6rP8m1geFokNpZj2okCiXywe3EmpPWgWiJpOIN.', NULL, '2017-01-30 20:44:31', '2017-01-30 20:44:31');

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
-- Indexes for table `mensalidade`
--
ALTER TABLE `mensalidade`
  ADD PRIMARY KEY (`id_mensalidade`),
  ADD KEY `id_user` (`id`),
  ADD KEY `id_user_2` (`id`),
  ADD KEY `mensalidade` (`id_mes`);

--
-- Indexes for table `mes`
--
ALTER TABLE `mes`
  ADD PRIMARY KEY (`id_mes`);

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
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`REGISTRO`),
  ADD KEY `FK_RELATIONSHIP_4` (`ID_JOGADOR`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mensalidade`
--
ALTER TABLE `mensalidade`
  MODIFY `id_mensalidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=262;
--
-- AUTO_INCREMENT for table `mes`
--
ALTER TABLE `mes`
  MODIFY `id_mes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `nomepaginas`
--
ALTER TABLE `nomepaginas`
  MODIFY `id_nomes_paginas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `registro`
--
ALTER TABLE `registro`
  MODIFY `REGISTRO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
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
-- Limitadores para a tabela `mensalidade`
--
ALTER TABLE `mensalidade`
  ADD CONSTRAINT `mensalidade_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mensalidade_ibfk_2` FOREIGN KEY (`id_mes`) REFERENCES `mes` (`id_mes`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `registro`
--
ALTER TABLE `registro`
  ADD CONSTRAINT `FK_RELATIONSHIP_4` FOREIGN KEY (`ID_JOGADOR`) REFERENCES `jogador` (`ID_JOGADOR`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
