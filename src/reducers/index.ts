import { AnyAction, combineReducers } from 'redux';

import { Actions } from '../actions';

const defaultCountReducer = (state = 0, action: AnyAction) => {
    switch (action.type) {
        case Actions.SET_DEFAULT_COUNT:
            return action.payload.value;
        default:
            return state;
    }
};

const countReducer = (state = 0, action: AnyAction) => {
    switch (action.type) {
        case Actions.INCREASE_COUNT:
            return state + action.payload.value;
        case Actions.DECREASE_COUNT:
            return state - action.payload.value;
        case Actions.RESET_COUNT:
            return action.payload.value;
        default:
            return state;
    }
};

const saveReducer = (state = false, action: AnyAction) => {
    switch (action.type) {
        case Actions.SET_SAVE_TRUE:
            return true;
        case Actions.SET_SAVE_FALSE:
            return false;
        default:
            return state;
    }
};

export interface RootState {
    count: number;
    defaultCount: number;
    save: boolean;
}

export default combineReducers({
    count: countReducer,
    defaultCount: defaultCountReducer,
    save: saveReducer,
});
