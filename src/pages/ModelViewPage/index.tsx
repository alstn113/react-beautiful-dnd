import { useRecoilValue } from "recoil";
import * as S from "./styles";
import taskListAtom from "../../store/taskList/atom";

const ModelViewPage = () => {
  const taskList = useRecoilValue(taskListAtom);
  return (
    <S.Container>
      <pre>tasks : {JSON.stringify(taskList.tasks, null, "\t")}</pre>
      <pre>columns : {JSON.stringify(taskList.columns, null, "\t")}</pre>
      <pre>
        columnOrder : {JSON.stringify(taskList.columnOrder, null, "\t")}
      </pre>
    </S.Container>
  );
};

export default ModelViewPage;
