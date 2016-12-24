import { Component } from '@angular/core'

@Component({
    selector:`note-container`,
    template:`
<div class="row center-xs notes">
    <div class="col-xs-6 creator">
    note creator here
    </div>
    <div class="notes col-xs-8">
        <div class="row between-xs">
            <note-card
            class="col-xs-4"
            [notedata]="note"
            *ngFor = "let note of notes">
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
            [{ title:"Hello", value:"Eat food", color:"lightblue"},
            { title:"Dog", value:"Go for walk", color:"red"},
            { title:"Sleep", value:"Go to bed", color:"green"}]
}