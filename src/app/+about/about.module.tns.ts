import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './about.common';

@NgModule({
    imports: [
        NativeScriptRouterModule,
        ...SHARED_MODULES,
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AboutModule { }
