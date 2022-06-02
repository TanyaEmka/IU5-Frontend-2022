import { createAction } from "@reduxjs/toolkit";
import { ShortUserProps } from "../../UserCard/UserCardTypes";

export const changeUserCard = createAction<ShortUserProps>('USERCARD/CHANGE');

export type UserCardActions = ReturnType<typeof changeUserCard>;