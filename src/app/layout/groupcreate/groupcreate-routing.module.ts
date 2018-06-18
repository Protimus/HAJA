import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupCreateComponent } from './groupcreate.component';

const routes: Routes = [
    {
        path: '', component: GroupCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupCreateRoutingModule {
}
