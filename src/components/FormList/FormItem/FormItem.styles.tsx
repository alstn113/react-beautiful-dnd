import styled from "styled-components";

export const Handle = styled.div`
  height: 1.5rem;
  width: 100%;
  background: rgb(228, 143, 143);
  margin-bottom: 0.5rem;
`;

export const Container = styled.div<{
  isDragging: boolean;
}>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  min-height: 250px;
  text-align: center;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;
