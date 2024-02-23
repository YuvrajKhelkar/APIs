import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AutoService } from './auto/auto.service';
import { Auto } from './entities/auto.entity';
import { Auto2 } from './entities/auto2.entity';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly autoService: AutoService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/autos')
  getAllAutos(): Promise<Auto[]> {
    return this.autoService.getAllAutos();
  }

  @Get('/auto2s')
  getAllAuto2s(): Promise<Auto2[]> {
    return this.autoService.getAllAuto2s();
  }

}
