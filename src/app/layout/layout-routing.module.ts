import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'group', loadChildren: './group/group.module#GroupModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'score', loadChildren: './score/score.module#ScoreModule' },
            { path: 'groupcreate', loadChildren: './groupcreate/groupcreate.module#GroupCreateModule' },
            { path: 'usercreate', loadChildren: './usercreate/usercreate.module#UserCreateModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
