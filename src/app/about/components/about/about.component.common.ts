import { OnInit } from '@angular/core'

class Autor {
    public name: String
    public description: String
}

export class Common implements OnInit {
    autor = new Autor()

    constructor() { }

    ngOnInit() {
        this.autor.name = 'Juan David Nicholls Cardona'
        this.autor.description = 'FullStack Developer. Focused on Web, Mobile, Gaming and Cloud Technologies. #JS #Angular #Ionic #NativeScript #MongoDB #NodeJS #Azure #Hybrid #Phaser'
    }
}
