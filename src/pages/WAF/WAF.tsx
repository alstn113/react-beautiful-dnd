import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import FormItem from "../../components/FormList/FormItem/FormItem";
import WAFAtom from "../../store/WAF/atom";
import { IWAF } from "../../types";
import { Container, FormListContainer, Title, Wrapper } from "./WAF.styles";

const WAF = () => {
  const [state, setState] = useRecoilState(WAFAtom);

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
                {/* {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))} */}
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
