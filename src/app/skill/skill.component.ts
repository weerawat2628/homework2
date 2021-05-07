import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { skill } from '../model/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill: skill[];
   
  constructor(private backendService: BackendService) {
    this.skill = [];}

  ngOnInit(): void {
    this.skill = this.backendService.getaskil();
  }

}
