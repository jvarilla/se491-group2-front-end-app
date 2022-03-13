import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'toHumidity'})
export class HumidityPipe implements PipeTransform {
  transform(value: number = 0): string {
    if (value == undefined) {
      return `?`;
    }
    return `${value.toFixed(2)}°`;
  }
}
