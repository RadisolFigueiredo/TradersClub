import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { useFormik } from "formik";
import { schema } from "../../../validationSchema";

import { Link } from "react-router-dom";

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

export const Add = () => {
  const { addCar } = useContext(GlobalContext);

  const [data, setData] = useState({
    id: "",
    title: "",
    model: "",
    brand: "",
    year: "",
    color: "",
    km: "",
    price: "",
  });

  const history = useHistory();

  const onChange = (event) => {
    event.preventDefault();
    const newCar = {
      id: uuid(),
      title: data.title,
      model: data.model,
      brand: data.brand,
      year: data.year,
      color: data.color,
      km: data.km,
      price: data.price,
    };
    addCar(newCar);
    history.push("/");
  };

  const onSubmit = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const formik = useFormik({
    initialValues: { data },
    onSubmit,
    validationSchema: schema,
  });

  console.log(formik.values);

  return (
    <Container>
      <Box>
        <BoxForm>
          <form onSubmit={formik.onSubmit}>
            <div style={{ display: "flex" }}>
              <Fields
                placeholder="Detalhes do carro"
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && formik.touched.title ? (
                <Error>{formik.errors.title}</Error>
              ) : null}
            </div>
            <BoxAlignFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Modelo"
                  name="model"
                  type="text"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.model && formik.touched.model ? (
                  <Error>{formik.errors.model}</Error>
                ) : null}
              </ContainerFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Ano"
                  name="year"
                  type="text"
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.year && formik.touched.year ? (
                  <Error>{formik.errors.year}</Error>
                ) : null}
              </ContainerFields>
            </BoxAlignFields>
            <ContainerSelect>
              <Select
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="brand"
              >
                <option value="">Selecione a marca do carro</option>
                <option value="VW">VW</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Fiat">FIAT</option>
                <option value="Ford">Ford</option>
                <option value="Nissan">Nissan</option>
                <option value="Mitsubishi">Mitsubishi</option>
              </Select>
              {formik.errors.brand && formik.touched.brand ? (
                <SelectError>{formik.errors.brand}</SelectError>
              ) : null}
            </ContainerSelect>
            <BoxAlignFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Cor"
                  name="color"
                  type="text"
                  value={formik.values.color}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.color && formik.touched.color ? (
                  <Error>{formik.errors.color}</Error>
                ) : null}
              </ContainerFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Preço"
                  name="price"
                  type="text"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.price && formik.touched.price ? (
                  <Error>{formik.errors.price}</Error>
                ) : null}
              </ContainerFields>
            </BoxAlignFields>
            <ContainerFields>
              <AlignFields
                placeholder="Km"
                name="km"
                type="text"
                value={formik.values.km}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.km && formik.touched.km ? (
                <Error>{formik.errors.km}</Error>
              ) : null}
            </ContainerFields>
            <ContainerButton>
              <LinkBtn to="/">
                <Button style={{ width: "100%" }} type="button">
                  Cancelar
                </Button>
              </LinkBtn>
              <ButtonSave type="submit">Salvar</ButtonSave>
            </ContainerButton>
          </form>
        </BoxForm>
      </Box>
    </Container>
  );
};
