import { TestBed, inject } from '@angular/core/testing';

import { MpI18nService } from './mp-i18n.service';

describe('MpI18nService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MpI18nService]
    });
  });

  it('should be created', inject([MpI18nService], (service: MpI18nService) => {
    expect(service).toBeTruthy();
  }));
});
