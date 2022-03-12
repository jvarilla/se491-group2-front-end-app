import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name: 'fromMilitaryHour'})
export class MilitaryTimeToHourPipe implements PipeTransform {
  transform(value: number = -1): string {
    if (value === -1) {
      return ''
    }

    const inMilitaryScale: number = Math.floor(value % 24);
    let result: string;

    if (inMilitaryScale > 12) {
      result = `${(inMilitaryScale - 12).toFixed(0)}PM`
    } else if (inMilitaryScale === 0) {
      result =  '12AM';
    } else {
      result = `${(inMilitaryScale).toFixed(0)}AM`
    }

    return result;
  }
}
