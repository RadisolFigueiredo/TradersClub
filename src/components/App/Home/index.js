import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

import { CarList } from "../List";

import {
  Container,
  BoxCardList,
  BoxText,
  AlignText,
  Text,
  AlignTextContrast,
  TextContrast,
  BoxContrast,
  BeforeTextContrast,
} from "./styles";

export const Home = () => {
  const { cars } = useContext(GlobalContext);

  return (
    <Container>
      {cars.length > 0 ? (
        <BoxCardList>
          <CarList />
        </BoxCardList>
      ) : (
        <BoxText>
          <div>
            <AlignText>
              <Text>Pesquisa de veículos</Text>
            </AlignText>
            <AlignTextContrast>
              <BeforeTextContrast>do</BeforeTextContrast>
              <BoxContrast>
                <TextContrast>TradeClub</TextContrast>
              </BoxContrast>
            </AlignTextContrast>
          </div>
        </BoxText>
      )}
    </Container>
  );
};
