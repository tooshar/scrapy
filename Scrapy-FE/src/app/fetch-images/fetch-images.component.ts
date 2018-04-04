import { Component, OnInit } from '@angular/core';
import { ScrapyService } from '../shared/services/scrapy.service';

@Component({
  selector: 'app-fetch-images',
  templateUrl: './fetch-images.component.html',
  styleUrls: ['./fetch-images.component.css']
})
export class FetchImagesComponent implements OnInit {

  keyword: String = '';   //User input keyword
  loading: boolean;       //loader
  images: any;            //Images fetched on keyword click
  error: boolean = false; //handling error

  constructor(private _scrapyService: ScrapyService) { }

  ngOnInit() {
  }

  fetchImages() {
    if (!this.keyword) {
      this.error = true;
      return;
    }
    else {
      this.loading = true;
      this._scrapyService.getImages(this.keyword)
        .subscribe(data => {
          this.images = data;
          this.loading = false;
        });
      this.error = false;
    }
  }




}
