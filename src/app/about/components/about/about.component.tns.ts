import { Component } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { Common } from './about.component.common'

@Component({
    moduleId: module.id,
    selector: 'about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends Common {

    constructor(private _router: RouterExtensions) {
        super()
    }

    goBack() {
        this._router.back()
    }
}
