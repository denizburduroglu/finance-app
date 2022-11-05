import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

const angularMaterial = [
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
];

@NgModule({
  exports: angularMaterial,
  imports: angularMaterial,
})
export class AngularMaterialModule {}
