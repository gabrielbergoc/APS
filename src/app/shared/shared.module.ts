import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { MapToPipe } from './pipes/map-to.pipe';
import { HttpClientModule } from '@angular/common/http';

const angularModules = [
  CommonModule,
  HttpClientModule,
]

const angularMaterialModules = [
  MatTableModule,
]

const declarations = [
  TableComponent,
  MapToPipe,
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    ...angularModules,
    ...angularMaterialModules,
  ],
  exports: [
    ...angularModules,
    ...declarations,
    ...angularMaterialModules,
  ]
})
export class SharedModule { }
