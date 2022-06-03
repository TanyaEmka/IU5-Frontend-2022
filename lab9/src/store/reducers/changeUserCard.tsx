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
                userCard: {
                    name: action.payload.name,
                    bio: action.payload.bio,
                    location: action.payload.location,
                    avatar: action.payload.avatar
                }
            }
        default:
            return state
    }
}