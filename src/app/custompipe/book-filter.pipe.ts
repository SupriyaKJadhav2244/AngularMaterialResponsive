import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(price: number,productName:string): any {
    if(productName.toUpperCase()=="MAHABHARAT"){   
      return price/2;
    }else if(productName.toUpperCase()=="BIBLE"){
      return price/2;
    }else{
      return price;
    }
  }

}
