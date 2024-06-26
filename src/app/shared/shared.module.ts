import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { TableComponent } from './components/table/table.component';
import { MapToPipe } from './pipes/map-to.pipe';

const angularModules = [
  CommonModule,
  HttpClientModule,
]

const angularMaterialModules = [
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule,
  MatExpansionModule,
]

const declarations = [
  TableComponent,
  MapToPipe,
  FloatingButtonComponent,
];

const importsExports = [
  NgxChartsModule,
];

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    ...importsExports,
    ...angularModules,
    ...angularMaterialModules,
  ],
  exports: [
    ...declarations,
    ...importsExports,
    ...angularModules,
    ...angularMaterialModules,
  ]
})
export class SharedModule { }
