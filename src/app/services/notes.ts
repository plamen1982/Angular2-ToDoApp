import { Injectable } from '@angular/core'
import { Api } from './api'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class NotesService {
    private path: string = '/notes'

    constructor(private api: Api){

    }

    getNotes() : Observable<any> {
        return this.api
            .get(this.path)
    }

    createNote(note) : Observable<any> {
        return this.api
            .post(this.path, note)
    }

    completeNote(note) : Observable<any> {
        let completePath = `${this.path}/${note.id}`
        return this.api.delete(completePath)
    }

}