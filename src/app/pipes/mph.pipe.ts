import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'toMPH'})
export class MPHPipe implements PipeTransform {
  transform(value: number = 0): string {
    if (value == undefined) {
      return `?`;
    }
    return `${value.toFixed(1)}mph`;
  }
}
