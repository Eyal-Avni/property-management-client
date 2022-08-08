import * as api from "../api";

//Action creators
export const getProperties = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProperties();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
