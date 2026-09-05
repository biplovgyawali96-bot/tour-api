// {
//     "model": "Corolla",
//     "color": "Red",
//     "age": 3
// }

let carArray = [];
let nextId = 1;

// Add a car
function addOne(model, color, age) {
    if (!model || !color || !age) {
        return false;
    }

    const newCar = {
        id: nextId++,
        model,
        color,
        age
    };

    carArray.push(newCar);

    return newCar;
}

// Get all cars
function getAll() {
    return carArray;
}

// Find a car by ID
function findById(id) {
    const numericId = Number(id);

    const car = carArray.find(item => item.id === numericId);

    return car || false;
}

// Update a car by ID
function updateOneById(id, updatedData) {
    const car = findById(id);

    if (car) {
        if (updatedData.model) car.model = updatedData.model;
        if (updatedData.color) car.color = updatedData.color;
        if (updatedData.age) car.age = updatedData.age;

        return car;
    }

    return false;
}

// Delete a car by ID
function deleteOneById(id) {
    const car = findById(id);

    if (car) {
        const initialLength = carArray.length;

        carArray = carArray.filter(car => car.id !== Number(id));

        return carArray.length < initialLength;
    }

    return false;
}


// Test the functions when running this file directly
if (require.main === module) {

    // Add cars
    let result = addOne("Corolla", "Red", 3);
    console.log(result);

    result = addOne("Civic", "Blue", 2);
    console.log(result);

    // Get all cars
    console.log("getAll called:", getAll());

    // Find car by ID
    console.log("findById called:", findById(1));

    // Update car
    console.log(
        "updateOneById called:",
        updateOneById(1, {
            age: 4,
            color: "Black"
        })
    );

    console.log(
        "findById called after item updated:",
        findById(1)
    );

    // Delete car
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
const Car = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Car;