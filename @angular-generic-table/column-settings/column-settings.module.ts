import { GenericTableModule } from '@angular-generic-table/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import {
	GtColumnPipe,
	GtColumnSettingsComponent
} from './components/gt-column-settings.component';

@NgModule({
	imports: [CommonModule, GenericTableModule, DragulaModule],
	declarations: [GtColumnSettingsComponent, GtColumnPipe],
	exports: [GtColumnSettingsComponent, GtColumnPipe]
})
export class ColumnSettingsModule { }
