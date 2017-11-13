import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core'
import { RadSideDrawer, DrawerTransitionBase, ScaleUpTransition, PushTransition, SideDrawerLocation } from "nativescript-pro-ui/sidedrawer"
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular"

@Component({
    moduleId: module.id,
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
    private _sideDrawerTransition: DrawerTransitionBase
    private _currentLocation : SideDrawerLocation
    private drawer: RadSideDrawer

    @ViewChild(RadSideDrawerComponent) 
    public drawerComponent: RadSideDrawerComponent

    ngOnInit() {
        this.sideDrawerTransition = new ScaleUpTransition();
        this.currentLocation = SideDrawerLocation.Left
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    set sideDrawerTransition(value: DrawerTransitionBase) {
        this._sideDrawerTransition = value;
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
