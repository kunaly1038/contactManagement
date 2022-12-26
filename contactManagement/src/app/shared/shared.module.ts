import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ObserversModule } from '@angular/cdk/observers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { HeaderComponent } from './components/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ObserversModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    ObserversModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
