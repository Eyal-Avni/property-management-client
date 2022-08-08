import axios from "axios";

const url = "http://localhost:5000/properties";

export const fetchProperties = () => axios.get(url);
export const createProperty = (newProperty) => axios.post(url, newProperty);
