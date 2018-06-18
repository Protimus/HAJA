import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupEditRoutingModule } from './groupedit-routing.module';
import { GroupEditComponent } from './groupedit.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, GroupEditRoutingModule, PageHeaderModule],
    declarations: [GroupEditComponent]
})
export class GroupEditModule {}
