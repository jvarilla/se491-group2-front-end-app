import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'toFahrenheit'})
export class FahrenheitPipe implements PipeTransform {
  transform(value: number = 0): string {
    return `${value.toFixed(1)}°F`;
  }
}
