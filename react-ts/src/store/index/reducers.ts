import { server, name, IndexState, IndexAction } from "./types";

const indexState: IndexState = {
  server: "all",
  name: "",
};

const indexReducer = (state = indexState, action: IndexAction): IndexState => {
  const { type } = action;
  switch (type) {
    case server:
    case name:
      return {
        ...state,
        [type]: action.payload,
      };
    default:
      return state;
  }
};

export default indexReducer;
