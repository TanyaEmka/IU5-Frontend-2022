import { UserCardActions } from "../actions/changeUserCard";
import { ShortUserProps } from "../../UserCard/UserCardTypes";

export interface IUserCardReducer {
    userCard: ShortUserProps;
}

const initialState: IUserCardReducer = {
    userCard: {
        name: "",
        bio: "",
        location: "",
        avatar: ""
    }
}

export const userCardReducer = (state = initialState, action: UserCardActions): IUserCardReducer => {
    switch (action.type) {
        case 'USERCARD/CHANGE':
            return {
                ...state,
                userCard: action.payload
            }
        default:
            return state
    }
}