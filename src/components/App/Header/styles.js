import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  /* max-width: 100%; */
  height: 15vh;
  width: 100%;
`;
export const BoxSearch = styled.div`
  height: 100%;
  background-color: #1a2433;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;
export const Box = styled.div`
  width: 80%;
  height: 40%;
  display: flex;
  justify-content: space-between;
`;
export const Input = styled.input`
  width: 80%;
  border: none;
  border: 2px solid #74777d;
  border-radius: 4px;
  background-color: transparent;
  padding: 10px;
  font-size: 18px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 700;

  ::-webkit-input-placeholder {
    color: #74777d;
  }

  :-moz-placeholder {
    color: #74777d;
  }

  ::-moz-placeholder {
    color: #74777d;
  }

  :-ms-input-placeholder {
    color: #74777d;
  }
`;
export const Button = styled(Link)`
  max-width: 17%;
  width: 100%;
  color: #0e1823;
  font-size: 18px;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;
export const BoxImg = styled.div`
  /* max-width: 100%;
  width: 100%; */
  /* height: 85vh; */
  /* display: flex;  */
  /* border: 1px solid red; */

  /* background-color: #1a2433; */
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
`;
export const Opacity = styled.div`
  opacity: 0.1;
`;
