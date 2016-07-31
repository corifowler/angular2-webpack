import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavStateActions } from '../actionCreators/navState.actions';

@Component({
    selector: 'building-automation',
    template: `
        <div class="automation-container">
            <div class="automation-content">
                <h2>Building Automation</h2>
                <p class="summary">Summary about this section</p>
            </div>
        </div>
    `,
    styles: [`
        .automation-container {
            background-color: #2d2d72;
            display: flex;
            justify-content: center;
        }
        .automation-content {
            background-color: #ECEFF1;
            display: flex;
            flex-direction: column;
            padding: 1.25em;
            margin: 1em;
        }
        .automation-content h2 {
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
export class BuildingAutomationComponent implements OnInit, OnDestroy {
    constructor(private _navActions: NavStateActions) {}

    ngOnInit() {
        this._navActions.updateState({ 'topNav.activeSection': 'Building Automation'});  
    }

    ngOnDestroy() {
        this._navActions.updateState({ 'topNav.activeSection': ''});  
    }

}