import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './home.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }