import { Injectable, Inject, Provider, Optional, SkipSelf } from '@angular/core';
import { MpI18nInterface } from './mp-i18n.interface';
import { MP_I18N } from './mp-i18n.token';
import { NzI18nService, en_US, zh_CN } from 'ng-zorro-antd';

@Injectable()
export class MpI18nService {

  private _locale: MpI18nInterface;

  constructor(@Inject(MP_I18N) locale: MpI18nInterface, private nzI18nService:NzI18nService) {
    this.setLocale(locale);
  }

  translate(path: string, data?: any): string {
    let content = this._getObjectPath(this._locale, path) as string;
    if (typeof content === 'string') {
      if (data) {
        Object.keys(data).forEach((key) => content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]));
      }
      return content;
    }
    return path;
  }

  /**
   * Set/Change current locale globally throughout the WHOLE application
   * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
   * @param locale The translating letters
   */
  setLocale(locale: MpI18nInterface): void {
    this._locale = locale;
    this.nzI18nService.setLocale(locale.locale === 'zh-cn' ? zh_CN : en_US);
  }

  getLocale(): MpI18nInterface {
    return this._locale;
  }

  getLocaleId(): string {
    return this._locale ? this._locale.locale : '';
  }

  /**
   * Get locale data
   * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
   * @param defaultValue default value if the result is not "truthy"
   */
  getLocaleData(path?: string, defaultValue?: any): any { // tslint:disable-line:no-any
    const result = path ? this._getObjectPath(this._locale, path) : this._locale;
    return result || defaultValue;
  }

  private _getObjectPath(obj: object, path: string): string | object {
    let res = obj;
    const paths = path.split('.');
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
}

export function MP_LOCALE_SERVICE_PROVIDER_FACTORY(exist: MpI18nService, locale: MpI18nInterface, nzI18nService:NzI18nService): MpI18nService {
  return exist || new MpI18nService(locale, nzI18nService);
}

export const MP_I18N_SERVICE_PROVIDER: Provider = {
  provide   : MpI18nService,
  useFactory: MP_LOCALE_SERVICE_PROVIDER_FACTORY,
  deps      : [ [ new Optional(), new SkipSelf(), MpI18nService ], MP_I18N, NzI18nService ]
};