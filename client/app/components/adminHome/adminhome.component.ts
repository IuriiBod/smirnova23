import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { UserService } from "../../services/user.service";
import { ContentService } from "../../services/content.service";
import { AuthenticationService }  from '../../services/authentication.service';
import { Home } from "../../models/home";
import { Router } from '@angular/router';

@Component({
  selector: 'adminHome',
  templateUrl: './app/components/adminHome/adminHome.component.html',
  styleUrls: ['./app/components/adminHome/adminHome.component.css'],
})

export class AdminHomeComponent implements OnInit {
  @Input() home: Home;
  public hasDropZoneOver:boolean = false;
  public uploader:FileUploader = this.contentService.uploader;
  
      
  constructor(
    private userService: UserService,
    private contentService: ContentService,
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  public fileOverBase(e:any):void {
    this.hasDropZoneOver = e;
  }
 
  save(){
    console.log(this.home);
    this.contentService.upload();
  }

  cancel(){
    console.log('cancel');
    //uploader.cancelAll()
  }

  delete(){
    console.log('delete');
    //uploader.clearQueue()
  }

  ngOnInit() {
    this.home = new Home();
  }

  onChange(event) {
    var files = event.srcElement.files;
    var obj = {};

    for (var key in files[0]){
      obj[key] = files[0][key];
    }

    console.log(obj);
    //this.userService.upload(obj);
  }
}