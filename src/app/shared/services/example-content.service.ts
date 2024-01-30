import * as basicComponent from '!raw-loader!../../examples/example-usage/basic-usage/basic-usage.component';
import * as basicHtml from '!raw-loader!../../examples/example-usage/basic-usage/basic-usage.component.html';
import * as basicDescription from '!raw-loader!../../examples/example-usage/basic-usage/description.md';
import * as exampleUsageModule from '!raw-loader!../../examples/example-usage/example-usage.module';
import * as exampleUsageLead from '!raw-loader!../../examples/example-usage/lead.md';
import * as inMemoryDescription from '!raw-loader!../../examples/loading-data/in-memory-array/description.md';
import * as inMemoryComponent from '!raw-loader!../../examples/loading-data/in-memory-array/employee-table.component';
import * as inMemoryHtml from '!raw-loader!../../examples/loading-data/in-memory-array/employee-table.component.html';
import * as lazyDescription from '!raw-loader!../../examples/loading-data/lazy-load/description.md';
import * as lazyComponent from '!raw-loader!../../examples/loading-data/lazy-load/lazy-load-example.component';
import * as lazyHtml from '!raw-loader!../../examples/loading-data/lazy-load/lazy-load-example.component.html';
import * as loadDataLead from '!raw-loader!../../examples/loading-data/lead.md';
import * as loadDataModule from '!raw-loader!../../examples/loading-data/loading-data.module';
import * as restDescription from '!raw-loader!../../examples/loading-data/using-rest-api/description.md';
import * as restComponent from '!raw-loader!../../examples/loading-data/using-rest-api/rest-example.component';
import * as restHtml from '!raw-loader!../../examples/loading-data/using-rest-api/rest-example.component.html';
import * as allowUnsortedSortComponent from '!raw-loader!../../examples/sort/allow-unsorted/allow-unsorted-example.component';
import * as allowUnsortedSortHtml from '!raw-loader!../../examples/sort/allow-unsorted/allow-unsorted-example.component.html';
import * as allowUnsortedSortDescription from '!raw-loader!../../examples/sort/allow-unsorted/description.md';
import * as enableDisableSortDescription from '!raw-loader!../../examples/sort/enable-disable/description.md';
import * as enableDisableSortComponent from '!raw-loader!../../examples/sort/enable-disable/enable-disable-sort-example.component';
import * as enableDisableSortHtml from '!raw-loader!../../examples/sort/enable-disable/enable-disable-sort-example.component.html';
import * as sortLead from '!raw-loader!../../examples/sort/lead.md';
import * as sortModule from '!raw-loader!../../examples/sort/sort.module';
import { Injectable, Type } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BasicUsageComponent } from '../../examples/example-usage/basic-usage/basic-usage.component';
import { EmployeeTableComponent } from '../../examples/loading-data/in-memory-array/employee-table.component';
import { LazyLoadExampleComponent } from '../../examples/loading-data/lazy-load/lazy-load-example.component';
import { RestExampleComponent } from '../../examples/loading-data/using-rest-api/rest-example.component';
import { AllowUnsortedExampleComponent } from '../../examples/sort/allow-unsorted/allow-unsorted-example.component';
import { EnableDisableSortExampleComponent } from '../../examples/sort/enable-disable/enable-disable-sort-example.component';










