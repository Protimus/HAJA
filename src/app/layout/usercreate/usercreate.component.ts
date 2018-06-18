import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-usercreate',
    templateUrl: './usercreate.component.html',
    styleUrls: ['./usercreate.component.scss'],
    animations: [routerTransition()]
})
export class UserCreateComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
