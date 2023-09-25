import { ChildrenCoponent } from "@/interface/common";
import { store } from "@/redux/app/store";
import { Provider } from "react-redux";

export default function Providers({ children }: ChildrenCoponent) {
  return <Provider store={store}>{children}</Provider>;
}
