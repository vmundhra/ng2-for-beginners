import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'bs-panel',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content select=".body"></ng-content>
            </div>
        </div>
    `
})
export class BootstrapPanelComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}