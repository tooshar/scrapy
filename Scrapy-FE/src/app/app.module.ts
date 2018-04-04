import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FetchImagesComponent } from './fetch-images/fetch-images.component';
import { KeywordsHistoryComponent } from './keywords-history/keywords-history.component';
import { SavedImagesComponent } from './saved-images/saved-images.component';

import { FormsModule } from '@angular/forms'
import { AppRouterModule } from './routeConfig/app-router.module';
import { ScrapyService } from './shared/services/scrapy.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    FetchImagesComponent,
    KeywordsHistoryComponent,
    SavedImagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [ScrapyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
