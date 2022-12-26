import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { LandingPageAdminComponent } from './components/landing-page-admin/landing-page-admin.component';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landingPage' },
  {
    path: 'edit',
    component: EditAdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'view',
    component: ViewAdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'landingPage',
    component: LandingPageAdminComponent,
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
