import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { Provider as ChakraProvider } from "./components/ui/provider.jsx";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ReduxProvider>
);
