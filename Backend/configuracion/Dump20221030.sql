CREATE DATABASE  IF NOT EXISTS `bd_saitama` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_saitama`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_saitama
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `batalla`
--

DROP TABLE IF EXISTS `batalla`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batalla` (
  `id_heroe` int NOT NULL,
  `id_monstruo` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `ganador` varchar(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2_id_heroe_idx` (`id_heroe`),
  KEY `FK2_id_monstruo_idx` (`id_monstruo`),
  CONSTRAINT `FK2_id_heroe` FOREIGN KEY (`id_heroe`) REFERENCES `heroe` (`id`),
  CONSTRAINT `FK2_id_monstruo` FOREIGN KEY (`id_monstruo`) REFERENCES `monstruo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batalla`
--

LOCK TABLES `batalla` WRITE;
/*!40000 ALTER TABLE `batalla` DISABLE KEYS */;
/*!40000 ALTER TABLE `batalla` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `celula`
--

DROP TABLE IF EXISTS `celula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `celula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mutacion` varchar(280) NOT NULL,
  `habilidad` varchar(120) NOT NULL,
  `id_monstruo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `FK_id_monstruo` FOREIGN KEY (`id`) REFERENCES `monstruo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `celula`
--

LOCK TABLES `celula` WRITE;
/*!40000 ALTER TABLE `celula` DISABLE KEYS */;
/*!40000 ALTER TABLE `celula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comida`
--

DROP TABLE IF EXISTS `comida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comida` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_comida` varchar(40) NOT NULL,
  `precio` int NOT NULL,
  `dia` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comida`
--

LOCK TABLES `comida` WRITE;
/*!40000 ALTER TABLE `comida` DISABLE KEYS */;
/*!40000 ALTER TABLE `comida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fans`
--

DROP TABLE IF EXISTS `fans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_fan` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fans`
--

LOCK TABLES `fans` WRITE;
/*!40000 ALTER TABLE `fans` DISABLE KEYS */;
/*!40000 ALTER TABLE `fans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fans_heroe`
--

DROP TABLE IF EXISTS `fans_heroe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fans_heroe` (
  `id_fan` int NOT NULL,
  `id_heroe` int NOT NULL,
  PRIMARY KEY (`id_fan`,`id_heroe`),
  KEY `FK3_id_heroe_idx` (`id_heroe`),
  CONSTRAINT `FK3_id_heroe` FOREIGN KEY (`id_heroe`) REFERENCES `heroe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_id_fan` FOREIGN KEY (`id_fan`) REFERENCES `fans` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fans_heroe`
--

LOCK TABLES `fans_heroe` WRITE;
/*!40000 ALTER TABLE `fans_heroe` DISABLE KEYS */;
/*!40000 ALTER TABLE `fans_heroe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heroe`
--

DROP TABLE IF EXISTS `heroe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heroe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_heroe` varchar(60) NOT NULL,
  `rango` varchar(2) NOT NULL,
  `habilidad` varchar(120) NOT NULL,
  `lugar_Residencia` varchar(60) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroe`
--

LOCK TABLES `heroe` WRITE;
/*!40000 ALTER TABLE `heroe` DISABLE KEYS */;
INSERT INTO `heroe` VALUES (1,'Sebastián Zapata','A','Beber','Envigado','3012456765');
/*!40000 ALTER TABLE `heroe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monstruo`
--

DROP TABLE IF EXISTS `monstruo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monstruo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_monstruo` varchar(60) NOT NULL,
  `nivel_amenaza` varchar(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monstruo`
--

LOCK TABLES `monstruo` WRITE;
/*!40000 ALTER TABLE `monstruo` DISABLE KEYS */;
/*!40000 ALTER TABLE `monstruo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partidas`
--

DROP TABLE IF EXISTS `partidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gana` varchar(2) NOT NULL,
  `videojuego` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partidas`
--

LOCK TABLES `partidas` WRITE;
/*!40000 ALTER TABLE `partidas` DISABLE KEYS */;
/*!40000 ALTER TABLE `partidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrocinador`
--

DROP TABLE IF EXISTS `patrocinador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patrocinador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_patrocinador` varchar(60) NOT NULL,
  `tipo_patrocinio` varchar(8) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrocinador`
--

LOCK TABLES `patrocinador` WRITE;
/*!40000 ALTER TABLE `patrocinador` DISABLE KEYS */;
INSERT INTO `patrocinador` VALUES (1,'Jessuar Hoyos','Heroe');
/*!40000 ALTER TABLE `patrocinador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patrocinador_heroe`
--

DROP TABLE IF EXISTS `patrocinador_heroe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patrocinador_heroe` (
  `id_patrocinador` int NOT NULL,
  `id_heroe` int NOT NULL,
  PRIMARY KEY (`id_patrocinador`,`id_heroe`),
  KEY `FK_id_heroe_idx` (`id_heroe`),
  CONSTRAINT `FK_id_heroe` FOREIGN KEY (`id_heroe`) REFERENCES `heroe` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_id_patrocinador` FOREIGN KEY (`id_patrocinador`) REFERENCES `patrocinador` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patrocinador_heroe`
--

LOCK TABLES `patrocinador_heroe` WRITE;
/*!40000 ALTER TABLE `patrocinador_heroe` DISABLE KEYS */;
INSERT INTO `patrocinador_heroe` VALUES (1,1);
/*!40000 ALTER TABLE `patrocinador_heroe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videojuegos`
--

DROP TABLE IF EXISTS `videojuegos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videojuegos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_videojuego` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videojuegos`
--

LOCK TABLES `videojuegos` WRITE;
/*!40000 ALTER TABLE `videojuegos` DISABLE KEYS */;
/*!40000 ALTER TABLE `videojuegos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visita_heroe`
--

DROP TABLE IF EXISTS `visita_heroe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visita_heroe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_heroe` varchar(60) NOT NULL,
  `dia_visita` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visita_heroe`
--

LOCK TABLES `visita_heroe` WRITE;
/*!40000 ALTER TABLE `visita_heroe` DISABLE KEYS */;
/*!40000 ALTER TABLE `visita_heroe` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-30 20:04:30
