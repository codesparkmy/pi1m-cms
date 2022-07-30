import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpResponse
} from '@angular/common/http';
import { AuthenticateService } from '../../routes/services/authenticate.service';
import { map } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor(public auth: AuthenticateService) {
	}
	intercept(request: HttpRequest<any>, next: HttpHandler) {

		const token: string = localStorage.getItem('authtoken');
		if (token) {
			request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
		}
		if (!request.headers.has('Content-Type')) {
			request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
		}
		request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					// console.log('event--->>>', event);
					// this.errorDialogService.openDialog(event);
				}
				return event;
			})
		);
	}

}
