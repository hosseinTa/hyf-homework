-- 1. Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
INSERT INTO hyf_class.task 
(title, description, created, updated, due_Date, status_id, user_id)
VALUES 
('Make a new task' ,
'Make a new task in task table',
NOW(),
NOW(),
NOW() + INTERVAL 5 DAY,
1,
1);

-- 2. Change the title of a task with these attributes: taskID, newTitle
UPDATE task
SET description = 'Change the title of a task'
WHERE (id = 37);

-- 3. Change the task due date with these attributes: taskID, newDueDate
UPDATE task
SET due_date = due_date + INTERVAL 20 DAY
WHERE (id = 37);
-- I intentionally were trying to see if I can add for example 20 days to the old due_date.

-- 4. Change the task status with these attributes: taskID, newStatus
UPDATE task
SET status_id = status_id + 1
WHERE (id = 37);

-- 5. Mark a task as complete with this attribute: taskID
UPDATE task
SET status_id = 3
WHERE (id = 37);

-- 6. Delete task with this attribute: taskID
DELETE FROM task
WHERE id = 37;