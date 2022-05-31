import { NicknameActions } from "../actions/action";

export interface INicknameReducer {
    nickname: string,
}

const initialState: INicknameReducer = {
    nickname: "",
}

export const nicknameReducer = (state = initialState, action: NicknameActions): INicknameReducer => {
    switch (action.type) {
        case 'NICKNAME/CHANGE':
            return {
                ...state,
                nickname: action.changer.newNickname,
            }
        default:
            return state;
    }
};