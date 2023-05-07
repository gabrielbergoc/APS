import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { TableComponent } from './components/table/table.component';
import { MapToPipe } from './pipes/map-to.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const angularModules = [
  CommonModule,
  HttpClientModule,
]

const angularMaterialModules = [
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
]

const declarations = [
  TableComponent,
  MapToPipe,
];

const importsExports = [
  NgxChartsModule,
];

@NgModule({
  declarations: [
    ...declarations
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
