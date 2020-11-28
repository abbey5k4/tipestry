import { HANDLE_CARD_CHANGE } from "../types";

const initialState = {
    level: "cardOne"
}

const Card = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_CARD_CHANGE :
            return {
                ...state, 
                level: action.payload
            };
        default:
            return state;
    }
};

export default Card;