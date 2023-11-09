import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.css";
import { Provider } from "react-redux";
import store from "./app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
