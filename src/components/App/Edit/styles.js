import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerButton = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
`;
export const BoxButton = styled.div`
  display: flex;
  max-width: 50%;
  justify-content: space-between;
  width: 60%;
  height: 100%;
`;
export const BoxBtn = styled(Link)`
  display: flex;
  justify-content: flex-end;
  width: 35%;
  height: 60%;
  text-decoration: none;
  border: 1px solid red;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  border: 1px solid #fff;
  width: 60%;
  height: 100%;
  border-radius: 3px;
  text-decoration: none;
  justify-content: center;
  display: flex;
  align-items: center;
`;

