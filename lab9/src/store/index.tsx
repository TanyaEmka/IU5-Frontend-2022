import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { INicknameReducer, nicknameReducer } from "./reducers/reducer";
import { NicknameActions } from "./actions/action";
import thunk from "redux-thunk";

export interface IAppStore {
    nicknameChanger: INicknameReducer,
}

export const reducers = combineReducers({
    nicknameChanger: nicknameReducer,
});

export type AppActions = NicknameActions;

export const store = configureStore({
    reducer: {...reducers},
})

export type AppDispath = typeof store.dispatch;

export const useAppDispath = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<IAppStore> = useSelector;
