import { ITask } from "../types";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  task: ITask;
  index: any;
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
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={task.id === "task-1"}
        >
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
  margin-bottom: 8px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};
`;

export default Task;
