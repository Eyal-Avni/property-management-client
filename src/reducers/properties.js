export default (properties = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...properties, action.payload];

    default:
      return properties;
  }
};
