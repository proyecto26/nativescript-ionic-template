import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './home.common';
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

@NgModule({
    imports: [
        ...SHARED_MODULES,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }