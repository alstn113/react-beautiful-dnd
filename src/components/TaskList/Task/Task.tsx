import { ITask } from "../../../types";
import { Container, Handle } from "./Task.styles";
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

export default Task;
