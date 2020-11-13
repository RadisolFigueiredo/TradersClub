export default (state, action) => {
  switch (action.type) {
    case "ADD_CAR":
      return {
        cars: [action.payload, ...state.cars],
      };
    case "REMOVE_CAR":
      return {
        cars: state.cars.filter((car) => {
          return car.id !== action.payload;
        }),
      };
    case "EDIT_CAR":
      const updateCar = action.payload;

      const updateCars = state.cars.map((car) => {
        if (car.id === updateCar.id) {
          return updateCar;
        }
        return car;
      });
      return {
        cars: updateCars,
      };

    default:
      return state;
  }
};
