import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  width: 80%;
  height: 83%;
  position: absolute;
`;
export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 83%;
  padding-top: 3%;
`;
export const BoxForm = styled.div`
  width: 80%;
`;
export const ContainerFields = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;
export const Fields = styled.input`
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #74777d;
  margin-bottom: 5%;
  width: 100%;
`;
export const ContainerSelect = styled.div`
  height: 80px;
`;
export const Select = styled.select`
  font-size: 20px;
  background-color: transparent;
  border: 1px solid #fff;
  width: 100%;
  color: #fff;
  height: 35px;
  border-radius: 3px;

  & option {
    color: #0e1823;
  }
`;
export const BoxAlignFields = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5%;
`;
export const AlignFields = styled.input`
  color: #fff;
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #74777d;
  margin-bottom: 5%;
  width: 90%;
`;
export const ContainerButton = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  width: 100%;
  height: 6vh;
  margin: 20px 0;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  border: 1px solid #fff;
  width: 30%;
  height: 100%;
  border-radius: 3px;
  text-decoration: none;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const ButtonSave = styled(Button)`
  background-color: #fff;
  border: none;
  color: #0e1823;
  width: 15%;
`;
export const Error = styled.div`
  padding-top: 35px;
  position: absolute;
  color: #d62b2b;
`;
export const SelectError = styled(Error)`
  padding-top: 10px;
`;
export const LinkBtn = styled(Link)`
  text-decoration: none;
  width: 15%;
`;
