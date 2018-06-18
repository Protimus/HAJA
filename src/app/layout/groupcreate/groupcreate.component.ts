import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-groupcreate',
    templateUrl: './groupcreate.component.html',
    styleUrls: ['./groupcreate.component.scss'],
    animations: [routerTransition()]
})
export class GroupCreateComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
