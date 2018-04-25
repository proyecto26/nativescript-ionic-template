import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';

declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'ion-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor(translate: TranslateService) {
        translate.setTranslation('en', require('../assets/i18n/en.json'));
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
