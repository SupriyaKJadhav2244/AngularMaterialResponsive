import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
// import { LAPDATA } from '../data/laptopdata';
import { LaptopModel } from '../model/laptop.model';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit, OnDestroy{

  constructor(private sharedService:SharedService,private mediaObserver:MediaObserver) { }

  mediaSub : Subscription | any; 
  xsdevice!: boolean;
  smdevice!: boolean;

  laptops:LaptopModel[] = [];
  totProds:any;

  ngOnInit(): void {    
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.xsdevice = result.mqAlias == 'xs'?true : false;

        this.smdevice = result.mqAlias == 'sm'?true : false;
      })
    
    // this.laptops = LAPDATA;

    this.sharedService.getlaptopData().subscribe((data:any)=>{ 
    // console.log(data);
    // console.log(data.lapData);  
    this.laptops=data.lapData;
    this.totProds = this.sharedService.calc(this.laptops);
    }) 
  }

  removeLapQuentity(laptop:any){ 
    // console.log(laptop.quentity);
    if(laptop.quentity>0){
      laptop.quentity--;
    }  
  }

  addLapQuentity(laptop:any){ 
    // console.log(laptop.quentity);
    if(laptop.quentity<laptop.inStock){
      laptop.quentity++;
    }
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}
