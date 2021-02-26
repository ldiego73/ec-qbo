import { Button } from "@components/button";
import { useState } from "react";

import { useDistritos } from "../core/use-distritos";
import {
  Card,
  CardTitle,
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
} from "./styles";

export function FormSimple() {
  const distritos = useDistritos();
  const [datos, setDatos] = useState({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    celular: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Datos => ", datos);
  }

  function handleInputChange(event) {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Card>
      <CardTitle>Facturación y envío</CardTitle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Nombres</FormLabel>
          <FormInput
            type="text"
            name="nombres"
            placeholder="Ingresa tus nombres"
            required
            onChange={(event) => handleInputChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Apellidos</FormLabel>
          <FormInput
            type="text"
            name="apellidos"
            placeholder="Ingresa tus apellidos"
            onChange={(event) => handleInputChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Distrito</FormLabel>
          <FormSelect
            name="distrito"
            onChange={(event) => handleInputChange(event)}
          >
            {distritos.map((distrito, key) => (
              <option key={`distrito-${key}`} value={distrito}>
                {distrito}
              </option>
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup>
          <FormLabel>Dirección</FormLabel>
          <FormInput
            type="text"
            name="direccion"
            placeholder="Ingresa tu dirección"
            onChange={(event) => handleInputChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Celular</FormLabel>
          <FormInput
            type="text"
            name="celular"
            placeholder="Ingresa tu celular"
            onChange={(event) => handleInputChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            onChange={(event) => handleInputChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Button type="primary" value="Finalizar Compra" />
        </FormGroup>
      </Form>
    </Card>
  );
}
