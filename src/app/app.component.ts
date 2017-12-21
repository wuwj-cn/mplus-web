import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private translate: TranslateService){
    this.translate.addLangs(['en', 'zh']);
    // this.translate.setDefaultLang('zh');
    const browserLang = this.translate.getBrowserLang();
    console.log("browserLang: " + browserLang);
    // this.translate.use(browserLang.match(/en|zh/) ? browserLang : 'zh');
  }
}
