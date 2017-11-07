import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private _router: Router) {}

    ngOnInit() {
        
    }

    showAlert(message) {
        let options = {
            title: "Custom Alert",
            message: message,
            okButtonText: "OK"
        };
        alert(options);
    }
}
