import { atom } from "recoil";
import { IWAF } from "../../types";

const WAFAtom = atom<IWAF>({
  key: "WAFAtom",
  default: {
    title: "WAF",
    formItems: {
      "form-1": { id: "form-1", content: "밥먹기" },
      "form-2": { id: "form-2", content: "공부하기" },
      "form-3": { id: "form-3", content: "청소하기" },
      "form-4": { id: "form-4", content: "프로젝트" },
      "form-5": { id: "form-5", content: "스터디" },
      "form-6": { id: "form-6", content: "공모전" },
    },
    formItemIds: ["form-1", "form-2", "form-3", "form-4", "form-5", "form-6"],
  },
});

export default WAFAtom;
