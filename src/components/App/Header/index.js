import React from "react";

import CarImg from "../../../assets/img/car-wireframe.png";

import {
  Container,
  Box,
  Input,
  Button,
  BoxSearch,
  Opacity,
} from "./styles";

export const Header = () => {
  return (
    <Container>
      <BoxSearch>
        <Box>
          <Input placeholder="Pesquise por um veículo" type="text" />
          <Button to='/add'>Cadastrar</Button>
        </Box>
      </BoxSearch>
      <div>
        <Opacity>
          <img
            style={{ maxHeight: "100vh", height: "84vh", width: "100%" }}
            src={CarImg}
            alt="Desenho de um carro"
          />
        </Opacity>
      </div>
    </Container>
  );
};
