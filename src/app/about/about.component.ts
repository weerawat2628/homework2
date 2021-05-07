import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { About } from '../model/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: About[];
   
  constructor(private backendService: BackendService) {
    this.about = [];}
  ngOnInit(): void {
    this.about = this.backendService.getabout();
  }

}
