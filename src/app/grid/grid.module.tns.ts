import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './grid.common';

import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";

@NgModule({
    imports: [
        ...SHARED_MODULES,
        NativeScriptUIListViewModule
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GridModule { }
