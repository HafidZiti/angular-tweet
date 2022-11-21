import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likes'
})
export class LikesPipe implements PipeTransform {
  transform(value: number): number | string {
    if (value - 1000 > 0) return `${(value / 1000).toFixed(1)}k`;
    else return value;
  }
}
