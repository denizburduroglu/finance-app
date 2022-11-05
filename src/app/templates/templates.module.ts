import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';
import { ProfilePhotoTemplateComponent } from './profile-photo-template/profile-photo-template.component';
import { ChartTemplateComponent } from './chart-template/chart-template.component';

const templates = [ProfilePhotoTemplateComponent, ChartTemplateComponent];

@NgModule({
  declarations: templates,
  exports: templates,
  imports: [CommonModule, AngularMaterialModule],
})
export class TemplatesModule {}
