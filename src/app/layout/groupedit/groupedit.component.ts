import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-groupedit',
    templateUrl: './groupedit.component.html',
    styleUrls: ['./groupedit.component.scss'],
    animations: [routerTransition()]
})
export class GroupEditComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
