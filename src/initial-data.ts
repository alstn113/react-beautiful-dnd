import { IInitialData } from "./types";

const initialData: IInitialData = {
  tasks: {
    "task-1": { id: "task-1", content: "밥먹기" },
    "task-2": { id: "task-2", content: "운동하기" },
    "task-3": { id: "task-3", content: "알고리즘 공부" },
    "task-4": { id: "task-4", content: "스터디 계획" },
    "task-5": { id: "task-5", content: "스터디 발표" },
    "task-6": { id: "task-6", content: "스터디 공부" },
    "task-7": { id: "task-7", content: "프로젝트 인원 모집" },
    "task-8": { id: "task-8", content: "프로젝트 사전조사" },
    "task-9": { id: "task-9", content: "프로젝트 개발" },
    "task-10": { id: "task-10", content: "노래 듣기" },
    "task-11": { id: "task-11", content: "수면" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "할 일",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "진행 중",
      taskIds: [
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
        "task-10",
        "task-11",
      ],
    },
    "column-3": {
      id: "column-3",
      title: "완료",
      taskIds: [],
    },
  },
  // column을 순서대로 map으로 뿌리기 위해서 만들어줌
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
