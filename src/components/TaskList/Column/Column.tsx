import { Container, TaskList, Title } from "./Column.styles";
import Task from "../Task/Task";
import { IColumn, ITask } from "../../../types";
import { Droppable } from "react-beautiful-dnd";

interface Props {
  column: IColumn;
  tasks: ITask[];
}

const Column = ({ column, tasks }: Props) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
