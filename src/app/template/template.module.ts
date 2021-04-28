import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BasicosComponent } from './basicos/basicos.component';
import { CustomMinDirective } from './directives/custom-min.directive';
@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent,
    CustomMinDirective,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TemplateModule {}
