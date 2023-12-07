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
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `altura` decimal(5,2) DEFAULT NULL,
  `peso` decimal(5,2) DEFAULT NULL,
  `contraseña` varchar(255) NOT NULL,
  `cuentaactiva` tinyint(1) DEFAULT '1',
  `gender` varchar(10) DEFAULT NULL,
  `fechacreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fechamodificacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'taguabonga2','taguabonga@ejemplo.com',1.70,70.00,'$2b$10$MwjTJkoCqVxznvg0f1.fbu/vSphAEpZ27aS2H8/Ok7odVTSktvqle',0,'masculino','2023-11-28 03:50:50','2023-11-28 06:16:49'),(2,'ejemplo','12345@ejemplo.com',1.70,70.00,'$2b$10$9pc/x6YKZHHZMEwWAvHX.uyhTWgqu60NcMGmqsFvRwHtnVI5lgT.6',1,'masculino','2023-11-28 04:26:07','2023-11-28 04:26:07'),(3,'zenteno','12345@ejemplo.com',1.77,80.00,'$2b$10$VjMpwB26/A5WVNHLfV9rz.jOc43jGmsXve4jn.lLDvRWWBxvNCj7.',1,'male','2023-11-28 09:05:26','2023-11-28 09:05:26'),(4,'Zenteno Santiago','proyecto@gmail.com',1.77,65.00,'$2b$10$kfD16dvQ8uxiikGYdfrTUOjPLHwxLTbP5fdSgpoKZN5H4kQ.Azlde',1,'male','2023-11-28 15:47:04','2023-11-28 15:47:04'),(5,'jose zenteno','zenteno125gamer@gmail.com',1.70,75.00,'$2b$10$yzi79nmTDLKg7JLqI/ck1u/7PzTYNl9IUfFUvV7DOTQmiZRNeyHYq',1,'male','2023-12-04 13:38:40','2023-12-04 13:38:40'),(6,'Jesus','jesuspersonal202n@gmail.com',1.70,70.00,'$2b$10$/Oz84zbzYILpccmw9gpoz.GoYdCWhxtk9HLvTWWEzo7KJthywjS4W',1,'masculino','2023-12-04 17:02:41','2023-12-04 17:02:41');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
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

-- Dump completed on 2023-12-06 20:31:02
