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
