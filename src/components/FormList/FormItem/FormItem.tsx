import { IWAFItem } from "../../../types";
import { Draggable } from "react-beautiful-dnd";
import { Container, Handle } from "./FormItem.styles";
import useWAFStore from "../../../store/useWAFStore";

interface Props {
  formItem: IWAFItem;
  index: number;
}

const FormItem = ({ formItem, index }: Props) => {
  const { setState, ...state } = useWAFStore();
  const onDelete = (formId: string) => {
    const newFormItemIds = state.formItemIds.filter((id) => id !== formId);
    const newFormItems = Object.keys(state.formItems)
      .filter((key) => key !== formId)
      .reduce((obj: any, key) => {
        obj[key] = state.formItems[key];
        return obj;
      }, {});
    //test

    const newState = {
      formItems: newFormItems,
      formItemIds: newFormItemIds,
    };

    setState(newState);
  };
  return (
    <Draggable draggableId={formItem.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps} />
          {formItem.content}
          <button onClick={() => onDelete(formItem.id)}>지우기</button>
        </Container>
      )}
    </Draggable>
  );
};

export default FormItem;
