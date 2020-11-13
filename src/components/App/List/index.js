import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../../../context/GlobalState";

import { Container, Box, Title, SubTitle, BoxBrand } from "./styles";

export const CarList = () => {
  const { cars } = useContext(GlobalContext);

  return (
    <Container>
      <div>
        {cars.map((car) => (
          <Link
            key={car.id}
            to={`/edit/${car.id}`}
            style={{ textDecoration: "none" }}
          >
            <BoxBrand>
              <Box>
                <Title>{car.title}</Title>
                <Title>{car.price}</Title>
              </Box>
              <Box>
                <SubTitle>
                  {car.model + " - " + car.brand + " - " + car.km + " KM"}
                </SubTitle>
                <SubTitle>{car.year}</SubTitle>
              </Box>
            </BoxBrand>
          </Link>
        ))}
      </div>
    </Container>
  );
};
