import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreateRoutingModule } from './usercreate-routing.module';
import { UserCreateComponent } from './usercreate.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, UserCreateRoutingModule, PageHeaderModule],
    declarations: [UserCreateComponent]
})
export class UserCreateModule {}
