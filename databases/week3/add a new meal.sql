-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal
(
	title,
    description,
    location,
    event_time,
    max_reservation,
    price,
    created_date
) VALUES
(
	'Jully forkust',
    'A danish tredition food for christmass',
    'Nielgade 7A',
    '2019-12-13 15:00:00',
    150,
    0.0,
    '2019-11-30'
);

-- Get a meal with any id, fx 3
SELECT * FROM meal
WHERE id = 3;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal
SET
    title = 'Jully dinner',
    description = 'A reason to be together, have fun and celebrate friendship',
    location = 'my place',
    event_time = '2019-12-23 14:00:00',
    max_reservation = '10',
    price = 0.0,
    created_date = '2019-11-30'
WHERE id = 4;
-- Delete a meal with any id, fx 3
DELETE FROM meal
WHERE id = 3;

-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation
(
	number_of_guests,
    meal_id,
    create_date
)VALUES
(
	5,
    4,
    '2019-12-01'
);

-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET
	number_of_guests = 6
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;

-- Get all reviews
SELECT * FROM reviews;

-- Add a new reviews
INSERT INTO reviews
(
	title,
    description,
    meal_id,
    stars,
    created_date
) VALUES (
	'A hygge night full of joy!',
    'All the foods were decorated very nice and have been prepared exactly as they should have been',
    4,
    5,
    '2019-12-02'
);

-- Get a review with any id, fx 1
SELECT * FROM reviews
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reviews SET
	title = 'A great hygge night full of joy!',
    description = 'All the foods were decorated very nice and have been prepared exactly as they should have been',
    meal_id = 4,
    stars = 4,
    created_date = '2019-12-02'
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM reviews
WHERE id = 1;

-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT * FROM meal
WHERE max_reservation > 0;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal
WHERE (	title LIKE '%rød%' OR
		title LIKE '%grød%' OR
        title LIKE '%med%' 
);

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE created_date < (NOW() + INTERVAL 5 DAY) AND created_date < (NOW() - INTERVAL 5 DAY);

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 5;

-- Get the meals that have good reviews
SELECT * 
FROM meal m
JOIN reviews r
ON m.id = r.meal_id
WHERE stars > 3;