"use client";

import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store/store.js";

export default function Providers({ children }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
