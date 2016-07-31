import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavStateActions } from '../actionCreators/navState.actions';

@Component({
    selector: 'energy-efficiency',
    template: `
        <div class="efficiency-container">
            <div class="efficiency-content">
                <h2>Energy Efficiency</h2>
                <p class="summary">Summary about this section</p>
            </div>
        </div>
    `,
    styles: [`
        .efficiency-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .efficiency-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .efficiency-content h2 {
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
export class EnergyEfficiencyComponent implements OnInit, OnDestroy {
    constructor(private _navActions: NavStateActions) {}

    ngOnInit() {
        this._navActions.updateState({ 'topNav.activeSection': 'Energy Efficiency'});
    }

    ngOnDestroy() {
        this._navActions.updateState({ 'topNav.activeSection': ''});   
    }
}