import { Component, OnInit } from '@angular/core'

import { Api  } from '../../../providers/api/api';

@Component({
    moduleId: module.id,
    selector: 'grid-page',
    providers: [
        Api
    ],
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
    items = []
    constructor(public api: Api) { }

    ngOnInit() {
        this.api.get('albums/1/photos').subscribe((res : any[]) => {
            this.items = res
        })
    }
}
