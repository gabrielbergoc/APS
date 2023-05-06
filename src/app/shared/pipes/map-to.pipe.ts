import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapTo'
})
export class MapToPipe implements PipeTransform {

  transform(array: unknown[], prop: string): unknown {
    return array.map((item: any) => item[prop]);
  }

}
