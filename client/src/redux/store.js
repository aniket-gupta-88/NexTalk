import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk], // You can add any other middleware here as well
});

const DataProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
