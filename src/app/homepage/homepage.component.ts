import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
  })

  export class HomepageComponent implements OnInit {

    readonly man = './assets/img/man.jpg';
    readonly heartbeat = './assets/img/heartbeat.png';

    ngOnInit(){
        
    }

  }