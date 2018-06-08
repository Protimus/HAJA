import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, GroupRoutingModule, PageHeaderModule],
    declarations: [GroupComponent]
})
export class GroupModule {}
