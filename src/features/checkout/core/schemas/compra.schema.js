import * as schema from "yup";

export const CompraSchema = schema.object().shape({
  nombres: schema
    .string()
    .required("Debe ingresar los nombres")
    .min(3, "Los nombres deben tener 3 digitos"),
  apellidos: schema
    .string()
    .required("Debe ingresar los apellidos")
    .min(3, "Los apellidos deben tener 3 digitos"),
  distrito: schema.string().required("Debe seleccionar el distrito"),
  celular: schema
    .string()
    .required("Debe ingresar el celular")
    .matches(/^[0-9]+$/, { message: "El celular debe ser numerico" }),
  email: schema
    .string()
    .required("Debe ingresar el email")
    .email("Debe ingresar un email valido"),
});
