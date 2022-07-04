import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  padding: 8px;
  margin: 8px;
  text-align: center;
  background: #9dd2ea;
`;

export const FormListContainer = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 30px;
`;
