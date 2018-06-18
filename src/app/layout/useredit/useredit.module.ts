import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './useredit-routing.module';
import { UserEditComponent } from './useredit.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, UserEditRoutingModule, PageHeaderModule],
    declarations: [UserEditComponent]
})
export class UserEditModule {}
