import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ScrapyService {

    // _url = 'https://images-scrapy.herokuapp.com/api/v1'; // For api
     _url = 'http://localhost:3000/api/v1';      //For local 
    headers: any;
    options: any;
    constructor(
        private _http: Http,
    ) {

    }

    /* Get All Images */
    getImages(keyword) {
        console.log(keyword);
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        return this._http.post(this._url + '/getImages', { keyword: keyword }, this.options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    /* Get All Data */
    getScrapyData() {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
        return this._http.get(this._url + '/getScrapyData', this.options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }


}
