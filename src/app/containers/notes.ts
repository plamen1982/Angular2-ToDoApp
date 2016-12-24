import { Component } from '@angular/core'

@Component({
    selector:`note-container`,
    template:`
<div class="row center-xs notes">
    <div class="col-xs-6 creator">
        <note-creator (createNote)="addCard($event)"></note-creator>
    </div>
    <div class="notes col-xs-8">
        <div class="row between-xs">
            <note-card
            class="col-xs-4"
            [notedata]="note"
            *ngFor = "let note of notes; let i = index"
            (checked) = "removeCard(i)"
            >
            </note-card>
        </div>
    </div>
</div>
    `,
    styles:[`
.notes {
    padding-top: 50px;
}
.creator {
    margin-bottom: 40px;
}

    `]
})

export class NoteContainer {
      notes =
            [
                { title:"Hello", value:"Eat food", color:"lightblue"},
            { title:"Dog", value:"Go for walk", color:"red"},
            { title:"Sleep", value:"Go to bed", color:"green"},
            ]
    removeCard(i) {
        this.notes.splice(i, 1)
    }
    addCard(note) {
        this.notes.push(note)
    }
}
