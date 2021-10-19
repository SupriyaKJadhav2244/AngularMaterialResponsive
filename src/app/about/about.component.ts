import { Component, OnInit } from '@angular/core';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private mediaObserver:MediaObserver) { }

  mediaSub : Subscription | any; 
  xsdevice!: boolean;
  smdevice!: boolean;

  panelOpenState = false;

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.xsdevice = result.mqAlias == 'xs'?true : false;

        this.smdevice = result.mqAlias == 'sm'?true : false;
      })
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}
