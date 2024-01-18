-- SQLBook: Code
DROP TABLE IF EXISTS `user`;

CREATE TABLE 
`user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(50) NOT NULL UNIQUE,
    `mail` VARCHAR(50) NOT NULL UNIQUE,
    `password` VARCHAR(500) NOT NULL,
    `access_lvl` INT DEFAULT 0 NOT NULL
    );


DROP TABLE IF EXISTS `item`;

CREATE TABLE `item` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `lvl` INT NOT NULL,
    `icone` BLOB,
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
    `item` INT,
    CONSTRAINT FK_build_user_id FOREIGN KEY (`user`) REFERENCES `user` (`id`),
    CONSTRAINT FK_build_item_id FOREIGN KEY (`item`) REFERENCES `item` (`id`)
);

INSERT INTO `build` (`nom`, `lvl`, `type`, `user`)
VALUES (
    'test',
    110,
    'Dpt distant',
    1
);

INSERT INTO `build` (`nom`, `lvl`, `type`, `user`)
VALUES (
    'test',
    110,
    'Dpt mélée',
    1
);

INSERT INTO `build` (`nom`, `lvl`, `type`, `user`)
VALUES (
    'test',
    110,
    'Support',
    1
);

INSERT INTO `build` (`nom`, `lvl`, `type`, `user`)
VALUES (
    'test',
    110,
    'Tank',
    1
);


INSERT INTO `item` (`nom`, `lvl`, `categorie`)
VALUES ("gélano",
        60,
        "Anneau"),

        ("Coiffe du bouftou",
        20,
        "Casque"),

        ("kralamansion",
        199,
        "Amulette"),

        ("Plastron du bouftou",
        20,
        "Plastron"),

        ("Bottes du Klime",
        200,
        "Bottes"),

        ("Voile d'encre",
        199,
        "Cape"),

        ("Epaulières du bouftou",
        20,
        "Epaulières"),

        ("String du chêne mou",
        145,
        "Ceinture"),

        ("dragodinde",
        1,
        "Monture"),

        ("raziel",
        45,
        "Arme 1M / 2M"),

        ("Emblème de Bonta",
        110,
        "Emblème"),

        ("bébé pandawa",
        1,
        "Familier")







