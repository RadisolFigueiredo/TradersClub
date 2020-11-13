import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 83%;
  position: absolute;
`;
export const BoxCardList = styled.div`
`;
export const BoxText = styled.div`
  padding-top: 4%;
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 90%;

  align-items: center;
`;
export const AlignText = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const Text = styled.h1`
  font-size: 100px;
  display: flex;
  flex-direction: row;
  font-family: "Lobster Two", cursive;
  font-weight: normal;
  max-width: 100%;
  width: 100%;
  justify-content: flex-end;
  text-align: end;
`;
export const BeforeTextContrast = styled(Text)`
  max-width: 50%;
  width: 100%;
`;
export const BoxContrast = styled.div`
  background-color: #2e486a;
  display: flex;
  justify-content: center;
  margin-left: 3%;
  max-width: 80%;
  width: 100%;
`;
export const AlignTextContrast = styled(AlignText)`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  word-wrap: break-word;
`;
export const TextContrast = styled(Text)`
  justify-content: center;
`;
