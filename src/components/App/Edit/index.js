import React, { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../../context/GlobalState";

import { Link, useHistory } from "react-router-dom";

import {
  Container,
  Box,
  BoxForm,
  Fields,
  Select,
  BoxAlignFields,
  AlignFields,
  ButtonSave,

} from "../Add/styles";

import {
  ContainerButton,
  BoxButton,
  Button,

} from "./styles";

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
    event.preventDefault ()
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
              <AlignFields
                placeholder="Modelo"
                type="text"
                name="model"
                value={selectedCar.model}
                onChange={onChange}
              />
              <AlignFields
                placeholder="Ano"
                type="text"
                name="year"
                value={selectedCar.year}
                onChange={onChange}
              />
            </BoxAlignFields>
            <Select value={selectedCar.brand} onChange={onChange} name="brand">
              <option>Selecione a marca do carro</option>
              <option value="VW">VW</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Fiat">FIAT</option>
              <option value="Ford">Ford</option>
              <option value="Nissan">Nissan</option>
              <option value="Mitsubishi">Mitsubishi</option>
            </Select>
            <BoxAlignFields>
              <AlignFields
                placeholder="Cor"
                type="text"
                name="color"
                value={selectedCar.color}
                onChange={onChange}
              />
              <AlignFields
                placeholder="Preço"
                type="text"
                name="price"
                value={selectedCar.price}
                onChange={onChange}
              />
            </BoxAlignFields>
            <AlignFields
              placeholder="Km"
              type="text"
              name="km"
              value={selectedCar.km}
              onChange={onChange}
            />
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
                  <Button type='button' onClick={() => removeCar(selectedCar.id)}>
                    Remover
                  </Button>
                </Link>

                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    maxWidth: "45%",
                  }}
                >
                  <Button type='button'n>Cancelar</Button>
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
