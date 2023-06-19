import { Controller, Get, Response, UseInterceptors } from '@nestjs/common';
import { NDJSONInterceptor } from './ndjson.intercepter';

@Controller()
export class AppController {

  @Get('/json')
  getJson(): string[] {
    return this.#generatePayload();
  }

  @Get('/ndjson')
  @UseInterceptors(NDJSONInterceptor)
  getNdJson(): string[] {
    return this.#generatePayload();
  }

  #generatePayload(): string[] {
    const result = [];

    for (let i = 0; i < 499999; i++) {
      result.push({ 
        entityID: i, 
        entityMessage: 'BRM0MeA+AE0niF/0Z3kNJudVnleK18FvChxcUEHMqX+wEzAVldgwT9lFY1t9/A7AhuoPpJYGKgNotozTD5Sf2B2Di9aCHRC6vo1FZnKMjzU51+GGX/+h8DNhqPq1c76fPvAQsNoLz8pPVrki9LQkhswqQidL0BWL+nJKiLEyH4MnmWuW3Xa5X0PfvF+hMSb92MbOu+FwumMHaT0pF1yye9zIQdzoAyZbPThvwEAbqzGYD/I/n6oij0Lm8awurxtmhrOkLw/exeqcxJ+z+CR07Sl1ZCloG0Jtd+5yF4HgUEiEapzNJPR7jD3C74+Jexu1XOhUedl99Fn7p+ccwjyx/g==',
        entityTimestamp:1495578885,
        entityField1:null,
        entityField2:0,
        entityField3:0,
        entityField4:0,
        entityField5:null,
        relatedEntity1ID:111,
        relatedEntity2ID:340,
        relatedEntity3ID:0,
      });
    }

    return result;
  }
}
