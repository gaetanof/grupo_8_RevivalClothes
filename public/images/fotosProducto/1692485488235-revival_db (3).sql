-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2023 at 11:30 PM
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
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `paymentMethod` varchar(100) NOT NULL,
  `shippingMethod` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `id_user`, `total`, `deletedAt`, `createdAt`, `updatedAt`, `paymentMethod`, `shippingMethod`) VALUES
(50, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 2900, NULL, '2023-08-13 22:01:10', '2023-08-13 22:01:10', 'Débito', 'Cadete'),
(51, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-14 16:50:13', '2023-08-14 16:50:13', 'Crédito', 'Correo'),
(52, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-15 02:51:49', '2023-08-15 02:51:49', 'Débito', 'Correo');

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
(6, 'loneta', 'hombre', 'L', 321, 'pantaloneta deportiva', '/clothe1691422655398.jpeg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-07 15:37:35', '2023-08-07 15:37:35', '2023-08-11 20:34:33'),
(8, 'sudadera negra', 'mujer', 'S', 450, 'comoda sudadera para el frio o verano', '/clothe1691700323888.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-10 20:45:23', '2023-08-10 20:45:23', '2023-08-11 20:34:36'),
(9, 'sudadera', 'unisex', 'L', 454, 'comoda sudadera para el frio o verano', '/clothe1691701082701.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-10 20:58:02', '2023-08-10 20:58:02', '2023-08-10 21:36:18'),
(10, 'buso caliente', 'mujer', 'S', 500, 'Buso perfecto para el invierno', '/clothe1691785875489.jpg', '97a51f72-0139-4244-9203-d134e3fb0fc1', '2023-08-11 20:31:15', '2023-08-11 20:31:15', NULL),
(11, 'Sudadera caliente', 'mujer', 'S', 700, 'Deliciosa sudadera para el invierno', '/clothe1691786047734.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-11 20:34:07', '2023-08-11 20:34:07', NULL),
(12, 'Chamarra de la nasa', 'unisex', 'M', 800, 'Chamarra para los fuertes frios del espacio', '/clothe1691786239876.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-11 20:37:19', '2023-08-11 20:37:19', NULL);

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
('20230808184447-update-product-carts.js'),
('20230811224936-add-payment-and-shipping-to-cart.js');

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
('0031b630-2521-4b40-bc16-2cff79254c33', 'test', 'test12@gmail.com', 'test', '$2a$12$lirYwS3MB9vCW.Zkd1LVkOhddFrZA0RLrtC75XhOJL6d2NM3g3DtG', 'User', '1691796423402-risas.jpg', '2023-08-11 23:27:03', '2023-08-11 23:27:03', NULL),
('0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 'Juan Camilo', 'camilo@gmail.com', 'Juanca', '$2a$12$hjFIItdqF9e9eyh0ZOUfH.FWiWNVwNiDStvS.g3c1.9YMOUmVRMgy', 'Admin', '1691420398444-foto_camilo.jpg', '2023-08-07 14:59:58', '2023-08-07 14:59:58', NULL),
('57a0d6fc-3b4f-4394-a784-03f933d3f8ec', 'Luisita', 'luisa@gmail.com', 'Luisita', '$2a$12$SkZfEgxfzD2OXIEgB97RSeNzkuh9MVK2fCtCR4FNzTsX.exxlT4rm', 'Admin', '1691439300280-niÃ±axd2.png', '2023-08-07 20:15:00', '2023-08-10 21:42:25', NULL),
('57d524ca-12d2-4834-8964-fb5e92b80507', 'test', 'test123@gmail.com', 'test', '$2a$12$gvOAaca7BZF8303aujQfl.7jhj5cDkdiK5Z/ZIJ2RGPwHtL87Hl9a', 'User', '1691796193281-risas.jpg', '2023-08-11 23:23:13', '2023-08-11 23:23:13', NULL),
('97a51f72-0139-4244-9203-d134e3fb0fc1', 'El risas', 'joker@gmail.com', 'joker', '$2a$12$dxyq2mO0gTyO6wRPHelTAeSmmwoVPPEG0927.9HVR.BfJ5Kg32iLC', 'User', '1691785819563-risas.jpg', '2023-08-11 20:30:19', '2023-08-11 20:30:19', NULL),
('b2bf250a-2ca4-4af6-b796-a481f9cb771b', 'Francisco Gaetano', 'adriana@gmail.com', 'adriana', '$2a$12$0kiKdVcBKkjab.rPtEW3Yu/BvDsV9vPRQpnJzJ0wB7oZAWT96xFc6', 'User', '1691521941614-marge.png', '2023-08-08 19:12:22', '2023-08-08 19:12:22', '2023-08-10 21:37:06'),
('eafa68c8-a615-423b-b1d1-2353597bb61d', 'Diablo', 'infierno@gmail.com', 'satanas123', '$2a$12$ALOVFo6Z7x7c1obrkPj0DOmKCYvt3eBZ4EuNid7qn7vJcO.Z9NDIG', 'User', '1691703527658-diablo.jpg', '2023-08-10 21:38:47', '2023-08-10 21:39:23', '2023-08-10 21:39:52'),
('f01d96b7-b3f9-44e3-b59b-d64216f60366', 'Francisco Gaetano', 'fran@gmail.com', 'fran', '$2a$12$UvWCoKF3TPVk6b1B3PD3PO2DxHfbsQmujWPm3lq3nCdjOEfsbwm1a', 'Admin', '1691456937946-foto perfil.png', '2023-08-08 01:08:58', '2023-08-10 21:42:01', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
