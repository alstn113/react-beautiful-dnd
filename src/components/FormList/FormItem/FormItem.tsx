import { IWAFItem } from "../../../types";
import { Draggable } from "react-beautiful-dnd";
import { Container, Handle } from "./FormItem.styles";

interface Props {
  formItem: IWAFItem;
  index: number;
}

const FormItem = ({ formItem, index }: Props) => {
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
        </Container>
      )}
    </Draggable>
  );
};

export default FormItem;
