DROP TABLE IF EXISTS `user`;

CREATE TABLE 
`user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(50) NOT NULL UNIQUE,
    `mail` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(50) NOT NULL,
    `access_lvl` INT NOT NULL
    );


DROP TABLE IF EXISTS `item`;

CREATE TABLE `item` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `lvl` INT NOT NULL,
    `icone` BLOB NOT NULL,
    `categorie` ENUM("Casque", "Amulette", "Plastron", "Anneau", "Bottes", "Cape", "Epaulières", "Ceinture", "Monture", "Arme 1M / 2M", "Arme main gauche", "Emblème", "Familier") NOT NULL,
    `dmg1` VARCHAR(50),
    `dmg2` VARCHAR(50),
    `stat1` VARCHAR(50),
    `stat2` VARCHAR(50),
    `stat3` VARCHAR(50),
    `stat4` VARCHAR(50),
    `stat5` VARCHAR(50),
    `stat6` VARCHAR(50),
    `stat7` VARCHAR(50),
    `stat8` VARCHAR(50),
    `stat9` VARCHAR(50)
);

DROP TABLE IF EXISTS `build`;

CREATE TABLE `build` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `lvl` INT NOT NULL,
    `type` ENUM("Dpt distant", "Dpt mélée", "Support", "Tank") NOT NULL,
    `user` INT NOT NULL,
    `item` INT NOT NULL,
    CONSTRAINT FK_build_user_id FOREIGN KEY (`user`) REFERENCES `user` (`id`),
    CONSTRAINT FK_build_item_id FOREIGN KEY (`item`) REFERENCES `item` (`id`)
);