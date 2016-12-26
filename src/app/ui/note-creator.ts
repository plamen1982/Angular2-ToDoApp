import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core'


@Component({
    selector:'note-creator',
    template:`
    <div class="note-creator shadow-2">
        <form class="row"
        (submit)="createNewNote()"
        >

        <input
            type = "text"
            [(ngModel)] = "newNote.title"
            name = "newNoteTitle"
            placeholder="Title"
            class = "col-xs-10 title inputNote full"
            (focus) = "showForm()"
            required
          >
          <input
          type = "text"
          [(ngModel)] = "newNote.value"
          name = "newNoteValue"
          placeholder="Take a note..."
          class = "col-xs-10 value inputNote full"
          *ngIf = "isFocused"
          required
          >

            <color-picker [(newNote)] = "newNote">

          </color-picker>

          <div class = "actions col-xs-12 row between-xs">
                <button
                type="submit"
                class="btn-light inputNote"
                *ngIf = "isFocused"
                >
                Done
                </button>
          </div>
        </form>
    </div>
    `,
    styles:[`
        .note-creator {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
        }
        .title {
            font-weight: bold;
            color: rgba(0,0,0,0.8);
        }
        .full {
           height: 2.5em;
        }
        .inputNote{
             border-bottom: 2px solid lightgrey;
        }
        input:focus {
             background-color: azure;
        }
    `]
})



export class NoteCreator {

    @Input() newNote = {
        title:'',
        value:'',
        color:''
    }

    isFocused = false;

    showForm () {
        this.isFocused =  !this.isFocused
    }
    @Output() createNote = new EventEmitter()

    createNewNote(){

        const {title, value, color} = this.newNote;

        if(title&&value) {
            this.createNote.next({title, value, color})
        }
        this.newNote.title = ''
        this.newNote.value = ''
        this.newNote.color = ''

    }
}