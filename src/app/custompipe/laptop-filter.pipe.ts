import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'laptopFilter'
})
export class LaptopFilterPipe implements PipeTransform {

  transform(price: number,productName:string): any {
    if(productName.toUpperCase()=="LENOVO"){
      return price/3;
    }else if(productName.toUpperCase()=="DELL"){
      return price/2;
    }else{
      return price;
    } 
  }  
}
