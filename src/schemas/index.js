import * as yup from "yup";

export const propertySchema = yup.object().shape({
  city: yup
    .string("please enter a city")
    .required("required")
    .typeError("A city name required"),
  street: yup
    .string("please enter a street")
    .required("required")
    .typeError("A street name required"),
  number: yup
    .number("please enter address number")
    .required("required")
    .positive("must be larger than 0")
    .integer("must be larger than 0")
    .moreThan(0, "must be larger than 0")
    .typeError("A number is required"),
  floor: yup.number("please enter floor number"),
  apt: yup
    .number("please enter apartment number")
    .positive("must be larger than 0")
    .integer("must be larger than 0")
    .moreThan(0, "must be larger than 0")
    .typeError("A number is required"),
  size: yup
    .number("please enter property size")
    .required("required")
    .positive("must be larger than 0")
    .integer("must be larger than 0")
    .moreThan(0, "must be larger than 0")
    .typeError("A number is required"),
  rooms: yup
    .number("please enter number of rooms")
    .required("required")
    .positive("must be larger than 0")
    .integer("must be larger than 0")
    .moreThan(0, "must be larger than 0")
    .typeError("A number is required"),
});
