import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request Url',req.url);
  console.log('request method',req.method);
  return next(req);
};
