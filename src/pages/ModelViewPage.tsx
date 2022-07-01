import { useRecoilValue } from "recoil";
import taskListAtom from "../recoil/taskList/atom";

const ModelViewPage = () => {
  const taskList = useRecoilValue(taskListAtom);
  return <div>{JSON.stringify(taskList)}</div>;
};

export default ModelViewPage;
