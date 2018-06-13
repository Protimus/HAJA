import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import { routerTransition } from '../../router.animations';
import { HttpClientModule } from '@angular/common/http';
import { TemperaturaService } from '../../temperatura.service';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        DashboardRoutingModule,
        HttpClientModule,
        StatModule
    ],
    providers: [TemperaturaService],
    declarations: [
        DashboardComponent
    ]
})

export class DashboardModule {}
