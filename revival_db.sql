-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2023 at 09:16 PM
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
(52, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-15 02:51:49', '2023-08-15 02:51:49', 'Débito', 'Correo'),
(53, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:34:32', '2023-08-17 01:34:32', 'Débito', 'Correo'),
(54, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:36:51', '2023-08-17 01:36:51', 'Débito', 'Correo'),
(55, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:39:14', '2023-08-17 01:39:14', 'Débito', 'Cadete'),
(56, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:40:04', '2023-08-17 01:40:04', 'Crédito', 'Correo'),
(57, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:41:19', '2023-08-17 01:41:19', 'Débito', 'Correo'),
(58, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:45:37', '2023-08-17 01:45:37', 'Débito', 'Correo'),
(59, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:48:39', '2023-08-17 01:48:39', 'Crédito', 'Cadete'),
(60, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:55:41', '2023-08-17 01:55:41', 'Débito', 'Correo'),
(61, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:55:43', '2023-08-17 01:55:43', 'Débito', 'Correo'),
(62, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 3700, NULL, '2023-08-17 01:56:20', '2023-08-17 01:56:20', 'Efectivo', 'Cadete'),
(63, '8ddd72b5-3240-4a89-9aed-41809014bed8', 3000, NULL, '2023-08-17 16:32:51', '2023-08-17 16:32:51', 'Débito', 'Correo'),
(64, '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', 200300, NULL, '2023-08-21 23:26:02', '2023-08-21 23:26:02', 'Crédito', 'Correo'),
(65, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 202820, NULL, '2023-08-24 19:08:32', '2023-08-24 19:08:32', 'Débito', 'Andreani'),
(66, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 4140, NULL, '2023-08-27 17:47:11', '2023-08-27 17:47:11', 'Débito', 'Correo'),
(67, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 3040, NULL, '2023-08-29 19:36:15', '2023-08-29 19:36:15', 'Crédito', 'Andreani'),
(68, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 1320, NULL, '2023-08-30 20:33:21', '2023-08-30 20:33:21', 'Débito', 'Cadete'),
(69, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 1040, NULL, '2023-09-08 16:01:47', '2023-09-08 16:01:47', 'Efectivo', 'Correo'),
(70, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 1500, NULL, '2023-09-08 17:01:02', '2023-09-08 17:01:02', 'Efectivo', 'Correo'),
(71, '2dc7ba54-94a7-40df-a1e5-5e20150a62ab', 5856, NULL, '2023-09-08 17:09:18', '2023-09-08 17:09:18', 'Débito', 'Andreani'),
(72, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 5890, NULL, '2023-09-08 17:14:26', '2023-09-08 17:14:26', 'Efectivo', 'Andreani'),
(73, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 1320, NULL, '2023-09-08 17:15:45', '2023-09-08 17:15:45', 'Débito', 'Correo'),
(74, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 500, NULL, '2023-09-08 17:18:03', '2023-09-08 17:18:03', 'Débito', 'Cadete'),
(75, '8c12cf20-f80c-49d8-a95f-c020b352cd6e', 500, NULL, '2023-09-08 17:18:11', '2023-09-08 17:18:11', 'Crédito', 'Correo');

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
  `deletedAt` datetime DEFAULT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `genre`, `size`, `price`, `description`, `image`, `id_user`, `createdAt`, `updatedAt`, `deletedAt`, `category`) VALUES
(6, 'loneta', 'hombre', 'L', 321, 'pantaloneta deportiva', '/clothe1691422655398.jpeg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-07 15:37:35', '2023-08-07 15:37:35', '2023-08-11 20:34:33', 'marca'),
(8, 'sudadera negra', 'mujer', 'S', 450, 'comoda sudadera para el frio o verano', '/clothe1691700323888.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-10 20:45:23', '2023-08-10 20:45:23', '2023-08-11 20:34:36', 'adulto'),
(9, 'sudadera', 'unisex', 'L', 454, 'comoda sudadera para el frio o verano', '/clothe1691701082701.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-10 20:58:02', '2023-08-10 20:58:02', '2023-08-10 21:36:18', 'ninos'),
(10, 'buso caliente', 'mujer', 'S', 500, 'Buso perfecto para el invierno', '/clothe1691785875489.jpg', '97a51f72-0139-4244-9203-d134e3fb0fc1', '2023-08-11 20:31:15', '2023-08-11 20:31:15', NULL, 'deportiva'),
(11, 'Sudadera caliente', 'mujer', 'S', 700, 'Deliciosa sudadera para el invierno', '/clothe1691786047734.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-11 20:34:07', '2023-08-11 20:34:07', NULL, 'marca'),
(12, 'Chamarra de la nasa', 'unisex', 'M', 800, 'Chamarra para los fuertes frios del espacio', '/clothe1691786239876.jpg', '0b419a21-03d8-4e9f-a9ed-c14569cdd9a0', '2023-08-11 20:37:19', '2023-08-11 20:37:19', NULL, 'sombreros'),
(13, 'blalba', 'hombre', 'M', 520, 'comoda sudadera para el frio o verano', '1692737773267-nal.jpg', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-08-22 20:56:13', '2023-08-22 20:56:13', '2023-08-22 20:56:23', 'deportiva'),
(14, 'camisita boniat', 'hombre', 'M', 520, 'la mejor vblablbasdfsdf', '1692738380435-nal.jpg', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-08-22 20:56:54', '2023-08-22 21:06:20', NULL, 'marca'),
(15, 'asdfasdf', 'hombre', 'S', 159, 'asdfasdfasdfasdfsadfasdf', '1693859207652-1693858937702-clothe1691453288582.jpg', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-09-04 20:26:47', '2023-09-04 20:26:47', '2023-09-04 20:30:03', 'deportiva'),
(16, 'sdfsdf', 'mujer', 'M', 1590, 'asdfasdfasdfasdfasdfsadf', '1693859554538-1693859040632-clothe1691453288582.jpg', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-09-04 20:32:34', '2023-09-04 20:32:45', '2023-09-08 17:19:17', 'deportiva'),
(17, 'saco caliente', 'hombre', 'XL', 1263, 'comoda sudadera para el frio o verano', '1693859630646-1693859536398-1693859040632-clothe1691453288582.jpg', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-09-04 20:33:50', '2023-09-04 20:33:50', NULL, 'marca'),
(18, 'Gorra de ferxxo :D', 'unisex', 'L', 1200, 'La mejor gorra del mundo porque es de feid', '1694193463207-image_2023-09-08_121741533.png', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-09-08 17:17:43', '2023-09-08 17:18:42', NULL, 'sombreros'),
(19, 'blabla', 'unisex', 'M', 651, 'comoda sudadera para el frio o verano', '1694194040704-ferxxo.jpg', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-09-08 17:27:20', '2023-09-08 17:27:20', '2023-09-08 17:28:10', 'marca'),
(20, 'tieleas', 'unisex', 'M', 198, 'comoda sudadera para el frio o verano', '1694199912881-hacker.jpg', '8c12cf20-f80c-49d8-a95f-c020b352cd6e', '2023-09-08 18:53:47', '2023-09-08 19:05:12', NULL, 'deportiva');

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

--
-- Dumping data for table `products_cart`
--

INSERT INTO `products_cart` (`id`, `id_cart`, `id_product`, `quantity`, `deletedAt`, `updatedAt`, `createdAt`, `product_name`, `price`) VALUES
(1, 60, 11, 3, NULL, '2023-08-17 01:55:41', '2023-08-17 01:55:41', 'Sudadera caliente', 700.00),
(2, 60, 12, 2, NULL, '2023-08-17 01:55:41', '2023-08-17 01:55:41', 'Chamarra de la nasa', 800.00),
(3, 61, 11, 3, NULL, '2023-08-17 01:55:43', '2023-08-17 01:55:43', 'Sudadera caliente', 700.00),
(4, 61, 12, 2, NULL, '2023-08-17 01:55:43', '2023-08-17 01:55:43', 'Chamarra de la nasa', 800.00),
(5, 62, 11, 3, NULL, '2023-08-17 01:56:20', '2023-08-17 01:56:20', 'Sudadera caliente', 700.00),
(6, 62, 12, 2, NULL, '2023-08-17 01:56:20', '2023-08-17 01:56:20', 'Chamarra de la nasa', 800.00),
(7, 63, 12, 2, NULL, '2023-08-17 16:32:51', '2023-08-17 16:32:51', 'Chamarra de la nasa', 800.00),
(8, 63, 11, 2, NULL, '2023-08-17 16:32:51', '2023-08-17 16:32:51', 'Sudadera caliente', 700.00),
(9, 64, 12, 139, NULL, '2023-08-21 23:26:02', '2023-08-21 23:26:02', 'Chamarra de la nasa', 800.00),
(10, 64, 11, 98, NULL, '2023-08-21 23:26:02', '2023-08-21 23:26:02', 'Sudadera caliente', 700.00),
(11, 64, 10, 41, NULL, '2023-08-21 23:26:02', '2023-08-21 23:26:02', 'buso caliente', 500.00),
(12, 65, 12, 140, NULL, '2023-08-24 19:08:32', '2023-08-24 19:08:32', 'Chamarra de la nasa', 800.00),
(13, 65, 11, 99, NULL, '2023-08-24 19:08:32', '2023-08-24 19:08:32', 'Sudadera caliente', 700.00),
(14, 65, 10, 42, NULL, '2023-08-24 19:08:32', '2023-08-24 19:08:32', 'buso caliente', 500.00),
(15, 65, 14, 1, NULL, '2023-08-24 19:08:32', '2023-08-24 19:08:32', 'camisita boniat', 520.00),
(16, 66, 10, 2, NULL, '2023-08-27 17:47:11', '2023-08-27 17:47:11', 'buso caliente', 500.00),
(17, 66, 14, 2, NULL, '2023-08-27 17:47:11', '2023-08-27 17:47:11', 'camisita boniat', 520.00),
(18, 66, 11, 3, NULL, '2023-08-27 17:47:11', '2023-08-27 17:47:11', 'Sudadera caliente', 700.00),
(19, 67, 14, 2, NULL, '2023-08-29 19:36:15', '2023-08-29 19:36:15', 'camisita boniat', 520.00),
(20, 67, 11, 1, NULL, '2023-08-29 19:36:15', '2023-08-29 19:36:15', 'Sudadera caliente', 700.00),
(21, 67, 10, 1, NULL, '2023-08-29 19:36:15', '2023-08-29 19:36:15', 'buso caliente', 500.00),
(22, 67, 12, 1, NULL, '2023-08-29 19:36:15', '2023-08-29 19:36:15', 'Chamarra de la nasa', 800.00),
(23, 68, 14, 1, NULL, '2023-08-30 20:33:21', '2023-08-30 20:33:21', 'camisita boniat', 520.00),
(24, 68, 12, 1, NULL, '2023-08-30 20:33:21', '2023-08-30 20:33:21', 'Chamarra de la nasa', 800.00),
(25, 69, 14, 2, NULL, '2023-09-08 16:01:47', '2023-09-08 16:01:47', 'camisita boniat', 520.00),
(26, 70, 11, 1, NULL, '2023-09-08 17:01:02', '2023-09-08 17:01:02', 'Sudadera caliente', 700.00),
(27, 70, 12, 1, NULL, '2023-09-08 17:01:02', '2023-09-08 17:01:02', 'Chamarra de la nasa', 800.00),
(28, 71, 11, 1, NULL, '2023-09-08 17:09:18', '2023-09-08 17:09:18', 'Sudadera caliente', 700.00),
(29, 71, 16, 1, NULL, '2023-09-08 17:09:18', '2023-09-08 17:09:18', 'sdfsdf', 1590.00),
(30, 71, 17, 2, NULL, '2023-09-08 17:09:18', '2023-09-08 17:09:18', 'saco caliente', 1263.00),
(31, 71, 14, 2, NULL, '2023-09-08 17:09:18', '2023-09-08 17:09:18', 'camisita boniat', 520.00),
(32, 72, 10, 7, NULL, '2023-09-08 17:14:26', '2023-09-08 17:14:26', 'buso caliente', 500.00),
(33, 72, 12, 1, NULL, '2023-09-08 17:14:26', '2023-09-08 17:14:26', 'Chamarra de la nasa', 800.00),
(34, 72, 16, 1, NULL, '2023-09-08 17:14:26', '2023-09-08 17:14:26', 'sdfsdf', 1590.00),
(35, 73, 12, 1, NULL, '2023-09-08 17:15:45', '2023-09-08 17:15:45', 'Chamarra de la nasa', 800.00),
(36, 73, 14, 1, NULL, '2023-09-08 17:15:45', '2023-09-08 17:15:45', 'camisita boniat', 520.00),
(37, 74, 18, 1, NULL, '2023-09-08 17:18:03', '2023-09-08 17:18:03', 'Gorra de ferxxo', 500.00),
(38, 75, 18, 1, NULL, '2023-09-08 17:18:11', '2023-09-08 17:18:11', 'Gorra de ferxxo', 500.00);

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
('20230811224936-add-payment-and-shipping-to-cart.js'),
('20230822203222-product-category.js');

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
('2dc7ba54-94a7-40df-a1e5-5e20150a62ab', 'nachito', 'nachito@gmail.com', 'nochiviris', '$2a$12$poX88HJzcj3sRaQ4WRtFkOmCreglfMjgyrA6eSYTHAlJ0EsT9qNOO', 'User', '1694192806039-ferxxo.jpg', '2023-09-08 17:06:46', '2023-09-08 17:06:46', NULL),
('57a0d6fc-3b4f-4394-a784-03f933d3f8ec', 'Luisita', 'luisa@gmail.com', 'Luisita', '$2a$12$SkZfEgxfzD2OXIEgB97RSeNzkuh9MVK2fCtCR4FNzTsX.exxlT4rm', 'Admin', '1691439300280-niÃ±axd2.png', '2023-08-07 20:15:00', '2023-08-10 21:42:25', NULL),
('57d524ca-12d2-4834-8964-fb5e92b80507', 'test', 'test123@gmail.com', 'test', '$2a$12$gvOAaca7BZF8303aujQfl.7jhj5cDkdiK5Z/ZIJ2RGPwHtL87Hl9a', 'User', '1691796193281-risas.jpg', '2023-08-11 23:23:13', '2023-08-11 23:23:13', '2023-09-08 17:10:23'),
('6e85d4b7-f6f0-470f-a93a-bb4bcb3d5df2', 'test', 'tert@fdg.vom', 'dfgf', '$2a$12$Mn9xNKXdnrR/pWpIXslLfel6Tnsufjtmk4VomoDDmh7QTZuIhsttm', 'User', '1692395414078-revival_db.sql', '2023-08-18 21:50:14', '2023-08-18 21:50:14', '2023-08-18 22:39:58'),
('8c12cf20-f80c-49d8-a95f-c020b352cd6e', 'Juanca', 'milozap37@gmail.com', 'El milo', '$2a$12$X2rRXE7zuqT9lj0xnTRnje9TIIBZDgtP0RcptVzsNs4/s8oITh6L6', 'Admin', '1692737264633-foto_camilo.jpg', '2023-08-22 20:47:44', '2023-09-08 17:21:54', NULL),
('8ddd72b5-3240-4a89-9aed-41809014bed8', 'Marlon', 'marlon@gmail.com', 'marlon', '$2a$12$Ghw/EJi9Erk3iWm/GN/o7.RKac01dIKYAoCmvTlDeV0915v59tAsC', 'User', '1692289933096-1691785819563-risas.jpg', '2023-08-17 16:32:13', '2023-08-17 16:32:13', NULL),
('97a51f72-0139-4244-9203-d134e3fb0fc1', 'El risas', 'joker@gmail.com', 'joker', '$2a$12$dxyq2mO0gTyO6wRPHelTAeSmmwoVPPEG0927.9HVR.BfJ5Kg32iLC', 'User', '1691785819563-risas.jpg', '2023-08-11 20:30:19', '2023-08-11 20:30:19', NULL),
('b2bf250a-2ca4-4af6-b796-a481f9cb771b', 'Francisco Gaetano', 'adriana@gmail.com', 'adriana', '$2a$12$0kiKdVcBKkjab.rPtEW3Yu/BvDsV9vPRQpnJzJ0wB7oZAWT96xFc6', 'User', '1691521941614-marge.png', '2023-08-08 19:12:22', '2023-08-08 19:12:22', '2023-08-10 21:37:06'),
('e6c8cbd7-ca96-47de-b2ea-33a4cc85bdb8', 'Francisco Gaetano', 'luisa@gmail.comsdf', 'test', '$2a$12$aBbaPUEkoOSVbefwWjXpP.lU5M5Keubz/jR3Djc6q7gaulSBsGiKC', 'User', '1692396829322-camilo_serio.jpeg', '2023-08-18 22:13:49', '2023-08-18 22:13:49', NULL),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `products_cart`
--
ALTER TABLE `products_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

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
