import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { App } from './app'
import { Main } from './app/containers'
import { Navbar } from './app/ui'

@NgModule({
    declarations:[
        App,
        Main,
        Navbar
    ],
    imports:[BrowserModule],
    bootstrap :[App]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)