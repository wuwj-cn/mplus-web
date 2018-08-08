import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";

import { NzMessageService } from "ng-zorro-antd";
import { Router } from "@angular/router";
import { of, Observable } from "rxjs";
import { catchError, mergeMap } from "rxjs/operators";

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {
        
    }
    
    get msg(): NzMessageService {
        return this.injector.get(NzMessageService);
    }

    private navigate(url: string) {
        setTimeout(() => this.injector.get(Router).navigateByUrl(url));
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | 
                                                                    HttpHeaderResponse | 
                                                                    HttpProgressEvent | 
                                                                    HttpResponse<any> | 
                                                                    HttpUserEvent<any>> {
        return next.handle(req).pipe(
            mergeMap((event: any) => {
                // 允许统一对请求错误处理，这是因为一个请求若是业务上错误的情况下其HTTP请求的状态是200的情况下需要
                if (event instanceof HttpResponse && event.status === 200) {
                    console.log('http-service.interceptor...');
                    return this.handleData(event);
                }
                // 若一切都正常，则后续操作
                return of(event);
            }),
            catchError((err: HttpErrorResponse) => this.handleData(err)),
            );
    }

    private handleData(event: HttpResponse<any> | HttpErrorResponse): Observable<any> {
        // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
        // this.injector.get(_HttpClient).end();
        // 业务处理：一些通用操作
        switch (event.status) {
          case 200:
            if (event instanceof HttpResponse) {
                const body: any = event.body;
                if (body && body.status !== 900) {
                    this.msg.error(body.msg);
                    // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
                    // this.http.get('/').subscribe() 并不会触发
                    // return throwError({});
                } else {
                    // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
                    // return of(new HttpResponse(Object.assign(event, { body: body.response })));
                    // 或者依然保持完整的格式
                    return of(event);
                }
            }
            break;
          case 401: // 未登录状态码
            this.navigate('/login');
            break;
          default:
            if (event instanceof HttpErrorResponse) {
              console.error('未可知错误', event);
              this.msg.error(event.error.msg);
            }
            break;
        }
        return of(event);
      }
}
