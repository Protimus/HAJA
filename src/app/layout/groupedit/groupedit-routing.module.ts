import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupEditComponent } from './groupedit.component';

const routes: Routes = [
    {
        path: '', component: GroupEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupEditRoutingModule {
}
