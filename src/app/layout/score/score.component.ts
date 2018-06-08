import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.scss'],
    animations: [routerTransition()]
})
export class ScoreComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
