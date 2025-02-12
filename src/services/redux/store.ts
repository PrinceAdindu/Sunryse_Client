import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers/rootReducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
