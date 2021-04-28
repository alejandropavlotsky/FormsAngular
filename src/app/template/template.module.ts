import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { BasicosComponent } from './basicos/basicos.component';

@NgModule({
  declarations: [BasicosComponent, DinamicosComponent, SwitchesComponent],
  imports: [CommonModule, TemplateRoutingModule, FormsModule],
})
export class TemplateModule {}
