export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

export interface ITask {
  id: string;
  content: string;
}

export interface ITaskList {
  tasks: {
    [key: string]: ITask;
  };
  columns: {
    [key: string]: IColumn;
  };
  columnOrder: string[];
}

export interface IFormItem {
  id: string;
  content: string;
}

export interface IWAF {
  title: string;
  formItems: {
    [key: string]: IFormItem;
  };
  formItemIds: string[];
}
