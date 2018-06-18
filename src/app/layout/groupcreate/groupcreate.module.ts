import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupCreateRoutingModule } from './groupcreate-routing.module';
import { GroupCreateComponent } from './groupcreate.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, GroupCreateRoutingModule, PageHeaderModule],
    declarations: [GroupCreateComponent]
})
export class GroupCreateModule {}
