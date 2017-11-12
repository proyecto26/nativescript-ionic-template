import { Component, ElementRef, Renderer } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'ion-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor(translate: TranslateService, public element: ElementRef, public renderer: Renderer) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
