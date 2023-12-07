-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: entrenat.cevfenre52gg.us-east-1.rds.amazonaws.com    Database: entrenat_db
-- ------------------------------------------------------
-- Server version	8.0.33

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `registroejercicio`
--

DROP TABLE IF EXISTS `registroejercicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registroejercicio` (
  `logid` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `exerciseid` int DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`logid`),
  KEY `userid` (`userid`),
  KEY `exerciseid` (`exerciseid`),
  CONSTRAINT `registroejercicio_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `usuario` (`userid`),
  CONSTRAINT `registroejercicio_ibfk_2` FOREIGN KEY (`exerciseid`) REFERENCES `ejercicio` (`exerciseid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registroejercicio`
--

LOCK TABLES `registroejercicio` WRITE;
/*!40000 ALTER TABLE `registroejercicio` DISABLE KEYS */;
INSERT INTO `registroejercicio` VALUES (1,1,5,55.50,'2023-11-28 04:46:06'),(2,2,3,55.50,'2023-11-28 11:05:04'),(3,2,1,55.50,'2023-11-28 11:05:13'),(4,2,4,55.50,'2023-11-28 11:05:17'),(5,2,5,70.50,'2023-11-28 11:05:28'),(6,2,2,34.00,'2023-11-28 12:30:47'),(7,4,5,23.33,'2023-11-28 15:48:19'),(8,4,2,999.99,'2023-11-28 16:38:23'),(9,4,3,333.33,'2023-11-28 16:40:10'),(10,2,5,70.50,'2023-12-04 09:50:02'),(11,2,3,70.50,'2023-12-04 11:14:26'),(12,3,3,70.50,'2023-12-04 20:08:42');
/*!40000 ALTER TABLE `registroejercicio` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-06 20:31:04
