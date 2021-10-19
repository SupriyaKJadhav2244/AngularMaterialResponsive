import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
// import { BOOKSDATA } from '../data/booksdata';
import { BooksModel } from '../model/book.model';

import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  constructor(private sharedService:SharedService,private mediaObserver:MediaObserver) { }

  mediaSub : Subscription | any; 
  xsdevice!: boolean;
  smdevice!: boolean;

  books : BooksModel[] = [];
  totProds:any;

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);
        this.xsdevice = result.mqAlias == 'xs'?true : false;

        this.smdevice = result.mqAlias == 'sm'?true : false;
      })


    // this.books = BOOKSDATA;

    this.sharedService.getBookData().subscribe((data:any)=>{ 
    //  console.log(data);  
    //  console.log(data.bookData);
     this.books=data.bookData;
    this.totProds = this.sharedService.calc(this.books);
    })
  }

  removeBookQuentity(book:any){   
    // console.log(book.quentity);
    if(book.quentity>0){
      book.quentity--;
    }  
  }

  addBookQuentity(book:any){ 
    // console.log(laptop.quentity);
    if(book.quentity<book.inStock){
      book.quentity++;
    }
  }  

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}
