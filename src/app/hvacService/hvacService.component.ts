import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavStateActions } from '../actionCreators/navState.actions';

@Component({
    selector: 'hvac-service',
    template: `
        <div class="hvac-container">
            <div class="hvac-content">
                <h2>HVAC Service</h2>
                <p class="summary">Summary about this section</p>
            </div>
        </div>
    `,
    styles: [`
        .hvac-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .hvac-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .hvac-content h2 {
            color: #0b8d45;
            align-self: center;
            margin-bottom: 0;
        }
        .summary {
            font-family: 'Roboto', sans-serif;
            color: #2d2d72;
            margin-top: 0;
            align-self: center;
        }
    `]
})
export class HvacServiceComponent implements OnInit, OnDestroy {
    constructor(private _navActions: NavStateActions) {}

    ngOnInit() {
        this._navActions.updateState({ 'topNav.activeSection': 'HVAC Service'});
    }

    ngOnDestroy() {
        this._navActions.updateState({ 'topNav.activeSection': ''});
    }
}