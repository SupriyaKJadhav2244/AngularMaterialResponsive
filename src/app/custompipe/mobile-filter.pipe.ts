import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileFilter'
})
export class MobileFilterPipe implements PipeTransform {

  transform(price:number,productName:string): any {
    if(productName.toUpperCase()=="SAMSUNG"){
      return price/3;
    }else if(productName.toUpperCase()=="REDMI"){
      return price/2;
    }else{
      return price;
    }
  }

}
