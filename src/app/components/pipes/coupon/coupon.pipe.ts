import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coupon'
})
export class CouponPipe implements PipeTransform {

  transform(price: number): any {
    return price * 0.8
  }

}
