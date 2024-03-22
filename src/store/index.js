import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authLogicReducer from "./auth.store/auth.reducer";
import envelopeLogicReducer from "./envelope.store/envelope.reducer";

const rootReducer = combineReducers({
  auth: authLogicReducer,
  envelope: envelopeLogicReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// Inferred type
export default store;
