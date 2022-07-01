import * as S from "./Column.styles";
import Task from "../Task/Task";
import { IColumn, ITask } from "../../types";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  column: IColumn;
  tasks: ITask[];
}

const Column = ({ column, tasks }: Props) => {
  return (
    <S.Container>
      <S.Title>{column.title}</S.Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <S.TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </S.TaskList>
        )}
      </Droppable>
    </S.Container>
  );
};

export default Column;
