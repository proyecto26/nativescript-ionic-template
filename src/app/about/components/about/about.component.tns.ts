import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: 'about-page',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(private _router: RouterExtensions) { }

    ngOnInit() {
    }

    backPage() {
        this._router.back()
    }
}
