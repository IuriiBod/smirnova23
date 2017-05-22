import {Injectable} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

//import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import 'rxjs/add/operator/toPromise';


@Injectable()
export class ContentService {

  public uploader:FileUploader = new FileUploader({url: 'api/upload'});
  
  upload() {
    return this.uploader.uploadAll();
    // let headers = new Headers({
    //         'Content-Type': 'application/json'});

    // return this.http.post('api/upload', JSON.stringify(data), {headers:headers})
    //   .toPromise()
    //   .then(response => response.json())
    //   .catch(this.handleError);
  }
}