import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

export const Image = styled.img`
  box-sizing: border-box;
  margin: 0;
  width: ${({ size }) => size || "200"}px;
  height: ${({ size }) => size || "200"}px;
  object-fit: cover;
`;
