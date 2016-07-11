import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

export const
    UPDATE_NAV_STATE = 'UPDATE_NAV_STATE';

@Injectable()

export class NavStateActions {

    constructor(private _store: Store<any>) {}

    public updateState(state) {
        this._store.dispatch(
            {
                type: UPDATE_NAV_STATE,
                payload: state
            }
        )
    }
}