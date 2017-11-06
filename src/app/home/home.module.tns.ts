import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular';
// app
import { HomeComponent } from './components/home/home.component';
import { SHARED_MODULES } from './home.common';

@NgModule({
    imports: [
        NativeScriptRouterModule,
        ...SHARED_MODULES
    ],
    declarations: [HomeComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule {

    constructor( @Optional() @SkipSelf() parentModule: HomeModule) {
        if (parentModule) {
            throw new Error('HomeModule already loaded; Import in root module only.');
        }
    }
}