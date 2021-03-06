import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core'

@Component({
    selector: `note-card`,
    template: `
<div class="note-card row shadow-1"
[ngStyle] ="{ 'background-color': notedata.color }"
(mouseleave) ="toggleVisiable()"
(mouseenter) = "toggleVisiable()"
>
    <div class="icon" *ngIf = "checkVisible" (click)="removeCard()">
        <i class="material-icons value">check</i>
    </div>
    <div class="col-xs-12 title">
        {{ notedata.title }}
    </div>
    <div class="col-xs-12 value">
        {{ notedata.value }}
    </div>
</div>
    `,
    styles: [`
.note-card {
    padding: 15px;
    border-radius: 2px;
    width: 100%;
    position: relative;
}
.title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: left;
    color: rgba(0,0,0,0.8);
}
.value {
    text-align: left;
    font-size: 2.4rem;
    font-weight: 200;
}
.icon {
    position: absolute;
    color: black;
    border: 1px solid lightgrey;
    background-color: white;
    font-size: 36px;
    top:   -15px;
    left:  -15px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    cursor: pointer;
}
    `]
})

// public fields are binded
export class NoteCard {

    @Input() notedata = {
        title: '',
        value: '',
    }

    checkVisible: boolean = false;

    @Output() cardRemoved = new EventEmitter();

    toggleVisiable() {
        this.checkVisible = !this.checkVisible;
    }

    removeCard() {
        this.cardRemoved.next(); // come on work
        console.log('Should be removed!')
    }

}