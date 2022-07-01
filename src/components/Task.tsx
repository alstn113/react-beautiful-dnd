import { ITask } from "../types";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  task: ITask;
  index: number;
}

const Task = ({ task, index }: Props) => {
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={task.id === "task-1"}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          // {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={task.id === "task-1"}
        >
          <Handle {...provided.dragHandleProps} />
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

const Container = styled.div<{ isDragging: boolean; isDragDisabled: boolean }>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  text-align: center;
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};
`;

const Handle = styled.div`
  height: 0.5rem;
  width: 100%;
  background: rgb(228, 143, 143);
  margin-bottom: 0.5rem;
`;

export default Task;
