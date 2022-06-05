import { createAction } from "@reduxjs/toolkit";
import { UsersProps } from "../../AppTypes";

export const changeData = createAction<UsersProps>('DATA/CHANGE');

export type DataActions = ReturnType<typeof changeData>;