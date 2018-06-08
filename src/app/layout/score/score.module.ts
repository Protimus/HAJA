import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScoreComponent } from './score.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ScoreRoutingModule, PageHeaderModule],
    declarations: [ScoreComponent]
})
export class ScoreModule {}
