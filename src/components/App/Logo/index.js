import React from "react";

import { Link } from "react-router-dom";

import imgLogo from "../../../assets/img/logo-tc.png";
import { Container, BoxLogo } from "./styles";

export const Logo = () => {
  return (
    <Container>
      <BoxLogo>
        <Link to='/'>
          <img src={imgLogo} alt="Logo" />
        </Link>
      </BoxLogo>
    </Container>
  );
};