export interface ExampleContentStructure {
	[key: string]: ExampleContent;
}
export interface ExampleContent {
	lead: any;
	sections: Array<{
		component: Type<any>;
		title: string;
		fragment?: string;
		description: any;
		examples: Array<{
			title: string;
			code: string;
			lang: 'markup' | 'scss' | 'typescript' | 'js' | 'json';
		}>;
	}>;
}
@Injectable()
export class ExampleContentService {
	private path: ExampleContentStructure = {
		exampleUsage: {
			lead: exampleUsageLead,
			sections: [
				{
					component: BasicUsageComponent,
					title: 'Basic',
					description: basicDescription,
					examples: [
						{
							title: 'employee-table.component.html',
							code: basicHtml,
							lang: 'markup'
						},
						{
							title: 'employee-table.component.ts',
							code: basicComponent,
							lang: 'typescript'
						},
						{
							title: 'example-usage.module.ts',
							code: exampleUsageModule,
							lang: 'typescript'
						}
					]
				}
			]
		},
		loadingData: {
			lead: loadDataLead,
			sections: [
				{
					component: EmployeeTableComponent,
					title: 'In memory',
					description: inMemoryDescription,
					examples: [
						{
							title: 'employee-table.component.html',
							code: inMemoryHtml,
							lang: 'markup'
						},
						{
							title: 'employee-table.component.ts',
							code: inMemoryComponent,
							lang: 'typescript'
						},
						{
							title: 'loading-data.module.ts',
							code: loadDataModule,
							lang: 'typescript'
						}
					]
				},
				{
					component: RestExampleComponent,
					title: 'Using REST',
					description: restDescription,
					examples: [
						{
							title: 'rest-example.component.html',
							code: restHtml,
							lang: 'markup'
						},
						{
							title: 'rest-example.component.ts',
							code: restComponent,
							lang: 'typescript'
						},
						{
							title: 'loading-data.module.ts',
							code: loadDataModule,
							lang: 'typescript'
						}
					]
				},
				{
					component: LazyLoadExampleComponent,
					title: 'Lazy loading',
					description: lazyDescription,
					examples: [
						{
							title: 'rest-example.component.html',
							code: lazyHtml,
							lang: 'markup'
						},
						{
							title: 'rest-example.component.ts',
							code: lazyComponent,
							lang: 'typescript'
						},
						{
							title: 'loading-data.module.ts',
							code: loadDataModule,
							lang: 'typescript'
						}
					]
				}
			]
		},
		sort: {
			lead: sortLead,
			sections: [
				{
					component: AllowUnsortedExampleComponent,
					title: 'Change sort behavior',
					description: allowUnsortedSortDescription,
					examples: [
						{
							title: 'employee-table.component.html',
							code: allowUnsortedSortHtml,
							lang: 'markup'
						},
						{
							title: 'employee-table.component.ts',
							code: allowUnsortedSortComponent,
							lang: 'typescript'
						},
						{
							title: 'sort.module.ts',
							code: sortModule,
							lang: 'typescript'
						}
					]
				},
				{
					component: EnableDisableSortExampleComponent,
					title: 'Enable/disable sort',
					description: enableDisableSortDescription,
					examples: [
						{
							title: 'employee-table.component.html',
							code: enableDisableSortHtml,
							lang: 'markup'
						},
						{
							title: 'employee-table.component.ts',
							code: enableDisableSortComponent,
							lang: 'typescript'
						},
						{
							title: 'sort.module.ts',
							code: sortModule,
							lang: 'typescript'
						}
					]
				}
			]
		}
	};
	constructor(private _sanitizer: DomSanitizer) { }
	// getExamples(path: string): ExampleContent {
	// 	// use marked for parsing markdown files
	// 	const MD = marked.setOptions({});

	// 	// convert path to camel case and return configuration based on it
	// 	const CONFIGURATION = this.path[this.toCamelCase(path)];

	// 	// return empty config if no config was found for path
	// 	if (!CONFIGURATION) {
	// 		return {
	// 			lead: '<h1>Examples for this feature is missing!</h1>',
	// 			sections: []
	// 		};
	// 	}

	// 	// prepare configuration for demo wrapper (parse markdown files in config, add fragment for anchor links etc.)
	// 	return {
	// 		lead: this._sanitizer.bypassSecurityTrustHtml(
	// 			MD.parse(CONFIGURATION.lead)
	// 		),
	// 		sections: CONFIGURATION.sections.map(section => {
	// 			return {
	// 				...section,
	// 				...{
	// 					description: this._sanitizer.bypassSecurityTrustHtml(
	// 						MD.parse(section.description)
	// 					),
	// 					title: section.title,
	// 					fragment: this.toCamelCase(section.title)
	// 				}
	// 			};
	// 		})
	// 	};
	// }

	toCamelCase(string: string): string {
		return string
			.toLowerCase()
			.replace(/[\s-/]([a-z])/g, g => g[1].toUpperCase());
	}
}
