import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutoService } from './auto/auto.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto2 } from './entities/auto2.entity';
import { Auto } from './entities/auto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin123',
      database: 'demodb',
      entities: [Auto2, Auto], // Include your entities here
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Auto, Auto2]),
  ],
  controllers: [AppController],
  providers: [AppService, AutoService],
})
export class AppModule {}
