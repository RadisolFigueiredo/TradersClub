import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Formik, Field, Form, ErrorMessage } from "formik";
import schema from "../../../validationSchema";

import {
  Container,
  Box,
  BoxForm,
  Fields,
  Select,
  BoxAlignFields,
  AlignFields,
  ContainerButton,
  Button,
  ButtonSave,
  ContainerFields,
  ContainerSelect,
  Error,
  SelectError,
  LinkBtn,
} from "./styles";

const initialValues = {
  id: "",
  title: "",
  model: "",
  brand: "",
  year: "",
  color: "",
  km: "",
  price: "",
};

export const Add = () => {
  const { addCar } = useContext(GlobalContext);

  // const [data, setData] = useState({
  //   id: "",
  //   title: "",
  //   model: "",
  //   brand: "",
  //   year: "",
  //   color: "",
  //   km: "",
  //   price: "",
  // });

  const history = useHistory();

  const onSubmit = (formValue) => {
    const newCar = {
      id: uuid(),
      title: formValue.title,
      model: formValue.model,
      brand: formValue.brand,
      year: formValue.year,
      color: formValue.color,
      km: formValue.km,
      price: formValue.price,
    };

    addCar(newCar);
    history.push("/");
  };

  return (
    <Container>
      <Box>
        <BoxForm>
          <Formik
            initialValues={initialValues}
            validateOnChange={true}
            validationSchema={schema}
            onSubmit={onSubmit}
            render={({ handleBlur }) => (
              <Form>
                <div style={{ display: "flex" }}>
                  <Field
                    placeholder="Detalhes do carro"
                    type="text"
                    name="title"
                    onBlur={handleBlur}
                    as={Fields}
                  />
                  <ErrorMessage component={Error} name="title" />
                </div>
                <BoxAlignFields>
                  <ContainerFields>
                    <Field
                      as={AlignFields}
                      placeholder="Modelo"
                      name="model"
                      type="text"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage component={Error} name="model" />
                  </ContainerFields>
                  <ContainerFields>
                    <Field
                      as={AlignFields}
                      placeholder="Ano"
                      name="year"
                      type="text"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage component={Error} name="year" />
                  </ContainerFields>
                </BoxAlignFields>
                <ContainerSelect>
                  <Field as={Select} onBlur={handleBlur} name="brand">
                    <option value="">Selecione a marca do carro</option>
                    <option value="VW">VW</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Fiat">FIAT</option>
                    <option value="Ford">Ford</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                  </Field>
                  <ErrorMessage component={SelectError} name="brand" />
                </ContainerSelect>
                <BoxAlignFields>
                  <ContainerFields>
                    <Field
                      as={AlignFields}
                      placeholder="Cor"
                      name="color"
                      type="text"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage component={Error} name="color" />
                  </ContainerFields>
                  <ContainerFields>
                    <Field
                      as={AlignFields}
                      placeholder="Preço"
                      name="price"
                      type="text"
                      onBlur={handleBlur}
                    />
                    <ErrorMessage component={Error} name="price" />
                  </ContainerFields>
                </BoxAlignFields>
                <ContainerFields>
                  <Field
                    as={AlignFields}
                    placeholder="Km"
                    name="km"
                    type="text"
                    onBlur={handleBlur}
                  />
                  <ErrorMessage component={Error} name="km" />
                </ContainerFields>
                <ContainerButton>
                  <LinkBtn to="/">
                    <Button style={{ width: "100%" }} type="button">
                      Cancelar
                    </Button>
                  </LinkBtn>
                  <ButtonSave type="submit">Salvar</ButtonSave>
                </ContainerButton>
              </Form>
            )}
          />
        </BoxForm>
      </Box>
    </Container>
  );
};
