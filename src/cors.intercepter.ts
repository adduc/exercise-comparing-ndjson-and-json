import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @see http://ndjson.org/
 */
@Injectable()
export class CorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse<FastifyReply>();
    return next.handle().pipe(this.process(response));
  }

  process(response: any) {
    return map(function (data: any) {
      response.header('Access-Control-Allow-Origin', '*');

      return data;
    });
  }
}
