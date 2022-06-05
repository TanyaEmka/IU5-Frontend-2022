import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";

import { INicknameReducer, nicknameReducer } from "./reducers/changeNickname";
import { IDataReducer, dataReducer } from "./reducers/changeData";
import { IUserCardReducer, userCardReducer } from "./reducers/changeUserCard";

import { NicknameActions } from "./actions/changeNickname";
import { DataActions } from "./actions/changeData";
import { UserCardActions } from "./actions/changeUserCard";

export interface IAppStore {
    nicknameReducer: INicknameReducer,
    dataReducer: IDataReducer,
    userCardReducer: IUserCardReducer
}

export type AppActions = NicknameActions | DataActions | UserCardActions;

const rootReducer = combineReducers({
    nicknameR: nicknameReducer,
    dataR: dataReducer,
    userCardR: userCardReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

export type AppDispath = typeof store.dispatch;

export const useAppDispath = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<IAppStore> = useSelector;
