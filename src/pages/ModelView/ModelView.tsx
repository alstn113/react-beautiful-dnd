import { Container } from "./ModelView.styles";
import useTaskListStore from "../../store/useTaskListStore";
import useWAFStore from "../../store/useWAFStore";

const ModelView = () => {
  const { columns } = useTaskListStore();
  const { formItemIds } = useWAFStore();
  return (
    <Container>
      <pre>taskList / columns : {JSON.stringify(columns, null, "\t")}</pre>
      <pre>WAF / columns : {JSON.stringify(formItemIds, null, "\t")}</pre>
    </Container>
  );
};

export default ModelView;
