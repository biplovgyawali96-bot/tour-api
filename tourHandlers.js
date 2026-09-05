const Tour = require("./tourLib");

const getAllTours = (req, res) => {
  const tours = Tour.getAll();

  res.json(tours);
};

const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;

  const tour = Tour.addOne(
    name,
    info,
    image,
    price,
    location
  );

  res.status(201).json(tour);
};

const getTourById = (req, res) => {
  res.json({ message: "Hello from getTourById" });
};

const updateTour = (req, res) => {
  res.json({ message: "Hello from updateTour" });
};

const deleteTour = (req, res) => {
  res.json({ message: "Hello from deleteTour" });
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};

0