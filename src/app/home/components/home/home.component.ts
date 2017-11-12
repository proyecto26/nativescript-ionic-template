import { Component, OnInit } from '@angular/core'
import { MenuController } from 'ionic-angular'

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(public menuCtrl: MenuController) {}

    openMenu() {
        this.menuCtrl.open()
    }

    showAlert(message) {
        alert(message)
    }
}
