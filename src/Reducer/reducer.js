export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      let filterNewmovies = action.payload.filter(
        (currItem, index) => currItem.new === true
      );
      const getCategory = (data, property) => {
        let newVal = data.map((currItem, index) => {
          return currItem[property];
        });
        newVal = ["new movies", ...new Set(newVal)];
        return newVal;
      };

      let flitercategory = getCategory(action.payload, "category");

      return {
        ...state,
        movies: action.payload,
        newmovies: filterNewmovies,
        moviescategory: flitercategory,
      };
    default:
      return state;
  }
};
