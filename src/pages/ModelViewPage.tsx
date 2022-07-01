import { useRecoilValue } from "recoil";
import styled from "styled-components";
import taskListAtom from "../recoil/taskList/atom";

const ModelViewPage = () => {
  const taskList = useRecoilValue(taskListAtom);
  return (
    <Container>
      <pre>tasks : {JSON.stringify(taskList.tasks, null, "\t")}</pre>
      <pre>columns : {JSON.stringify(taskList.columns, null, "\t")}</pre>
      <pre>
        columnOrder : {JSON.stringify(taskList.columnOrder, null, "\t")}
      </pre>
    </Container>
  );
};

const Container = styled("div")`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ModelViewPage;
