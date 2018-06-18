import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-useredit',
    templateUrl: './useredit.component.html',
    styleUrls: ['./useredit.component.scss'],
    animations: [routerTransition()]
})
export class UserEditComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
