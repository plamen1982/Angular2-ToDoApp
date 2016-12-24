import {Component} from '@angular/core'

@Component ({
    selector : 'main-container',
    template:`<div>
                    <navbar></navbar>
                    <main> Some fancy content</main>
                    <note-container></note-container>
             </div>`,
    styles:[`

    `]
})

export class Main {}