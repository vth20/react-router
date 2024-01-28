import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileLogicReducer from "./profile.store/profile.reducer";
import appLogicReducer from "./app.store/app.reducer";

const rootReducer = combineReducers({
  app: appLogicReducer,
  profile: profileLogicReducer,
});

const store = configureStore({ reducer: rootReducer });
// Inferred type
export default store;
