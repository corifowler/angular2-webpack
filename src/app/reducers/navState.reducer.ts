import { Reducer, Action } from '@ngrx/store';
import { UPDATE_NAV_STATE } from '../actionCreators/navState.actions';

const initialState = {
    'topNav.activeSection': '',
    'bottomNav.activeSection': ''
}

function makeCopy(initial) {
    let copied = {};
    Object.keys(initial).map(p => copied[p] = initial[p]);
    return copied;
}

export const navState = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_NAV_STATE:
            let newState = makeCopy(state);
            Object.keys(action.payload).map((prop) => {
                if (prop in state) {
                    let newValue = action.payload[prop];
                    newState[prop] = newValue;
                } else {
                    console.log('invalid property passed into reducer');
                }
            });
            return newState;

        default:
            return state;

    }
};