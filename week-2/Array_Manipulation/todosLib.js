// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2025-08-30"
// }

let todosArray = [];
let nextId = 1;

// Add a todo
function addOne(task, completed, dueDate) {
    if (!task || completed === undefined || !dueDate) {
        return false;
    }

    const newTodo = {
        id: nextId++,
        task,
        completed,
        dueDate
    };

    todosArray.push(newTodo);

    return newTodo;
}

// Get all todos
function getAll() {
    return todosArray;
}

// Find a todo by ID
function findById(id) {
    const numericId = Number(id);

    const todo = todosArray.find(item => item.id === numericId);

    return todo || false;
}

// Update a todo by ID
function updateOneById(id, updatedData) {
    const todo = findById(id);

    if (todo) {
        if (updatedData.task) {
            todo.task = updatedData.task;
        }

        if (updatedData.completed !== undefined) {
            todo.completed = updatedData.completed;
        }

        if (updatedData.dueDate) {
            todo.dueDate = updatedData.dueDate;
        }

        return todo;
    }

    return false;
}

// Delete a todo by ID
function deleteOneById(id) {
    const todo = findById(id);

    if (todo) {
        const initialLength = todosArray.length;

        todosArray = todosArray.filter(
            todo => todo.id !== Number(id)
        );

        return todosArray.length < initialLength;
    }

    return false;
}


// Test the functions when running this file directly
if (require.main === module) {

    // Add todos
    let result = addOne(
        "Buy groceries",
        false,
        "2026-08-26"
    );
    console.log(result);

    result = addOne(
        "Finish JavaScript assignment",
        false,
        "2026-08-30"
    );
    console.log(result);

    // Get all todos
    console.log("getAll called:", getAll());

    // Find todo by ID
    console.log("findById called:", findById(1));

    // Update todo
    console.log(
        "updateOneById called:",
        updateOneById(1, {
            completed: true,
            task: "Buy groceries and milk"
        })
    );

    console.log(
        "findById called after item updated:",
        findById(1)
    );

    // Delete todo
    console.log(
        "deleteOneById called:",
        deleteOneById(1)
    );

    console.log(
        "findById called after item deleted:",
        findById(1)
    );
}


// Export the functions
const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;