import create from "zustand";
import CheckBoxForm from "../components/FormList/CheckBoxForm/CheckBoxForm";
import DropdonwForm from "../components/FormList/DropdownForm/DropdonwForm";
import LongAnswerForm from "../components/FormList/LongAnswerForm/LongAnswerForm";
import MutipleChoiceForm from "../components/FormList/MutipleChoiceForm/MutipleChoiceForm";
import ShortAnswerForm from "../components/FormList/ShortAnswerForm/ShortAnswerForm";
import { IWAF } from "../types";

interface States extends IWAF {}

interface Actions {
  setState: (newState: IWAF) => void;
}

const useWAFStore = create<States & Actions>((set) => ({
  // States
  formItems: {
    "form-1": { id: "form-1", content: <ShortAnswerForm /> },
    "form-2": { id: "form-2", content: <LongAnswerForm /> },
    "form-3": { id: "form-3", content: <MutipleChoiceForm /> },
    "form-4": { id: "form-4", content: <CheckBoxForm /> },
    "form-5": { id: "form-5", content: <DropdonwForm /> },
  },
  formItemIds: ["form-1", "form-2", "form-3", "form-4", "form-5"],

  // Actions
  setState: (newState) =>
    set(() => ({
      formItemIds: newState.formItemIds,
      formItems: newState.formItems,
    })),
}));

export default useWAFStore;
