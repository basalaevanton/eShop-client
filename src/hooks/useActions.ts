import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/action-creators";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
