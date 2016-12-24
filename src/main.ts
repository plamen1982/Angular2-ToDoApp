import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app'
import { Main, NoteContainer } from './app/containers'
import { Navbar, NoteCard } from './app/ui'


@NgModule({
    declarations:[
        App,
        Main,
        Navbar,
        NoteCard,
        NoteContainer
    ],
    imports:[BrowserModule],
    bootstrap :[App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)