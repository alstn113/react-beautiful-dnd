export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

export interface ITask {
  id: string;
  content: string;
}

export interface IInitialData {
  tasks: {
    [key: string]: ITask;
  };
  columns: {
    [key: string]: IColumn;
  };
  columnOrder: string[];
}
