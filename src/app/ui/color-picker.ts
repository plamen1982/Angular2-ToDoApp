import {
    Component,
    Input,
    Output,
    EventEmitter

} from '@angular/core'



@Component({
    selector: 'color-picker',
    template: `
<div class="color-selector">
  <div class="selector row center-xs">
    <div class="color">
          <i class="material-icons icon">color_lens
               <input
               type="color"
               [(ngModel)] = "newNote.color"
               name="newNoteColor">
           </i>
    </div>
  </div>
</div>

    `,
    styles:[`
.color-selector {
    position: relative;
}
.selector {
    min-width: 120px;
    border: 1px solid lightgrey;
    padding: 10px;
    background-color: #efefef;
    position: absolute;
    top: -20px;
    left: 0;
}
.color {
    height: 27px;
    width: 27px;
    border-radius: 100%;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 10px;
}
.color:hover {
    border: 2px solid darkgrey;
    }
.icon {
    font-size: 1.4rem;
    color: grey;
    cursor: pointer;
}
    `]
})

export class ColorPicker {
    @Input() newNote = {

        color:''

    }
}


