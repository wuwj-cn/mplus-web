import { Pipe, PipeTransform } from '@angular/core';
import { MpI18nService } from './mp-i18n.service';

@Pipe({
  name: 'mpI18n'
})
export class MpI18nPipe implements PipeTransform {

  constructor(private _locale: MpI18nService) {
  }

  transform(value: any, args?: any): any {
    return this._locale.translate(value, args);
  }

}
