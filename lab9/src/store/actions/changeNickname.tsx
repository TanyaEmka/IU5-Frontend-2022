import { createAction } from "@reduxjs/toolkit";

export const changeNickname = createAction<string>('NICKNAME/CHANGE');

export type NicknameActions = ReturnType<typeof changeNickname>;