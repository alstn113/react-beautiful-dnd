import { useRecoilValue } from "recoil";
import { Container } from "./ModelView.styles";
import taskListAtom from "../../store/taskList/atom";
import WAFAtom from "../../store/WAF/atom";

const ModelView = () => {
  const taskList = useRecoilValue(taskListAtom);
  const WAF = useRecoilValue(WAFAtom);
  return (
    <Container>
      <pre>
        taskList / columns : {JSON.stringify(taskList.columns, null, "\t")}
      </pre>
      <pre>WAF / columns : {JSON.stringify(WAF.formItemIds, null, "\t")}</pre>
    </Container>
  );
};

export default ModelView;
