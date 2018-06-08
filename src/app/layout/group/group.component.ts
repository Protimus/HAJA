import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
    animations: [routerTransition()]
})
export class GroupComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
