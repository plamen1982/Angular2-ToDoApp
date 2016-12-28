import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterOutlet } from '@angular/router'
import { App, providers, routes } from './app'
import { Main, NotesContainer, About } from './app/containers'
import { Navbar, NoteCard, NoteCreator, ColorPicker } from './app/ui'
import { Api, NotesService } from './app/services'
import 'rxjs/add/operator/map'

@NgModule({
    declarations:[
        App,
        Main,
        Navbar,
        NoteCard,
        NotesContainer,
        NoteCreator,
        ColorPicker,
        About
    ],

    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ], providers,
    bootstrap :[App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)