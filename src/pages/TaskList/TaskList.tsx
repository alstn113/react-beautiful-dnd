import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "../../components/TaskList/Column/Column";
import useTaskListStore from "../../store/useTaskListStore";
import { IColumn, ITaskList, ITask } from "../../types";

import { Container } from "./TaskList.styles";

function TaskList() {
  const { setState, ...state } = useTaskListStore();

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    // same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn: IColumn = {
        ...finish,
        taskIds: newTaskIds,
      };

      const newState: ITaskList = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart: IColumn = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish: IColumn = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState: ITaskList = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {state.columnOrder.map((columnId) => {
          const column: IColumn = state.columns[columnId];
          const tasks: ITask[] = column.taskIds.map(
            (taskId) => state.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
}

export default TaskList;
