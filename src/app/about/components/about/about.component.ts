import { Component } from '@angular/core'
import { Common } from './about.component.common'

@Component({
    moduleId: module.id,
    selector: 'about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends Common {

    constructor() {
        super()
    }
}
