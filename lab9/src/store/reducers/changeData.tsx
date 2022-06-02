import { DataActions } from "../actions/changeData";
import { UsersProps } from "../../AppTypes";

export interface IDataReducer {
    userData: UsersProps;
}

const initialState: IDataReducer = {
    userData: {
        total_count: -1, 
        incomplete_results: false,
        items: []
    }
}

export const dataReducer = (state = initialState, action: DataActions): IDataReducer => {
    switch (action.type) {
        case 'DATA/CHANGE':
            return {
                ...state,
                userData: action.payload
            }
        default:
            return state;
    }
}