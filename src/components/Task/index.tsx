import { ITask } from "../../types";
import * as S from "./styles";
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
        <S.Container
          {...provided.draggableProps}
          // {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={task.id === "task-1"}
        >
          <S.Handle {...provided.dragHandleProps} />
          {task.content}
        </S.Container>
      )}
    </Draggable>
  );
};

export default Task;
