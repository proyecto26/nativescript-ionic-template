import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// nativescript
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES } from './app.common';

import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("CardView", () => require("nativescript-cardview").CardView);

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(<any>http, '/assets/i18n/', '.json');
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        TranslateModule.forRoot(),
        ...SHARED_MODULES
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
