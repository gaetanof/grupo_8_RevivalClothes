-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2023 at 10:29 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `revival_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `id_user`, `total`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 0, NULL, '2023-08-07 14:59:58', '2023-08-07 14:59:58'),
(3, '57a0d6fc-3b4f-4394-a784-03f933d3f8ec', 0, NULL, '2023-08-07 20:15:00', '2023-08-07 20:15:00'),
(4, 'f01d96b7-b3f9-44e3-b59b-d64216f60366', 0, NULL, '2023-08-08 01:08:58', '2023-08-08 01:08:58'),
(5, 'b2bf250a-2ca4-4af6-b796-a481f9cb771b', 0, NULL, '2023-08-08 19:12:22', '2023-08-08 19:12:22');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id_user` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `genre`, `size`, `price`, `description`, `image`, `id_user`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(6, 'loneta', 'hombre', 'L', 321, 'pantaloneta deportiva', '/clothe1691422655398.jpeg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-07 15:37:35', '2023-08-07 15:37:35', NULL),
(7, 'remera boca', 'unisex', 'M', 10, 'remera boca 2022/23', '/clothe1691523075771.jpeg', 'f01d96b7-b3f9-44e3-b59b-d64216f60366', '2023-08-08 19:31:15', '2023-08-08 19:31:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products_cart`
--

CREATE TABLE `products_cart` (
  `id` int(11) NOT NULL,
  `id_cart` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `product_name` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('0020230715203919-timestamps_true.js'),
('0020230721152919-timestamps_true.js'),
('20230715202446-soft_delete.js'),
('20230721152336-soft_delete.js'),
('20230808184447-update-product-carts.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'User',
  `image` varchar(255) NOT NULL DEFAULT 'default_user.jpg',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `user_name`, `password`, `type`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 'Juan Camilo', 'camilo@gmail.com', 'Juanca', '$2a$12$hjFIItdqF9e9eyh0ZOUfH.FWiWNVwNiDStvS.g3c1.9YMOUmVRMgy', 'Admin', '1691420398444-foto_camilo.jpg', '2023-08-07 14:59:58', '2023-08-07 14:59:58', NULL),
('57a0d6fc-3b4f-4394-a784-03f933d3f8ec', 'Luisita', 'luisa@gmail.com', 'Luisita', '$2a$12$SkZfEgxfzD2OXIEgB97RSeNzkuh9MVK2fCtCR4FNzTsX.exxlT4rm', 'User', '1691439300280-niÃ±axd2.png', '2023-08-07 20:15:00', '2023-08-07 20:15:00', NULL),
('b2bf250a-2ca4-4af6-b796-a481f9cb771b', 'Francisco Gaetano', 'adriana@gmail.com', 'adriana', '$2a$12$0kiKdVcBKkjab.rPtEW3Yu/BvDsV9vPRQpnJzJ0wB7oZAWT96xFc6', 'User', '1691521941614-marge.png', '2023-08-08 19:12:22', '2023-08-08 19:12:22', NULL),
('f01d96b7-b3f9-44e3-b59b-d64216f60366', 'Francisco Gaetano', 'fran@gmail.com', 'fran', '$2a$12$UvWCoKF3TPVk6b1B3PD3PO2DxHfbsQmujWPm3lq3nCdjOEfsbwm1a', 'User', '1691456937946-foto perfil.png', '2023-08-08 01:08:58', '2023-08-08 01:08:58', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `products_cart`
--
ALTER TABLE `products_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_id_cart_products` (`id_cart`),
  ADD KEY `product_id_product_cart` (`id_product`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products_cart`
--
ALTER TABLE `products_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `user_id_user_cart` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `user_id_user_product` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `products_cart`
--
ALTER TABLE `products_cart`
  ADD CONSTRAINT `cart_id_cart_products` FOREIGN KEY (`id_cart`) REFERENCES `carts` (`id`),
  ADD CONSTRAINT `product_id_product_cart` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
