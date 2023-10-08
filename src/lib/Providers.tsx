"use client";

import { IChildrenCoponent } from "@/interface/common";
import { store } from "@/redux/app/store";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntdRegistry";

export default function Providers({ children }: IChildrenCoponent) {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
  );
}
