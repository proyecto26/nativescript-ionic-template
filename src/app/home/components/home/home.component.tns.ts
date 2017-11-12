import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { RadSideDrawer, SideDrawerLocation } from "nativescript-pro-ui/sidedrawer"
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular"

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
    private _currentLocation : SideDrawerLocation
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent
    private drawer: RadSideDrawer

    ngOnInit() {
        this.currentLocation = SideDrawerLocation.Left
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer
    }

    get currentLocation(): SideDrawerLocation {
        return this._currentLocation
    }

    set currentLocation(value: SideDrawerLocation) {
        this._currentLocation = value
    }

    openMenu() {
        this.drawer.showDrawer()
    }

    closeMenu() {
        this.drawer.closeDrawer()
    }

    showAlert(message) {
        alert(message)
    }
}
