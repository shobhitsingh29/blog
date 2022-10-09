import { AppService } from './app.service';
import { Controller, Get, Param, Render } from '@nestjs/common';
import { map, toArray } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('index')
  home() {
    return this.appService.getBlogPosts().pipe(
      toArray(),
      map((blogPosts) => ({ blogPosts })),
    );
  }

  @Get(':id')
  @Render('[id]')
  public blogPost(@Param('id') id: string) {
    return {};
  }
}
