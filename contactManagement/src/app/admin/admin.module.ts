import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewAdminComponent } from './components/view-admin/view-admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { LandingPageAdminComponent } from './components/landing-page-admin/landing-page-admin.component';

@NgModule({
  declarations: [
    ViewAdminComponent,
    EditAdminComponent,
    LandingPageAdminComponent,
  ],
  imports: [AdminRoutingModule, SharedModule],
})
export class AdminModule {}
