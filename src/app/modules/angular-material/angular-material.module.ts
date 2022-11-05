import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const angularMaterial = [
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  exports: angularMaterial,
  imports: angularMaterial,
})
export class AngularMaterialModule {}
