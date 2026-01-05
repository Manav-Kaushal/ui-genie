import {
  combineReducers,
  configureStore,
  Middleware,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { apis } from "./api";
import { slices } from "./slice";

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];

const rootReducer = combineReducers({
  ...slices,
  ...apis.reduce((acc, api) => {
    acc[api.reducerPath] = api.reducer;
    return acc;
  }, {} as ReducersMapObject),
});

export function makeStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        ...apis.map((api) => api.middleware as Middleware)
      ),
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const store = makeStore();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
