import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { INicknameReducer, nicknameReducer } from "./reducers/changeNickname";
import { NicknameActions } from "./actions/changeNickname";

export interface IAppStore {
    nicknameReducer: INicknameReducer,
}

export type AppActions = NicknameActions;

const store = configureStore({
    reducer: nicknameReducer
});

export default store;

export type AppDispath = typeof store.dispatch;

export const useAppDispath = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<IAppStore> = useSelector;
