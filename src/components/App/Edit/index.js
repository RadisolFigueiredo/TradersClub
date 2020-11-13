import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../context/GlobalState";

import { Link, useHistory } from "react-router-dom";

import {
  Container,
  ContainerButton,
  Box,
  BoxForm,
  Fields,
  Select,
  BoxAlignFields,
  AlignFields,
  ContainerFields,
  ButtonSave,
  ContainerSelect,
} from "../Add/styles";

import { BoxButton, Btn } from "./styles";

export const Edit = (props) => {
  const { cars, removeCar, editCar } = useContext(GlobalContext);
  const [selectedCar, setSelectedCar] = useState({
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

  const currentCarId = props.match.params.id;

  useEffect(() => {
    const carId = currentCarId;
    const selectedCar = cars.find((car) => car.id === carId);
    setSelectedCar(selectedCar);
  }, [currentCarId, cars]);
  console.log(cars);

  const onSubmit = (event) => {
    event.preventDefault();
    editCar(selectedCar);
    history.push("/");
  };

  const onChange = (e) => {
    setSelectedCar({
      ...selectedCar,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Box>
        <BoxForm>
          <form onSubmit={onSubmit}>
            <Fields
              placeholder="Detalhes do carro"
              type="text"
              name="title"
              value={selectedCar.title}
              onChange={onChange}
            />
            <BoxAlignFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Modelo"
                  type="text"
                  name="model"
                  value={selectedCar.model}
                  onChange={onChange}
                />
              </ContainerFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Ano"
                  type="text"
                  name="year"
                  value={selectedCar.year}
                  onChange={onChange}
                />
              </ContainerFields>
            </BoxAlignFields>
            <ContainerSelect>
              <Select
                value={selectedCar.brand}
                onChange={onChange}
                name="brand"
              >
                <option>Selecione a marca do carro</option>
                <option value="VW">VW</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Fiat">FIAT</option>
                <option value="Ford">Ford</option>
                <option value="Nissan">Nissan</option>
                <option value="Mitsubishi">Mitsubishi</option>
              </Select>
            </ContainerSelect>
            <BoxAlignFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Cor"
                  type="text"
                  name="color"
                  value={selectedCar.color}
                  onChange={onChange}
                />
              </ContainerFields>
              <ContainerFields>
                <AlignFields
                  placeholder="Preço"
                  type="text"
                  name="price"
                  value={selectedCar.price}
                  onChange={onChange}
                />
              </ContainerFields>
            </BoxAlignFields>
            <ContainerFields>
              <AlignFields
                placeholder="Km"
                type="text"
                name="km"
                value={selectedCar.km}
                onChange={onChange}
              />
            </ContainerFields>
            <ContainerButton>
              <BoxButton>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    maxWidth: "45%",
                  }}
                >
                  <Btn type="button" onClick={() => removeCar(selectedCar.id)}>
                    Remover
                  </Btn>
                </Link>

                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    maxWidth: "45%",
                  }}
                >
                  <Btn type="button" n>
                    Cancelar
                  </Btn>
                </Link>
              </BoxButton>
              <ButtonSave type="submit">Salvar</ButtonSave>
            </ContainerButton>
          </form>
        </BoxForm>
      </Box>
    </Container>
  );
};
