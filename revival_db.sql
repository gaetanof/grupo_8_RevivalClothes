-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2023 at 10:05 PM
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
(80, '45f482b8-cd3f-4d32-86e9-588ca5b61bbf', 700, NULL, '2023-09-13 02:45:44', '2023-09-13 02:45:44', 'Débito', 'Correo'),
(81, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 15800, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Crédito', 'Andreani'),
(82, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 2900, NULL, '2023-09-13 15:19:42', '2023-09-13 15:19:42', 'Débito', 'Andreani'),
(83, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 2200, NULL, '2023-09-13 15:30:51', '2023-09-13 15:30:51', 'Crédito', 'Correo'),
(84, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 2900, NULL, '2023-09-13 15:57:51', '2023-09-13 15:57:51', 'Crédito', 'Cadete'),
(85, '529750d8-837b-492b-8c09-bf452467765c', 21900, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Débito', 'Andreani'),
(86, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 9700, NULL, '2023-09-13 18:28:29', '2023-09-13 18:28:29', 'Efectivo', 'Correo'),
(87, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 7380, NULL, '2023-09-13 18:50:37', '2023-09-13 18:50:37', 'Débito', 'DHL'),
(88, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 8880, NULL, '2023-09-13 19:48:15', '2023-09-13 19:48:15', 'Débito', 'Correo'),
(89, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 11620, NULL, '2023-09-13 19:50:30', '2023-09-13 19:50:30', 'Débito', 'Correo'),
(90, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 9400, NULL, '2023-09-13 19:50:53', '2023-09-13 19:50:53', 'Crédito', 'Correo'),
(91, 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 1400, NULL, '2023-09-13 19:53:46', '2023-09-13 19:53:46', 'Crédito', 'Correo');

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
(21, 'Varsity Jacket', 'hombre', 'L', 1200, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694572243626-image_2023-09-12_213042866.png', 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', '2023-09-13 02:30:43', '2023-09-13 02:31:52', NULL, 'deportiva'),
(22, 'Harajuku Jackets', 'mujer', 'XL', 1000, 'aLorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694572539345-image_2023-09-12_213537273.png', 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', '2023-09-13 02:35:39', '2023-09-13 02:35:59', NULL, 'adulto'),
(23, 'Fashion Cartoon', 'unisex', 'L', 1500, 'fLorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694572629894-image_2023-09-12_213708720.png', 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', '2023-09-13 02:37:09', '2023-09-13 02:37:09', NULL, 'marca'),
(24, 'Gorra de ferxxo', 'hombre', 'M', 700, 'aLorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694572852075-image_2023-09-12_214043135.png', 'd1f6d5e0-7709-4683-903a-d1ba3d8f33e0', '2023-09-13 02:40:52', '2023-09-13 18:53:09', NULL, 'sombreros'),
(25, 'Gestriftes shirt', 'mujer', 'L', 2200, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694573112933-image_2023-09-12_214507638.png', '45f482b8-cd3f-4d32-86e9-588ca5b61bbf', '2023-09-13 02:45:12', '2023-09-13 02:45:12', NULL, 'marca'),
(26, 'Butterfly Groove', 'mujer', 'XL', 2500, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694573295144-image_2023-09-12_214809379.png', '45f482b8-cd3f-4d32-86e9-588ca5b61bbf', '2023-09-13 02:48:15', '2023-09-13 02:48:15', NULL, 'marca'),
(27, 'Gorrax ferxxo', 'unisex', 'S', 3000, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694573451417-image_2023-09-12_215045196.png', 'ab5b4fdc-65bb-49b2-8fd7-35b5f641736e', '2023-09-13 02:50:51', '2023-09-13 02:50:51', '2023-09-13 19:21:57', 'sombreros'),
(28, 'Internal Reform', 'mujer', 'XS', 1400, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694573564829-image_2023-09-12_215243903.png', 'ab5b4fdc-65bb-49b2-8fd7-35b5f641736e', '2023-09-13 02:52:44', '2023-09-13 02:52:44', NULL, 'ninos'),
(29, 'Aonga dinos :3', 'unisex', 'M', 3020, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694573739004-image_2023-09-12_215537533.png', '2f85aa4e-cbb3-46e8-966a-6f982a6dc74c', '2023-09-13 02:55:39', '2023-09-13 02:55:39', NULL, 'adulto'),
(30, 'Vintage Embroidery', 'hombre', 'XXL', 1600, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694573815279-image_2023-09-12_215653726.png', '2f85aa4e-cbb3-46e8-966a-6f982a6dc74c', '2023-09-13 02:56:55', '2023-09-13 02:56:55', '2023-09-13 19:28:59', 'deportiva'),
(31, 'Harajuku Vintage', 'unisex', 'XXL', 2200, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694573965639-image_2023-09-12_215924712.png', '5ac38dc3-c333-4e2e-8431-daacbc3afa3c', '2023-09-13 02:59:25', '2023-09-13 02:59:25', NULL, 'adulto'),
(32, 'Retro Knit', 'mujer', 'XS', 2500, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694574043363-image_2023-09-12_220042517.png', '5ac38dc3-c333-4e2e-8431-daacbc3afa3c', '2023-09-13 03:00:43', '2023-09-13 03:00:43', NULL, 'marca'),
(33, 'Aelfric', 'mujer', 'XXL', 2800, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694574224598-image_2023-09-12_220343652.png', 'bebc5527-cd6b-460e-b40b-906969487572', '2023-09-13 03:03:44', '2023-09-13 03:03:44', NULL, 'deportiva'),
(34, 'Feid gxrrx', 'mujer', 'XL', 3500, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694574324543-image_2023-09-12_220523333.png', 'bebc5527-cd6b-460e-b40b-906969487572', '2023-09-13 03:05:24', '2023-09-13 03:05:24', NULL, 'sombreros'),
(35, 'Bxsitx parchxdx', 'hombre', 'L', 2500, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694574608489-image_2023-09-12_221007726.png', 'c3216a0a-8f5c-44de-b60a-25100b0a0990', '2023-09-13 03:10:08', '2023-09-13 03:10:08', NULL, 'deportiva'),
(36, 'Shirt Baige', 'unisex', 'XS', 3400, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694574667292-image_2023-09-12_221106543.png', 'c3216a0a-8f5c-44de-b60a-25100b0a0990', '2023-09-13 03:11:07', '2023-09-13 03:11:07', NULL, 'marca'),
(37, 'Varsoty Jacket', 'mujer', 'XL', 2750, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694574962375-image_2023-09-12_221601460.png', '524dbfcd-3fcf-421c-9bdb-c92404d607d3', '2023-09-13 03:16:02', '2023-09-13 03:16:02', NULL, 'deportiva'),
(38, 'Gxrrx Ferxxo', 'mujer', 'XL', 1480, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694575142816-image_2023-09-12_221901845.png', '12ee483d-adef-457b-8d45-9289f0d682db', '2023-09-13 03:19:02', '2023-09-13 03:19:02', NULL, 'sombreros'),
(39, 'Cherub Graphic', 'mujer', 'XL', 1300, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694575349662-image_2023-09-12_222228940.png', '4f533820-0a15-4c0a-9d92-f063bcab862a', '2023-09-13 03:22:29', '2023-09-13 03:22:29', NULL, 'ninos'),
(40, 'Vintage Clothing', 'hombre', 'XL', 2000, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694619900343-image_2023-09-13_104459360.png', 'ce8af538-a818-4ed4-9c8a-09369c3afff5', '2023-09-13 15:45:00', '2023-09-13 15:45:00', NULL, 'ninos'),
(41, 'pantalon', 'mujer', 'M', 500, 'pantalon lindo lindo ', '1694620775564-61TfwdZYLdL._AC_UF894,1000_QL80_.jpg', 'f4439ec3-8b8b-4428-accf-2c3d9690a226', '2023-09-13 15:59:35', '2023-09-13 15:59:35', NULL, 'adulto'),
(42, 'pantalon trekking', 'hombre', 'XL', 26000, 'pantalon verde para trekking', '1694621855479-24bfdb53654be23ea5d6cd2061d4f710.jpg', 'a195fe61-dfea-4ff5-be4b-a987e502da26', '2023-09-13 16:17:35', '2023-09-13 16:17:35', NULL, 'adulto'),
(43, 'Jean negro', 'mujer', 'L', 15000, 'jena negro desmontable', '1694622471934-69931b652923b2702c49c42d314d508e.jpg', '68fa5056-fd80-44a1-8fb7-b1842eff5b43', '2023-09-13 16:27:52', '2023-09-13 16:27:52', NULL, 'adulto'),
(44, 'Mushroom Print', 'hombre', 'XXL', 1600, 'Lorem ipsum dolor sit amet consectetur adipiscing elit, duis pretium facilisis porta himenaeos id, justo odio suspendisse inceptos tempus fermentum.', '1694628561222-image_2023-09-13_130918743.png', '529750d8-837b-492b-8c09-bf452467765c', '2023-09-13 18:09:21', '2023-09-13 18:09:21', NULL, 'deportiva'),
(45, 'Vestido de Niña Sweetie', 'mujer', 'S', 505, 'Lindo vestido para las niñas más dulces.', '1694629487463-Vestido de NinÌa Sweetie.jpeg', 'e83c3f03-ad74-4ab6-96c6-556bdaf96d89', '2023-09-13 18:24:47', '2023-09-13 18:24:47', NULL, 'ninos'),
(46, 'Chaqueta Deportiva UrbanFlex', 'hombre', 'M', 600, 'Chaqueta deportiva flexible y con estilo.', '1694629550732-Chaqueta Deportiva UrbanFlex.jpeg', 'e83c3f03-ad74-4ab6-96c6-556bdaf96d89', '2023-09-13 18:25:50', '2023-09-13 18:25:50', NULL, 'adulto'),
(47, 'Sombrero de Playa Sunset', 'unisex', 'M', 200, 'Sombrero de paja para disfrutar de la playa.', '1694629763890-Sombrero de Playa Sunset.jpeg', 'dd15696d-84db-4a63-8c26-6e71aa47fed4', '2023-09-13 18:29:23', '2023-09-13 18:29:23', NULL, 'sombreros'),
(48, 'Sudadera con Cremallera Outdoor Trek', 'hombre', 'L', 300, 'Sudadera con cremallera perfecta para aventuras al aire libre.', '1694629827137-Sudadera con Cremallera Outdoor Trek.jpeg', 'dd15696d-84db-4a63-8c26-6e71aa47fed4', '2023-09-13 18:30:27', '2023-09-13 18:30:27', NULL, 'adulto'),
(49, 'Vestido de Fiesta GlamourChic', 'mujer', 'L', 800, 'Vestido elegante para ocasiones glamurosas.', '1694629918669-Vestido de Fiesta Glamour.jpeg', '4b26fb23-d82f-4de6-b469-0dc8bdf04f62', '2023-09-13 18:31:58', '2023-09-13 18:31:58', NULL, 'adulto'),
(50, 'Camiseta Vintage Vibes', 'unisex', 'XL', 300, 'Camiseta vintage con vibraciones retro.', '1694629968536-Camiseta Vintage Vibes.jpeg', '4b26fb23-d82f-4de6-b469-0dc8bdf04f62', '2023-09-13 18:32:48', '2023-09-13 18:32:48', NULL, 'adulto'),
(51, 'campera', 'hombre', 'XL', 70000, 'campera de cuervo vacuno', '1694630824268-6d4745fb747fd02430e1a76a7da11f59.jpg', 'a195fe61-dfea-4ff5-be4b-a987e502da26', '2023-09-13 18:47:04', '2023-09-13 18:47:04', NULL, 'adulto'),
(52, 'Pantalones de Yoga ZenFlow', 'mujer', 'L', 100, 'Pantalones de yoga para una experiencia zen.', '1694631071184-Pantalones de Yoga ZenFlow.jpeg', 'da69e395-9b78-40de-b419-f815649aab88', '2023-09-13 18:51:11', '2023-09-13 18:51:11', NULL, 'deportiva'),
(53, 'Chaqueta de Invierno', 'mujer', 'L', 1000, 'Chaqueta abrigada y elegante para el invierno.', '1694631146786-Chaqueta de Invierno CosyChic.jpeg', 'da69e395-9b78-40de-b419-f815649aab88', '2023-09-13 18:52:26', '2023-09-13 18:53:09', NULL, 'adulto'),
(54, 'Camiseta de Fútbol Fanático', 'hombre', 'M', 1000, 'Camiseta de fútbol para verdaderos fanáticos.', '1694631519096-Camiseta de FuÌtbol.jpeg', 'f15b6cce-9edf-4808-b10b-e737b35a04fb', '2023-09-13 18:58:39', '2023-09-13 18:58:39', NULL, 'deportiva'),
(55, 'Jeans Urban Vibes11111', 'hombre', 'M', 200, 'Jeans con un toque de estilo urbano.', '1694633228014-Jeans Urban Vibes.jpeg', 'e83c3f03-ad74-4ab6-96c6-556bdaf96d89', '2023-09-13 19:27:08', '2023-09-13 19:27:42', '2023-09-13 19:27:51', 'adulto'),
(56, 'Vestido de Verano Sunshine', 'unisex', 'M', 77, 'Vestido ligero y radiante para el verano.', '1694633425724-Vestido de Verano Sunshine.jpeg', 'e83c3f03-ad74-4ab6-96c6-556bdaf96d89', '2023-09-13 19:30:25', '2023-09-13 19:31:14', '2023-09-13 19:31:18', 'marca');

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
(48, 80, 24, 1, NULL, '2023-09-13 02:45:44', '2023-09-13 02:45:44', 'Gorra de ferxxo', 700.00),
(49, 81, 25, 1, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Gestriftes shirt', 2200.00),
(50, 81, 24, 1, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Gorra de ferxxo', 700.00),
(51, 81, 22, 1, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Harajuku Jackets', 1000.00),
(52, 81, 30, 1, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Vintage Embroidery', 1600.00),
(53, 81, 31, 1, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Harajuku Vintage', 2200.00),
(54, 81, 33, 2, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Aelfric', 2800.00),
(55, 81, 32, 1, NULL, '2023-09-13 15:16:42', '2023-09-13 15:16:42', 'Retro Knit', 2500.00),
(56, 82, 25, 1, NULL, '2023-09-13 15:19:42', '2023-09-13 15:19:42', 'Gestriftes shirt', 2200.00),
(57, 82, 24, 1, NULL, '2023-09-13 15:19:42', '2023-09-13 15:19:42', 'Gorra de ferxxo', 700.00),
(58, 83, 31, 1, NULL, '2023-09-13 15:30:51', '2023-09-13 15:30:51', 'Harajuku Vintage', 2200.00),
(59, 84, 24, 1, NULL, '2023-09-13 15:57:51', '2023-09-13 15:57:51', 'Gorra de ferxxo', 700.00),
(60, 84, 25, 1, NULL, '2023-09-13 15:57:51', '2023-09-13 15:57:51', 'Gestriftes shirt', 2200.00),
(61, 85, 34, 1, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Feid gxrrx', 3500.00),
(62, 85, 24, 2, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Gorra de ferxxo', 700.00),
(63, 85, 21, 1, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Varsity Jacket', 1200.00),
(64, 85, 26, 1, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Butterfly Groove', 2500.00),
(65, 85, 27, 1, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Gorrax ferxxo', 3000.00),
(66, 85, 33, 1, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Aelfric', 2800.00),
(67, 85, 32, 3, NULL, '2023-09-13 18:26:13', '2023-09-13 18:26:13', 'Retro Knit', 2500.00),
(68, 86, 24, 1, NULL, '2023-09-13 18:28:29', '2023-09-13 18:28:29', 'Gorra de ferxxo', 700.00),
(69, 86, 35, 1, NULL, '2023-09-13 18:28:29', '2023-09-13 18:28:29', 'Bxsitx parchxdx', 2500.00),
(70, 86, 27, 1, NULL, '2023-09-13 18:28:29', '2023-09-13 18:28:29', 'Gorrax ferxxo', 3000.00),
(71, 86, 34, 1, NULL, '2023-09-13 18:28:29', '2023-09-13 18:28:29', 'Feid gxrrx', 3500.00),
(72, 87, 21, 1, NULL, '2023-09-13 18:50:37', '2023-09-13 18:50:37', 'Varsity Jacket', 1200.00),
(73, 87, 38, 1, NULL, '2023-09-13 18:50:37', '2023-09-13 18:50:37', 'Gxrrx Ferxxo', 1480.00),
(74, 87, 22, 1, NULL, '2023-09-13 18:50:37', '2023-09-13 18:50:37', 'Harajuku Jackets', 1000.00),
(75, 87, 24, 1, NULL, '2023-09-13 18:50:37', '2023-09-13 18:50:37', 'Gorra de ferxxo', 700.00),
(76, 87, 27, 1, NULL, '2023-09-13 18:50:37', '2023-09-13 18:50:37', 'Gorrax ferxxo', 3000.00),
(77, 88, 24, 2, NULL, '2023-09-13 19:48:15', '2023-09-13 19:48:15', 'Gorra de ferxxo', 700.00),
(78, 88, 34, 1, NULL, '2023-09-13 19:48:15', '2023-09-13 19:48:15', 'Feid gxrrx', 3500.00),
(79, 88, 38, 1, NULL, '2023-09-13 19:48:15', '2023-09-13 19:48:15', 'Gxrrx Ferxxo', 1480.00),
(80, 88, 35, 1, NULL, '2023-09-13 19:48:15', '2023-09-13 19:48:15', 'Bxsitx parchxdx', 2500.00),
(81, 89, 24, 1, NULL, '2023-09-13 19:50:30', '2023-09-13 19:50:30', 'Gorra de ferxxo', 700.00),
(82, 89, 25, 1, NULL, '2023-09-13 19:50:30', '2023-09-13 19:50:30', 'Gestriftes shirt', 2200.00),
(83, 89, 29, 1, NULL, '2023-09-13 19:50:30', '2023-09-13 19:50:30', 'Aonga dinos :3', 3020.00),
(84, 89, 31, 1, NULL, '2023-09-13 19:50:30', '2023-09-13 19:50:30', 'Harajuku Vintage', 2200.00),
(85, 89, 34, 1, NULL, '2023-09-13 19:50:30', '2023-09-13 19:50:30', 'Feid gxrrx', 3500.00),
(86, 90, 36, 1, NULL, '2023-09-13 19:50:53', '2023-09-13 19:50:53', 'Shirt Baige', 3400.00),
(87, 90, 35, 1, NULL, '2023-09-13 19:50:53', '2023-09-13 19:50:53', 'Bxsitx parchxdx', 2500.00),
(88, 90, 34, 1, NULL, '2023-09-13 19:50:53', '2023-09-13 19:50:53', 'Feid gxrrx', 3500.00),
(89, 91, 28, 1, NULL, '2023-09-13 19:53:46', '2023-09-13 19:53:46', 'Internal Reform', 1400.00);

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
('12ee483d-adef-457b-8d45-9289f0d682db', 'Maximiliano', 'max@gmail.com', 'maxito', '$2a$12$IPgVUTWWue65GSdOGijS0OJyOastlv6FDwgLMub1D.KSpw5w3MUpq', 'User', '1694575080212-image_2023-09-12_221714422.png', '2023-09-13 03:18:00', '2023-09-13 03:18:00', NULL),
('2f85aa4e-cbb3-46e8-966a-6f982a6dc74c', 'Lucas Merlano', 'lucas@gmail.com', 'Luquitas', '$2a$12$apZ5Fk1p1KxXAZmmoMDFne0/ZfbgPZ5l1i.42Aabvxs50rzs1bfWC', 'User', '1694573661473-image_2023-09-12_215410843.png', '2023-09-13 02:54:21', '2023-09-13 02:54:21', NULL),
('45f482b8-cd3f-4d32-86e9-588ca5b61bbf', 'Luisa Toro', 'luisa@gmail.com', 'Luisita', '$2a$12$6u3THVZQYigUz5fn3K6qa.vSUVZt/MRtBXo2szx6ZVt54a0ZZyUd.', 'User', '1694573038066-niÃ±axd.jpg', '2023-09-13 02:42:18', '2023-09-13 02:43:58', NULL),
('4a7ee2f8-e9b5-417e-b14f-db62e73a8246', 'Toby', 'toby@dundermifflin.com', 'toby', '$2a$12$ZLHRCChzMkLBHm6RVV.qC.4x1/RTIqyhI9FhDXYvyAcTCD9Jw0Ywe', 'User', '1694621370438-toby.jpeg', '2023-09-13 16:09:30', '2023-09-13 16:09:30', NULL),
('4b26fb23-d82f-4de6-b469-0dc8bdf04f62', 'Pam Beesly', 'pam.beesly@dundermifflin.com', 'ArtisticPam', '$2a$12$CiU67SzlqEKQyLLlsEnwMePJUJfdsp/U/1IReomsNDbZ9JQlTuwpK', 'User', '1694573967040-Pam Beesly.jpeg', '2023-09-13 02:59:27', '2023-09-13 02:59:27', NULL),
('4f533820-0a15-4c0a-9d92-f063bcab862a', 'Fernan', 'fer@gmail.com', 'fernan', '$2a$12$mI91zKJoL/PP/r2EJegb3.YvbId5F/wyPfHZct1fBg/kDEVwrlF0.', 'User', '1694575311104-image_2023-09-12_222145716.png', '2023-09-13 03:21:51', '2023-09-13 03:21:51', NULL),
('524dbfcd-3fcf-421c-9bdb-c92404d607d3', 'David', 'david@gmail.com', 'davidsito', '$2a$12$GbGwJLlY1BOMuK7GUxj85ODI2dBeJJiZlgukatyC/8qxptgLmNBHu', 'User', '1694574739205-image_2023-09-12_221214088.png', '2023-09-13 03:12:19', '2023-09-13 03:12:19', NULL),
('529750d8-837b-492b-8c09-bf452467765c', 'Luis', 'luis@gmail.com', 'Luisca', '$2a$12$lixmUVJMgmgmQjqQe0redeDiq8dE4md1j/RaHcoptFZ7hFXQ69wpy', 'User', '1694628509718-image_2023-09-13_130823961.png', '2023-09-13 18:08:29', '2023-09-13 18:08:29', NULL),
('576209a2-4ec0-4b25-b0cf-62c5ba997b41', 'Oscar Martinez', 'oscar.martinez@dundermifflin.com', 'AccountantOscar', '$2a$12$wcbB3jcpp69sJg/ZfVNnW.LCDKCZh.y1UrQEeh6kWESTs9ObZ5moG', 'User', '1694620978709-Oscar Martinez.jpeg', '2023-09-13 16:02:58', '2023-09-13 16:02:58', NULL),
('5ac38dc3-c333-4e2e-8431-daacbc3afa3c', 'Laidy ', 'laidy@gmail.com', 'laidy', '$2a$12$5kNuvg9ON6gVXrObQ/gmpei6CbpuzwSqKc5qS4GymqmMgz.SShSi2', 'User', '1694573896553-image_2023-09-12_215750448.png', '2023-09-13 02:58:16', '2023-09-13 02:58:16', NULL),
('60f52377-e009-4c9c-befe-a27fd04098ca', 'Kevin Malone', 'kevin.malone@dundermifflin.com', 'MunchiesKing', '$2a$12$EhKL1zrqEZK0dZ33g.AHPeCmlr4IPbbj2HYJ7uGkHCTAIvv1AKoTm', 'User', '1694621227280-Kevin Malone.jpeg', '2023-09-13 16:07:07', '2023-09-13 16:07:07', NULL),
('68fa5056-fd80-44a1-8fb7-b1842eff5b43', 'Norma', 'norma@gmail.com', 'Normi', '$2a$12$YtuS3cNB7yosb3oW5n4jIuT0jDXOpqsURp4r3mlq2RaWmA9AUko82', 'User', '1694622311481-norma.jpg', '2023-09-13 16:25:11', '2023-09-13 16:25:11', NULL),
('6c6ce7f4-c5aa-4f0b-a6b1-c5e3a3327b08', 'Kelly Kapoor', 'kelly.kapoor@dundermifflin.com', 'FashionistaKelly', '$2a$12$IlSNpiTxQ1dtW5WAXFlhVORwpdUi5ahK3.PAWfNFaJUbX9zkn9DTm', 'User', '1694620453728-Kelly.jpeg', '2023-09-13 15:54:13', '2023-09-13 15:54:13', NULL),
('74c77740-42b7-4f24-b443-2a560e0334e8', 'Martin Zanetti', 'martin@martin.com', 'tincho', '$2a$12$p8ui0qINRPHkbKz3w2FtVOc9BsRV9JzfpiFCDl027X0mhKIonCk/2', 'User', '1694575242782-Bart_simpson.jpg', '2023-09-13 03:20:43', '2023-09-13 03:20:43', NULL),
('9ffaa411-c225-46ad-8011-bca433988f05', 'Benjamin', 'banja@gmail.com', 'bengi', '$2a$12$67l24lZhkF1Lu0v7nAXmT.yJ8Bvk1i7Q2MFjKV4ztqsMzbxxRIBfm', 'User', '1694628439872-image_2023-09-13_130710210.png', '2023-09-13 18:07:20', '2023-09-13 18:07:20', NULL),
('a195fe61-dfea-4ff5-be4b-a987e502da26', 'tomas', 'tomas@gmail.com', 'tomi', '$2a$12$uPRjm0EDe.ElV62jeJT8zOB.oM9asJ6PdvXlSuBa6g82FwumxanjK', 'User', '1694621315450-tomas.jpg', '2023-09-13 16:08:35', '2023-09-13 16:08:35', NULL),
('ab5b4fdc-65bb-49b2-8fd7-35b5f641736e', 'Alejandra ', 'aleja@gmail.com', 'Aleja', '$2a$12$/XGuRII3EqqdYTmEboDO2eM3gx9Ar5v7jYud1FFEwp8nKm3nNMhx.', 'User', '1694573379758-image_2023-09-12_214933063.png', '2023-09-13 02:49:40', '2023-09-13 02:49:40', NULL),
('ac1f99c0-f5a5-495b-b201-34baa2572f53', 'Stanley Hudson', 'stanley.hudson@dundermifflin.com', 'CrosswordStanley', '$2a$12$ogYR2trvIYiWGEEBuffCBOak/lMvkfj8dqbgQ59wj4gkGQMLmH1dy', 'User', '1694621547503-Stanley Hudson.jpeg', '2023-09-13 16:12:27', '2023-09-13 16:12:27', NULL),
('bebc5527-cd6b-460e-b40b-906969487572', 'Charles Chapplin', 'charles@gmail.com', 'chapplin', '$2a$12$YpWxewM1lRMlba57yG3p/udalOmDc1s/m4EAr7Aa.XQdCSF7kMvAG', 'User', '1694574111045-image_2023-09-12_220146001.png', '2023-09-13 03:01:51', '2023-09-13 03:01:51', NULL),
('c3216a0a-8f5c-44de-b60a-25100b0a0990', 'Carlos Andres', 'carlos@gmail.com', 'carlitos', '$2a$12$JI0.THuYbrcJlPX6rme.quyMqB3zjXxmMo6Ki3MeKWIAKe5qIV9Oe', 'User', '1694574564090-image_2023-09-12_220917920.png', '2023-09-13 03:09:24', '2023-09-13 03:09:24', NULL),
('ce8af538-a818-4ed4-9c8a-09369c3afff5', 'Alonso Fernandez', 'alonso@gmail.com', 'Alonso', '$2a$12$l6y5jwDXmVClqbKOh2O7q.XSwzkitrDt4gJwYKRJRkzScQOduy62K', 'User', '1694619851938-image_2023-09-13_104406783.png', '2023-09-13 15:44:12', '2023-09-13 15:44:12', NULL),
('d1f6d5e0-7709-4683-903a-d1ba3d8f33e0', 'Juan Camilo', 'camilo@gmail.com', 'Juanca', '$2a$12$8rwePzD9NRo3.0WM1VeJt.XFUVyPwJCOqkybl9wFsH.FKBngqP5JS', 'Admin', '1694571639696-foto_camilo.jpg', '2023-09-13 02:20:39', '2023-09-13 02:20:39', NULL),
('da69e395-9b78-40de-b419-f815649aab88', 'Dwight Schrute', 'dwight.schrute@dundermifflin.com', 'BeetFarmer', '$2a$12$VpezyC61AQP3leytF3yhauCzqHyWLt4KqTGykbX.0EoRW8aZOHRja', 'User', '1694574087400-Dwight Schrute.jpeg', '2023-09-13 03:01:27', '2023-09-13 03:01:27', NULL),
('dd15696d-84db-4a63-8c26-6e71aa47fed4', 'Jim Halpert', 'jim.halpert@dundermifflin.com', 'PranksMaster', '$2a$12$hKyeh0u6bRoM9fYh.b1E6e9m.x4QHNxkEUkcI4/5vztgYzCiuQqZm', 'User', '1694573398058-Jim Halpert.jpeg', '2023-09-13 02:49:58', '2023-09-13 02:49:58', NULL),
('e83c3f03-ad74-4ab6-96c6-556bdaf96d89', 'Michael Scott', 'michael.scott@dundermifflin.com', 'michael scott', '$2a$12$GULmA6IVIiIJ1fswNRpkN.w65fcRGRgGEOez4GV.MjKizT/ALvnZu', 'Admin', '1694572827614-michael.jpeg', '2023-09-13 02:40:27', '2023-09-13 18:34:17', NULL),
('f15b6cce-9edf-4808-b10b-e737b35a04fb', 'Angela Martin', 'angela.martin@dundermifflin.com', 'nelson', '$2a$12$vVY96fwIbWEMtria6XvXn.U7QOlwE95bZuT05lPLkp.hCrH9jPzGG', 'User', '1694620152293-Angela Martin.jpeg', '2023-09-13 15:49:12', '2023-09-13 18:34:30', NULL),
('f4439ec3-8b8b-4428-accf-2c3d9690a226', 'gatoo', 'gato1@gmail.com', 'gato1', '$2a$12$twYm/vecBjcjABi/AJqAK.k1QGaSnW1j2zqyN69twbFhxks0MIFV6', 'User', '1694574820584-Barbie.jpg', '2023-09-13 03:13:42', '2023-09-13 03:13:42', NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `products_cart`
--
ALTER TABLE `products_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

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
