CREATE DATABASE hyf_meal;
USE hyf_meal;
CREATE TABLE meal
(
	id INT UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255) NOT NULL,
    event_time DATETIME NOT NULL, -- CHECK( event_time > CURRENT_TIMESTAMP() ) DEFAULT(getdate()),
    max_reservation INT UNSIGNED NOT NULL DEFAULT('1'),
    price DECIMAL NOT NULL,
    created_date DATE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE reservation
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    number_of_guests INT UNSIGNED NOT NULL DEFAULT(1),
    meal_id INT UNSIGNED NOT NULL,
    create_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
);

CREATE TABLE reviews
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL DEFAULT('My review'),
    description text,
    meal_id INT UNSIGNED NOT NULL,
    stars INT NOT NULL CHECK ( stars < 6 AND stars > 0),
    created_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE
);

DROP TABLE reviews;