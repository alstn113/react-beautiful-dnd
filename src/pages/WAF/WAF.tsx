import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import FormItem from "../../components/FormList/FormItem/FormItem";
import useWAFStore from "../../store/useWAFStore";
import { IWAF } from "../../types";
import { Container, FormListContainer, Title, Wrapper } from "./WAF.styles";

const WAF = () => {
  const { setState, ...state } = useWAFStore();

  const onCreate = () => {
    const formId = `form-${Math.random()}`;
    const newFormItemIds = [formId, ...state.formItemIds];
    const newFormItems = {
      ...state.formItems,
      [formId]: { id: formId, content: formId },
    };
    const newState = {
      ...state,
      formItems: newFormItems,
      formItemIds: newFormItemIds,
    };

    setState(newState);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newFormItemIds = Array.from(state.formItemIds);
    newFormItemIds.splice(source.index, 1);
    newFormItemIds.splice(destination.index, 0, draggableId);

    const newState: IWAF = {
      ...state,
      formItemIds: newFormItemIds,
    };

    setState(newState);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Wrapper>
          <Title>WAF</Title>
          <button onClick={onCreate}>생성</button>
          <Droppable droppableId="form-list">
            {(provided, snapshot) => (
              <FormListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {state.formItemIds.map((formId, index) => {
                  const formItem = state.formItems[formId];
                  return (
                    <FormItem
                      key={formItem.id}
                      formItem={formItem}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </FormListContainer>
            )}
          </Droppable>
        </Wrapper>
      </Container>
    </DragDropContext>
  );
};

export default WAF;
