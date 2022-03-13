import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'toCloudinessLevel'})
export class CloudinessLevelPipe implements PipeTransform {
  transform(value: number = 0): string {
    if (value == undefined) {
      return `?`;
    }
    return `${(value).toFixed(0)}%`;
  }
}
