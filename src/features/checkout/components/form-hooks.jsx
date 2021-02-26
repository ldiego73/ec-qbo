import { Button } from "@components/button";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import { useDistritos } from "../core/use-distritos";
import {
  Card,
  CardTitle,
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  FormError,
} from "./styles";

const apellidosMaxLength = 10;

export function FormHooks() {
  const distritos = useDistritos();
  const { register, handleSubmit, errors, watch } = useForm();
  const passwordRef = useRef({});

  passwordRef.current = watch("password", "");

  function onSubmit(datos) {
    console.log("Datos => ", datos);
  }

  return (
    <Card>
      <CardTitle>Facturación y envío usando Hooks</CardTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormLabel>Nombres</FormLabel>
          <FormInput
            type="text"
            name="nombres"
            placeholder="Ingresa tus nombres"
            ref={register({
              required: true,
              minLength: 5,
            })}
          />
          {errors.nombres && errors.nombres.type === "required" && (
            <FormError>Debe ingresar sus nombres</FormError>
          )}
          {errors.nombres && errors.nombres.type === "minLength" && (
            <FormError>Los nombres deben tener como mínimo 5 digitos</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Apellidos</FormLabel>
          <FormInput
            type="text"
            name="apellidos"
            placeholder="Ingresa tus apellidos"
            ref={register({
              required: true,
              minLength: apellidosMaxLength,
            })}
          />
          {errors.apellidos && errors.apellidos.type === "required" && (
            <FormError>Debe ingresar sus apellidos</FormError>
          )}
          {errors.apellidos && errors.apellidos.type === "minLength" && (
            <FormError>
              Los apellidos deben tener como mínimo {apellidosMaxLength} digitos
            </FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Distrito</FormLabel>
          <FormSelect
            name="distrito"
            ref={register({
              required: true,
            })}
          >
            {distritos.map((distrito, key) => (
              <option key={`distrito-${key}`} value={distrito}>
                {distrito}
              </option>
            ))}
          </FormSelect>
          {errors.distrito && errors.distrito.type === "required" && (
            <FormError>Debe seleccionar un distrito</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Dirección</FormLabel>
          <FormInput
            type="text"
            name="direccion"
            placeholder="Ingresa tu dirección"
            ref={register({
              required: true,
              maxLength: 30,
            })}
          />
          {errors.direccion && errors.direccion.type === "required" && (
            <FormError>Debe ingresar su direccion</FormError>
          )}
          {errors.direccion && errors.direccion.type === "maxLength" && (
            <FormError>
              Los direccion deben tener como maximo 30 digitos
            </FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Celular</FormLabel>
          <FormInput
            type="text"
            name="celular"
            placeholder="Ingresa tu celular"
            ref={register({
              required: true,
              minLength: 9,
              maxLength: 9,
              pattern: /^[0-9]+$/,
            })}
          />
          {errors.celular && errors.celular.type === "required" && (
            <FormError>Debe ingresar su celular</FormError>
          )}
          {errors.celular && errors.celular.type === "minLength" && (
            <FormError>El celular debe tener solo 9 digitos</FormError>
          )}
          {errors.celular && errors.celular.type === "pattern" && (
            <FormError>El celular debe ser numerico</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            ref={register({
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <FormError>Debe ingresar su email</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormInput
            type="text"
            name="password"
            placeholder="Ingresa tu password"
            ref={register({
              required: true,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <FormError>Debe ingresar su password</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormLabel>Confirmar Password</FormLabel>
          <FormInput
            type="text"
            name="password_confirm"
            placeholder="Confirma tu password"
            ref={register({
              required: true,
              validate: (value) =>
                value === passwordRef.current ||
                "Debe ingresar los mismos passwords",
            })}
          />
          {errors.password_confirm && errors.password_confirm.type === "required" && (
            <FormError>Debe confirmar su password</FormError>
          )}
          {errors.password_confirm && errors.password_confirm.type === "validate" && (
            <FormError>{errors.password_confirm.message}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <Button type="primary" value="Finalizar Compra" />
        </FormGroup>
      </Form>
    </Card>
  );
}
