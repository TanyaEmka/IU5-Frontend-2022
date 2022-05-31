import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";

export interface IAppStore {
}

export const reducers = combineReducers({
});

export const store = configureStore({
    reducer: {...reducers},
})

export type AppDispath = typeof store.dispatch;

export const useAppDispath = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<IAppStore> = useSelector;
