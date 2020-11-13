import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  position: absolute;
  margin-top: 3%;
`;
export const BoxBrand = styled.div`
  border-bottom: 1px solid #fff;
  width: 90%;
  margin: 0 auto;
  padding: 3% 0;

  &:hover {
    background-color: #74777d57;
  }
`;
export const Box = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
`;
export const SubTitle = styled.p`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;
