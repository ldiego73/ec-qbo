import { Button } from "@components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { CompraSchema } from "../core/schemas";
import { useDistritos } from "../core/use-distritos";
import {
  Card,
  CardTitle,
  Form,
  FormError,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
} from "./styles";

export function FormSchema() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(CompraSchema),
    mode: "onChange",
  });
  const distritos = useDistritos();

  function onSubmit(datos) {
  }

  return (
    <Card>
      <CardTitle>Facturación y envío usando Schema Validator</CardTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>Nombres</FormLabel>
          <FormInput
            type="text"
            name="nombres"
            placeholder="Ingresa tus nombres"
            ref={register}
          />
          {errors.nombres && <FormError>{errors.nombres?.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Apellidos</FormLabel>
          <FormInput
            type="text"
            name="apellidos"
            placeholder="Ingresa tus apellidos"
            ref={register}
          />
          {errors.apellidos && (
            <FormError>{errors.apellidos?.message}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Distrito</FormLabel>
          <FormSelect name="distrito" ref={register}>
            {distritos.map((distrito, key) => (
              <option key={`distrito-${key}`} value={distrito}>
                {distrito}
              </option>
            ))}
          </FormSelect>
          {errors.distrito && <FormError>{errors.distrito?.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Dirección</FormLabel>
          <FormInput
            type="text"
            name="direccion"
            placeholder="Ingresa tu dirección"
            ref={register}
          />
          {errors.direccion && (
            <FormError>{errors.direccion?.message}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Celular</FormLabel>
          <FormInput
            type="text"
            name="celular"
            placeholder="Ingresa tu celular"
            ref={register}
          />
          {errors.celular && <FormError>{errors.celular?.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            ref={register}
          />
          {errors.email && <FormError>{errors.email?.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <Button type="primary" value="Finalizar Compra" />
        </FormGroup>
      </Form>
    </Card>
  );
}
