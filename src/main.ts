import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { FormsModule } from '@angular/forms'
import { App } from './app'
import { Main, NoteContainer } from './app/containers'
import { Navbar, NoteCard, NoteCreator } from './app/ui'


@NgModule({
    declarations:[
        App,
        Main,
        Navbar,
        NoteCard,
        NoteContainer,
        NoteCreator
    ],
    imports:[
        BrowserModule,
        FormsModule
    ],
    bootstrap :[App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)