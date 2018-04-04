import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { FetchImagesComponent } from '../fetch-images/fetch-images.component';
import { KeywordsHistoryComponent } from '../keywords-history/keywords-history.component';

const routes: Routes = [
    {path: '', redirectTo: '/fetch-images', pathMatch: 'full'},
    {path: 'fetch-images', component: FetchImagesComponent},
    {path: 'keywords-history', component: KeywordsHistoryComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {}