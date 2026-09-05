
let tours = [];

let nextId = 1;

const addOne = (name, info, image, price, location) => {
  const tour = {
    id: nextId,
    name,
    info,
    image,
    price,
    location,
  };

  tours.push(tour);
  nextId++;

  return tour;
};

const getAll = () => {
  return tours;
};

const findById = (id) => {
  return tours.find((tour) => tour.id === Number(id)) || null;
};

const update = (id, data) => {
  const tour = findById(id);

  if (!tour) {
    return null;
  }

  Object.assign(tour, data);

  return tour;
};

addOne(
  "Paris in 7 Days",
  "Explore Paris.",
  "https://example.com/paris.jpg",
  "1,995",
  "Paris, France"
);

addOne(
  "Helsinki Weekend",
  "Discover Helsinki.",
  "https://example.com/helsinki.jpg",
  "795",
  "Helsinki, Finland"
);

module.exports = {
  addOne,
  getAll,
  findById,
  update,
};

