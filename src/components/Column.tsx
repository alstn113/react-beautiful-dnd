import styled from "styled-components";
import Task from "./Task";
import { IColumn, ITask } from "../types";
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

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
  margin: 8px;
  text-align: center;
  background: #9dd2ea;
`;

const TaskList = styled.div<{ isDraggingOver: boolean }>`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 30px;
`;

export default Column;
