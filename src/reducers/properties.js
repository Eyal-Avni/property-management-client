export default (properties = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return properties;

    default:
      return properties;
  }
};
