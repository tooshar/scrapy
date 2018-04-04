import { Component, OnInit } from '@angular/core';
import { ScrapyService } from '../shared/services/scrapy.service';

@Component({
  selector: 'app-keywords-history',
  templateUrl: './keywords-history.component.html',
  styleUrls: ['./keywords-history.component.css']
})
export class KeywordsHistoryComponent implements OnInit {

  loading: String;         //loader
  scrapyData: any;         //All data retrieved
  keywordsImages: any;     //Images of a keyword
  
  constructor(private _scrapyService: ScrapyService) { }

  ngOnInit() {
    /* Initialize scrapyData with  array of data*/
    this._scrapyService.getScrapyData().subscribe(data => {
      this.scrapyData = data;
    })
  }

  /* Fetch all the stored images of a keyword */
  getStoredImages(data,i){
    this.keywordsImages = data.images;
  }
}
