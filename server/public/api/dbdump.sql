-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 19, 2019 at 06:19 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wickedsales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `img_url` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `product_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `img_url`, `product_id`) VALUES
(1, 'https://bit.ly/2JtVNE6', 1),
(2, './images/shake-weight2.jpg', 1),
(3, 'https://bit.ly/2w9C3Nm', 2),
(4, './images/shamwow-2.jpg', 2),
(5, 'https://bit.ly/2LVHYAk', 3),
(6, './images/snuggie-2.jpg', 3),
(7, 'https://bit.ly/2EjCU2a', 4),
(8, './images/waxvac-2.jpeg', 4),
(9, 'https://bit.ly/2VD80b8', 5),
(10, './images/ostrichpillow-2.jpg', 5),
(11, 'https://bit.ly/2w9EmzO', 6),
(12, './images/tatermitts-2.jpg', 6);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `shortDescription` text COLLATE utf8_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `shortDescription`, `longDescription`) VALUES
(1, 'Shake Weight', 2999, 'Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Et molestie ac feugiat sed. Molestie at elementum eu facilisis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis tellus id interdum velit laoreet id donec ultrices. Non consectetur a erat nam at lectus. Vel turpis nunc eget lorem dolor. Velit sed ullamcorper morbi tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tristique sollicitudin nibh sit amet.'),
(2, 'ShamWow', 2595, 'It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Et molestie ac feugiat sed. Molestie at elementum eu facilisis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis tellus id interdum velit laoreet id donec ultrices. Non consectetur a erat nam at lectus. Vel turpis nunc eget lorem dolor. Velit sed ullamcorper morbi tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tristique sollicitudin nibh sit amet.'),
(3, 'Snuggie', 2900, 'Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Et molestie ac feugiat sed. Molestie at elementum eu facilisis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis tellus id interdum velit laoreet id donec ultrices. Non consectetur a erat nam at lectus. Vel turpis nunc eget lorem dolor. Velit sed ullamcorper morbi tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tristique sollicitudin nibh sit amet.'),
(4, 'Wax Vac', 999, 'Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Et molestie ac feugiat sed. Molestie at elementum eu facilisis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis tellus id interdum velit laoreet id donec ultrices. Non consectetur a erat nam at lectus. Vel turpis nunc eget lorem dolor. Velit sed ullamcorper morbi tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tristique sollicitudin nibh sit amet.'),
(5, 'Ostrich Pillow', 9900, 'Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Et molestie ac feugiat sed. Molestie at elementum eu facilisis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis tellus id interdum velit laoreet id donec ultrices. Non consectetur a erat nam at lectus. Vel turpis nunc eget lorem dolor. Velit sed ullamcorper morbi tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tristique sollicitudin nibh sit amet.'),
(6, 'Tater Mitts', 830, '8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Et molestie ac feugiat sed. Molestie at elementum eu facilisis. Lorem ipsum dolor sit amet consectetur adipiscing elit. Convallis tellus id interdum velit laoreet id donec ultrices. Non consectetur a erat nam at lectus. Vel turpis nunc eget lorem dolor. Velit sed ullamcorper morbi tincidunt. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Cum sociis natoque penatibus et magnis dis parturient montes. Duis tristique sollicitudin nibh sit amet.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
